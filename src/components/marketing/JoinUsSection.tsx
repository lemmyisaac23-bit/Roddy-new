import { Link } from "react-router-dom";
import { HelpCircle, Lock } from "lucide-react";
import { JOIN_FEATURES } from "./marketingContent";

export function JoinUsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Join us now &amp; Save!</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Grillhashpowermine is the world&apos;s leading cryptocurrency mining equipment distributor and complete
              mining solutions provider based out of the UK. Grillhashpowermine provides the full spectrum of hosted
              cryptocurrency mining services without any related complexities of managing mining hardware or software.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Grillhashpowermine provides turn-key macro-management in mining: software, firmware, mining pool, and
              mining farm management in The United Kingdom and other countries all over the world. The company&apos;s
              products and services range from ASIC miners, mobile industrial mining containers, and power
              transformers.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold uppercase tracking-wide px-8 py-3 text-sm transition-colors"
            >
              Order Now
            </Link>
          </div>

          <div className="space-y-10">
            {JOIN_FEATURES.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-full border-2 border-[#00b4e6] flex items-center justify-center text-[#00b4e6]">
                  {i === 0 ? <HelpCircle className="w-7 h-7" /> : <Lock className="w-7 h-7" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
