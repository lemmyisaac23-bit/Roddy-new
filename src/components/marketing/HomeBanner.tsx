import { BRAND } from "./marketingContent";

export function HomeBanner() {
  return (
    <section
      className="w-full py-4 text-center text-white text-sm md:text-base font-semibold tracking-[0.2em] uppercase"
      style={{
        background: "linear-gradient(90deg, #1a3a6e 0%, #2a5a9e 50%, #1a3a6e 100%)",
      }}
    >
      {BRAND} / Bitcoin
    </section>
  );
}
