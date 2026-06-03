import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type MarketingNavButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
};

/** Touch-friendly in-app navigation (avoids flaky Button+Link on mobile) */
export function MarketingNavButton({
  to,
  children,
  className,
  variant = "primary",
}: MarketingNavButtonProps) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(to.startsWith("/") ? to : `/${to}`);
  }, [navigate, to]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline-flex w-full md:w-auto min-h-[48px] items-center justify-center rounded-full px-10 py-4 text-sm md:text-base font-bold uppercase tracking-wider touch-manipulation select-none active:scale-[0.98] transition-transform",
        variant === "primary"
          ? "text-white border-0 hover:opacity-90"
          : "border border-slate-300 text-slate-700 bg-white hover:bg-slate-50",
        className
      )}
      style={
        variant === "primary"
          ? {
              background: "linear-gradient(90deg, #1a3a6e 0%, #3b6db5 100%)",
              boxShadow: "0 4px 14px rgba(26, 58, 110, 0.35)",
            }
          : undefined
      }
    >
      {children}
    </button>
  );
}
