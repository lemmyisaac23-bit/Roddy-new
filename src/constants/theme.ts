/** Grillhashpowermine site-wide palette (Hash-Crypto light theme) */
export const theme = {
  primary: "#2563eb",
  primaryDark: "#1a3a6e",
  primaryLight: "#3b6db5",
  accent: "#22c55e",
  navy: "#051d3b",
  navyCard: "#0c2d52",
  pageBg: "#ffffff",
  pageMuted: "#f8fafc",
  cardBorder: "#e2e8f0",
  gradient: "linear-gradient(90deg, #1a3a6e 0%, #2a5a9e 50%, #1a3a6e 100%)",
  btnGradient: "linear-gradient(90deg, #1a3a6e 0%, #3b6db5 100%)",
} as const;

export const themeClasses = {
  page: "min-h-screen bg-slate-50 text-slate-800",
  card: "bg-white border border-slate-200 rounded-xl shadow-sm",
  input: "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400",
  btnPrimary:
    "bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold transition-colors",
  link: "text-[#2563eb] hover:text-[#1d4ed8] font-medium",
  sidebar: "bg-[#051d3b] text-white border-r border-white/10",
  banner: "py-10 text-center text-white font-serif",
} as const;
