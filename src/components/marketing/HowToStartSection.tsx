import { Database, ShieldCheck, Wallet } from "lucide-react";
import { HOW_TO_STEPS } from "./marketingContent";

const icons = [Database, ShieldCheck, Wallet];

export function HowToStartSection() {
  return (
    <section className="bg-white py-14 md:py-20 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-slate-900 mb-14">
          How to Start Mining?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {HOW_TO_STEPS.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center text-[#2563eb]">
                  <Icon className="w-16 h-16 stroke-[1.25]" strokeWidth={1.25} />
                </div>
                <h3 className="text-lg font-semibold text-[#4a6fa5] mb-4">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
