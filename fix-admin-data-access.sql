-- ============================================================
-- Fix: Admin can log in but cannot see users / records
-- Run once in Supabase → SQL Editor
-- ============================================================

-- 1) Grant admin role to your admin account(s)
UPDATE public.profiles
SET role = 'admin', updated_at = TIMEZONE('utc', NOW())
WHERE LOWER(email) IN (
  LOWER('warrenokumu98@gmail.com')
  -- add more admin emails below if needed:
  -- , LOWER('you@example.com')
);

-- 2) is_admin() must match app logic (role OR known admin email)
CREATE OR REPLACE FUNCTION public.is_admin(user_uuid UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_email TEXT;
BEGIN
  IF user_uuid IS NULL THEN
    RETURN FALSE;
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.profiles
    WHERE user_id = user_uuid AND role = 'admin'
  ) THEN
    RETURN TRUE;
  END IF;

  SELECT LOWER(email) INTO user_email
  FROM auth.users
  WHERE id = user_uuid;

  IF user_email IN ('warrenokumu98@gmail.com') THEN
    RETURN TRUE;
  END IF;

  RETURN FALSE;
END;
$$;

-- 3) Re-apply admin SELECT policies (safe if they already exist)
DROP POLICY IF EXISTS "Admins view all profiles" ON public.profiles;
CREATE POLICY "Admins view all profiles"
  ON public.profiles FOR SELECT
  USING (public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "Admins view all tickets" ON public.support_tickets;
CREATE POLICY "Admins view all tickets"
  ON public.support_tickets FOR SELECT
  USING (public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "Admins view all mining stats" ON public.mining_stats;
CREATE POLICY "Admins view all mining stats"
  ON public.mining_stats FOR SELECT
  USING (public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "Admins view all deposits" ON public.deposits;
CREATE POLICY "Admins view all deposits"
  ON public.deposits FOR SELECT
  USING (public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "Admins view all withdrawals" ON public.withdrawals;
CREATE POLICY "Admins view all withdrawals"
  ON public.withdrawals FOR SELECT
  USING (public.is_admin(auth.uid()));

-- Verify
SELECT email, role FROM public.profiles WHERE role = 'admin' ORDER BY created_at DESC;
