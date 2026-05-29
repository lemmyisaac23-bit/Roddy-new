import { BRAND_DISPLAY } from "./marketingContent";

type SiteLogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

/** Green HC-style mark adapted for Grillhashpowermine */
export function SiteLogo({ className = "", variant = "light" }: SiteLogoProps) {
  const textClass = variant === "dark" ? "text-white" : "text-slate-900";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 shrink-0">
        <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
          <circle cx="24" cy="24" r="22" fill="#22c55e" />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            GH
          </text>
        </svg>
      </div>
      <span className="text-left leading-tight">
        <span className={`block text-sm font-bold tracking-tight ${textClass}`}>{BRAND_DISPLAY}</span>
      </span>
    </div>
  );
}
