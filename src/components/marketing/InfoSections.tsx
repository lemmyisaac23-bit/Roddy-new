import {
  BITCOIN_VPS_PARAGRAPH,
  WHAT_IS_CLOUD_MINING,
  WHY_CHOOSE,
  BRAND_DISPLAY,
} from "./marketingContent";

export function WhatIsCloudMiningSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-slate-900 mb-10">
          What Is Bitcoin Cloud Mining?
        </h2>
        <p className="font-serif text-slate-700 text-base md:text-lg leading-relaxed text-left mb-8">
          {WHAT_IS_CLOUD_MINING}
        </p>
        <p className="font-serif text-slate-700 text-base md:text-lg leading-relaxed text-left">
          {BITCOIN_VPS_PARAGRAPH}
        </p>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="bg-white py-14 md:py-20 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-slate-900 mb-10">
          Why You Should Choose {BRAND_DISPLAY}?
        </h2>
        <p className="font-serif text-slate-700 text-base md:text-lg leading-relaxed text-left">
          {WHY_CHOOSE}
        </p>
      </div>
    </section>
  );
}
