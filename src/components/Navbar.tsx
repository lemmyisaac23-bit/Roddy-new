import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiteLogo } from "@/components/marketing/SiteLogo";

export const Navbar = () => {
  const { user, signOut, isAdmin, loading, session } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const showSignOut = !loading && Boolean(user) && Boolean(session);

  const handleSignOut = async () => {
    if (isProcessing) return;
    try {
      setIsProcessing(true);
      await signOut();
      navigate("/");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleLogoClick = () => {
    if (showSignOut) {
      navigate(isAdmin ? "/admin" : "/dashboard");
    } else {
      navigate("/");
    }
  };

  const navLinkClass =
    "text-slate-800 font-medium text-sm hover:text-[#2563eb] transition-colors px-3 py-2";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          <button
            type="button"
            onClick={handleLogoClick}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded-md"
          >
            <SiteLogo />
          </button>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <Link to="/" className={navLinkClass}>
              Home
            </Link>
            <Link to="/signup" className={navLinkClass}>
              Cloud Mining
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${navLinkClass} inline-flex items-center gap-1 outline-none`}
              >
                About Us
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-white border-slate-200 min-w-[180px]">
                <DropdownMenuItem onClick={() => navigate("/about-us")}>About Us</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/team")}>Team</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/terms")}>Terms of Service</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/privacy")}>Privacy Policy</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/usage-policy")}>Usage Policy</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/cookie-policy")}>Cookie Policy</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            {showSignOut ? (
              <button
                type="button"
                onClick={handleSignOut}
                disabled={isProcessing}
                className="text-sm font-semibold uppercase text-slate-800 hover:text-[#2563eb] transition-colors"
              >
                Log out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-semibold uppercase text-slate-800 hover:text-[#2563eb] transition-colors hidden sm:inline"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-semibold uppercase text-slate-800 border border-slate-800 rounded-full px-5 py-2 hover:bg-slate-50 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
            <div
              className="hidden sm:flex items-center gap-1.5 border border-slate-200 rounded-md px-2 py-1.5 text-xs font-medium text-slate-700 bg-white shadow-sm"
              title="Region"
            >
              <span className="text-base leading-none" aria-hidden>
                🇺🇸
              </span>
              <span>US</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
