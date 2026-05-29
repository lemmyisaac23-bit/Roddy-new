import { Link } from "react-router-dom";
import { CLOUD_MINING_FEATURES } from "./marketingContent";

function BitcoinCoin() {
  return (
    <div className="relative flex justify-center items-end">
      <div className="w-48 h-8 md:w-64 md:h-10 rounded-full bg-[#b8d4e8] opacity-60 blur-sm absolute bottom-0" />
      <div
        className="relative w-40 h-40 md:w-52 md:h-52 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: "linear-gradient(145deg, #f9a825 0%, #f57f17 100%)",
          boxShadow: "0 12px 40px rgba(245, 127, 23, 0.35)",
        }}
      >
        <span className="text-white text-6xl md:text-7xl font-bold" style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.2)" }}>
          ₿
        </span>
      </div>
    </div>
  );
}

export function CloudMiningSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-slate-900 mb-8">Cloud Mining</h1>
            <ul className="space-y-4 mb-10">
              {CLOUD_MINING_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1.5 w-3 h-3 rounded-full bg-[#2563eb] shrink-0" />
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/signup"
              className="inline-block w-full md:w-auto text-center text-white font-bold uppercase tracking-wider px-10 py-4 rounded-full text-sm md:text-base transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #1a3a6e 0%, #3b6db5 100%)",
                boxShadow: "0 4px 14px rgba(26, 58, 110, 0.35)",
              }}
            >
              Start Mining Now
            </Link>
          </div>
          <BitcoinCoin />
        </div>
      </div>
    </section>
  );
}
