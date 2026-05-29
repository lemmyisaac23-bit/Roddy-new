import { ChevronRight } from "lucide-react";
import { PLAN_FEATURES } from "./marketingContent";

export function AllPlansSection() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">All Plans Include</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {PLAN_FEATURES.map((column, colIdx) => (
            <ul key={colIdx} className="space-y-3">
              {column.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-slate-700 text-sm md:text-base">
                  <ChevronRight className="w-5 h-5 text-[#00b4e6] shrink-0 mt-0.5" strokeWidth={3} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
