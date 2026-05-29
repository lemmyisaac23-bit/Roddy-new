import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name: string | null;
  role: 'admin' | 'user';
  mining_enabled?: boolean;
  mining_stop_balance?: number | null;
  referral_code?: string;
  referral_balance?: number;
  username?: string;
  mobile?: string;
  country_code?: string;
  country?: string;
  address?: string;
  state?: string;
  zip_code?: string;
  city?: string;
  usdt_wallet_address?: string;
  two_fa_enabled?: boolean;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName?: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/** Must stay in sync with is_admin() in fix-admin-data-access.sql */
const ADMIN_EMAILS = ['warrenokumu98@gmail.com'];

const isAdminEmail = (email?: string | null) =>
  Boolean(email && ADMIN_EMAILS.includes(email.trim().toLowerCase()));

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const profileFetchRef = useRef<{ userId: string; promise: Promise<void> } | null>(null);

  useEffect(() => {
    // Get initial session — keep loading=true until profile is fetched
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id).catch((err) => {
          console.error(err);
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes — keep loading=true until profile is fetched
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id).catch((err) => {
          console.error(err);
          setLoading(false);
        });
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  /** RLS uses profiles.role = admin — sync DB when logging in with a known admin email */
  const ensureAdminRoleInDb = async (userId: string, email?: string | null) => {
    if (!isAdminEmail(email)) return;
    const { error } = await supabase
      .from('profiles')
      .update({ role: 'admin' })
      .eq('user_id', userId);
    if (error) {
      console.warn('[AuthContext] Could not set admin role in DB (run fix-admin-data-access.sql):', error.message);
      return;
    }
    console.log('[AuthContext] Admin role synced in database for', email);
  };

  const fetchProfile = async (userId: string) => {
    if (profileFetchRef.current?.userId === userId) {
      return profileFetchRef.current.promise;
    }

    const run = async () => {
      try {
        await fetchProfileOnce(userId);
      } finally {
        if (profileFetchRef.current?.userId === userId) {
          profileFetchRef.current = null;
        }
      }
    };

    const promise = run();
    profileFetchRef.current = { userId, promise };
    return promise;
  };

  const fetchProfileOnce = async (userId: string) => {
    try {
      console.log('[AuthContext] Fetching profile for user:', userId);

      // Core columns only — avoids slow/failed queries when optional columns are missing
      const coreColumns =
        'id, user_id, email, full_name, role, referral_code, referral_balance, mining_stop_balance, created_at, updated_at';

      let { data, error } = await supabase
        .from('profiles')
        .select(coreColumns)
        .eq('user_id', userId)
        .maybeSingle();

      // Optional: mining_enabled (may not exist in older schemas)
      if (!error && data) {
        try {
          const { data: extra, error: extraErr } = await supabase
            .from('profiles')
            .select('mining_enabled')
            .eq('user_id', userId)
            .maybeSingle();
          if (!extraErr && extra && typeof extra.mining_enabled === 'boolean') {
            data = { ...data, mining_enabled: extra.mining_enabled };
          } else {
            data = { ...data, mining_enabled: true };
          }
        } catch {
          data = { ...data, mining_enabled: true };
        }
      }

      if (error && (error.code === '42703' || error.message?.includes('mining_enabled'))) {
        const fallback = await supabase
          .from('profiles')
          .select(coreColumns)
          .eq('user_id', userId)
          .maybeSingle();
        data = fallback.data ? { ...fallback.data, mining_enabled: true } : null;
        error = fallback.error;
      }

      if (error) {
        console.error('[AuthContext] Error fetching profile:', error);
        console.error('[AuthContext] Error code:', error.code);
        console.error('[AuthContext] Error message:', error.message);
        
        // If profile doesn't exist, try to get user email and create one
        if (error.code === 'PGRST116') {
          console.log('[AuthContext] Profile not found, attempting to create one');
          try {
            const { data: { user: authUser } } = await supabase.auth.getUser();
            if (authUser?.email) {
              const isAdmin = isAdminEmail(authUser.email);
              console.log('[AuthContext] Creating profile with role:', isAdmin ? 'admin' : 'user');
              
              // Generate referral code (simple hash-based)
              const hashString = authUser.email + userId;
              let hash = 0;
              for (let i = 0; i < hashString.length; i++) {
                const char = hashString.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash; // Convert to 32bit integer
              }
              const refCode = Math.abs(hash).toString(36).toUpperCase().substring(0, 8);
              
              const { data: newProfile, error: createError } = await supabase
                .from('profiles')
                .insert({
                  user_id: userId,
                  email: authUser.email,
                  role: isAdmin ? 'admin' : 'user',
                  referral_code: refCode,
                })
                .select()
                .single();
              
              if (createError) {
                console.error('[AuthContext] Failed to create profile:', createError);
                console.error('[AuthContext] This might be an RLS policy issue');
                // Still set profile to null but continue - user can still access dashboard
                setProfile(null);
              } else {
                console.log('[AuthContext] Profile created successfully:', newProfile);
                setProfile(newProfile);
              }
            } else {
              setProfile(null);
            }
          } catch (createErr) {
            console.error('[AuthContext] Error creating profile:', createErr);
            setProfile(null);
          }
        } else {
          // For other errors, still set profile to null but don't block
          console.warn('[AuthContext] Profile fetch failed, continuing without profile');
          setProfile(null);
        }
      } else if (data) {
        console.log('[AuthContext] Profile fetched successfully:', {
          email: data.email,
          role: data.role,
        });
        if (isAdminEmail(data.email) && data.role !== 'admin') {
          await ensureAdminRoleInDb(userId, data.email);
          data = { ...data, role: 'admin' as const };
        }
        setProfile(data);
      } else {
        const { data: authData } = await supabase.auth.getUser();
        const authEmail = authData.user?.email;
        if (isAdminEmail(authEmail)) {
          await ensureAdminRoleInDb(userId, authEmail);
          setProfile({
            id: userId,
            user_id: userId,
            email: authEmail!,
            full_name: null,
            role: 'admin',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });
        } else {
          setProfile(null);
        }
      }
    } catch (error: any) {
      console.error('[AuthContext] Unexpected error fetching profile:', error);
      // Even on error, set profile to null and continue
      setProfile(null);
    } finally {
      // Always set loading to false, even if there were errors
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    console.log('[AuthContext] Attempting sign in with email:', email);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error) {
      console.error('[AuthContext] Sign in error:', error.message);
      throw error;
    }

    if (data.session) {
      setSession(data.session);
    }
    if (data.user) {
      console.log('[AuthContext] Sign in successful — profile loads in background');
      setUser(data.user);
      setLoading(false);
      if (isAdminEmail(data.user.email)) {
        await ensureAdminRoleInDb(data.user.id, data.user.email);
      }
      void fetchProfile(data.user.id);
    } else {
      console.warn('[AuthContext] Sign in succeeded but no user data');
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName?: string) => {
    console.log('[AuthContext] Attempting sign up with email:', email);
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName || '',
            display_name: fullName?.split(' ')[0] || '',
          },
        },
      });

      if (error) {
        const isRateLimit =
          error.message?.toLowerCase().includes('rate limit') ||
          error.message?.toLowerCase().includes('over_email_send_rate_limit');

        const isAlreadyRegistered =
          error.message?.toLowerCase().includes('already registered') ||
          error.message?.toLowerCase().includes('user already') ||
          error.status === 422;

        if (isAlreadyRegistered) {
          // User exists — sign them in instead of staying stuck
          console.warn('[AuthContext] User already registered — attempting sign in instead');
          setLoading(false);
          const friendlyError: any = new Error('An account with this email already exists. Please sign in instead.');
          friendlyError.code = 'USER_ALREADY_EXISTS';
          throw friendlyError;
        }

        if (!isRateLimit) {
          console.error('[AuthContext] Sign up error:', error.message);
          setLoading(false);
          throw error;
        }
        console.warn('[AuthContext] Email rate limit hit during signup — continuing anyway:', error.message);
      }

      if (data.user) {
        console.log('[AuthContext] User created, ID:', data.user.id);

        // Wait briefly for the DB trigger (handle_new_user) to create the profile row
        await new Promise(resolve => setTimeout(resolve, 800));

        // If full_name provided, try to update the profile the trigger created
        // Use update (not upsert) to avoid RLS insert conflicts
        if (fullName) {
          const isAdmin = email.toLowerCase() === 'warrenokumu98@gmail.com';
          await supabase
            .from('profiles')
            .update({ full_name: fullName, role: isAdmin ? 'admin' : 'user' })
            .eq('user_id', data.user.id)
            .then(({ error }) => {
              if (error) console.warn('[AuthContext] Profile update skipped (trigger may not have run yet):', error.message);
              else console.log('[AuthContext] Profile updated with full_name');
            });
        }

        // Fetch profile in background — don't block signup completion
        fetchProfile(data.user.id).catch(console.warn);

      } else {
        console.log('[AuthContext] Sign up successful — email confirmation may be required');
        setLoading(false);
      }
    } catch (error) {
      console.error('[AuthContext] Unexpected error during sign up:', error);
      setLoading(false);
      throw error;
    }
  };

  const refreshProfile = async () => {
    if (!user?.id) return;
    await fetchProfile(user.id);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
  };

  const value = {
    user,
    profile,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    refreshProfile,
    isAdmin: profile?.role === 'admin' || isAdminEmail(user?.email),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

