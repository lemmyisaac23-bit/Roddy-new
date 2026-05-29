import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { AuthPageLayout } from "@/components/marketing/AuthPageLayout";
import { themeClasses } from "@/constants/theme";

const SignIn = () => {
  const navigate = useNavigate();
  const redirectedRef = useRef(false);
  const { signIn, user, profile, session, isAdmin, loading: authLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user && session && !redirectedRef.current) {
      redirectedRef.current = true;
      setIsLoading(false);
      const adminByEmail = user.email?.toLowerCase() === "warrenokumu98@gmail.com";
      const destination =
        profile?.role === "admin" || adminByEmail || isAdmin ? "/admin" : "/dashboard";
      navigate(destination, { replace: true });
    } else if (!user && !authLoading) {
      redirectedRef.current = false;
    }
  }, [user, session, profile, isAdmin, authLoading, navigate]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    if (error) setError(null);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setError(null);
    try {
      await signIn(formData.email.trim().toLowerCase(), formData.password);
    } catch (err: unknown) {
      let errorMessage = "Sign in failed. Please check your credentials and try again.";
      const message = err instanceof Error ? err.message : "";
      if (message.includes("Invalid login credentials") || message.includes("Invalid credentials")) {
        errorMessage = "Invalid email or password. Please try again.";
      } else if (message.includes("Email not confirmed")) {
        errorMessage = "Please confirm your email before signing in.";
      } else if (message) {
        errorMessage = message;
      }
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <AuthPageLayout title="Sign In" subtitle="Login to your Grillhashpowermine account">
      <h2 className="font-serif text-2xl text-slate-900 mb-6">Login To Your Account</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Username or Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`h-12 ${themeClasses.input}`}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className={`h-12 pr-10 ${themeClasses.input}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={formData.rememberMe}
              onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
            />
            <Label htmlFor="remember" className="text-slate-600 text-sm">
              Remember Me
            </Label>
          </div>
          <Link to="/forgot-password" className={`text-sm ${themeClasses.link}`}>
            Forgot Password
          </Link>
        </div>

        <Button type="submit" className={`w-full h-12 ${themeClasses.btnPrimary}`} disabled={isLoading}>
          {isLoading ? "Signing In..." : "Login"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-slate-600">
          Don&apos;t Have An Account?{" "}
          <Link to="/signup" className={themeClasses.link}>
            Register
          </Link>
        </p>
      </div>
    </AuthPageLayout>
  );
};

export default SignIn;
