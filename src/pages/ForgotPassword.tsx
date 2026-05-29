import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { ArrowLeft } from "lucide-react";
import { AuthPageLayout } from "@/components/marketing/AuthPageLayout";
import { themeClasses } from "@/constants/theme";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/\S+@\S+\.\S+/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const redirectTo = `${window.location.origin}/reset-password`;
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(trimmed, { redirectTo });
      if (resetError) throw resetError;
      setMessage(
        "If an account exists for this email, you will receive a reset link shortly. Open it on this same site (check spam).",
      );
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthPageLayout title="Reset Password" subtitle="We'll email you a secure reset link">
      <Link to="/login" className={`inline-flex items-center gap-1 text-sm mb-6 ${themeClasses.link}`}>
        <ArrowLeft className="h-4 w-4" />
        Back to login
      </Link>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-600">
          {error}
        </div>
      )}
      {message && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md text-sm text-green-800">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-slate-700">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={`mt-1 h-12 ${themeClasses.input}`}
          />
        </div>
        <Button type="submit" className={`w-full h-12 ${themeClasses.btnPrimary}`} disabled={loading}>
          {loading ? "Sending..." : "Send reset link"}
        </Button>
      </form>
    </AuthPageLayout>
  );
};

export default ForgotPassword;
