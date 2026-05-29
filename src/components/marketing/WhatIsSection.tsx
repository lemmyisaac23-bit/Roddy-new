import { BRAND } from "./marketingContent";

export function WhatIsSection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        backgroundColor: "#0f2744",
        backgroundImage: `
          linear-gradient(30deg, rgba(0,180,230,0.08) 12%, transparent 12.5%, transparent 87%, rgba(0,180,230,0.08) 87.5%),
          linear-gradient(150deg, rgba(0,180,230,0.08) 12%, transparent 12.5%, transparent 87%, rgba(0,180,230,0.08) 87.5%),
          linear-gradient(30deg, rgba(0,180,230,0.08) 12%, transparent 12.5%, transparent 87%, rgba(0,180,230,0.08) 87.5%),
          linear-gradient(150deg, rgba(0,180,230,0.08) 12%, transparent 12.5%, transparent 87%, rgba(0,180,230,0.08) 87.5%)
        `,
        backgroundSize: "80px 140px",
      }}
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-[#00d4ff] uppercase tracking-wide mb-8">
          What is {BRAND}?
        </h2>
        <p className="text-white/85 text-base md:text-lg leading-relaxed">
          Grillhashpowermine is a leading cloud cryptocurrency mining platform offering professional-grade mining
          infrastructure, hosted mining services, and complete solutions for newcomers and experienced miners. We
          manage software, firmware, mining pools, and farm operations so you can focus on growing your earnings —
          without buying or maintaining hardware yourself.
        </p>
      </div>
    </section>
  );
}
