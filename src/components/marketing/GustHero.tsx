import { Link } from "react-router-dom";
import { BRAND } from "./marketingContent";

export function GustHero() {
  return (
    <section
      className="relative min-h-[520px] flex items-center justify-center overflow-hidden pt-[72px]"
      style={{
        background: "linear-gradient(180deg, #00b4e6 0%, #0099cc 45%, #007eb3 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[280px] md:text-[380px] font-black text-white/10 leading-none">₿</span>
      </div>

      <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
          {BRAND}
        </h1>
        <p className="text-white text-sm md:text-base font-semibold uppercase tracking-wide mb-2">
          Get bonus for new user signups right now, join us today!!!
        </p>
        <p className="text-white/90 text-lg md:text-xl mb-10">Beginning of the mining journey</p>
        <Link
          to="/signup"
          className="inline-block bg-white text-slate-900 font-bold uppercase tracking-wider px-10 py-3 text-sm hover:bg-slate-100 transition-colors shadow-lg"
        >
          Mining Now
        </Link>
      </div>
    </section>
  );
}
