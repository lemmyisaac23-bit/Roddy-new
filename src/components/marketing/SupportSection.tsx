import { Link } from "react-router-dom";
import { Users } from "lucide-react";

export function SupportSection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #e8f4fc 0%, #f0f9ff 50%, #e0f2fe 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-2">Always by your side</h2>
          <p className="text-xl text-slate-700 mb-8">To make your life easier</p>
          <Link
            to="mailto:support@grillhashpowermine.com"
            className="inline-flex items-center gap-3 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold uppercase tracking-wide px-6 py-3 text-sm transition-colors"
          >
            <Users className="w-5 h-5" />
            Ask Our Professionals
          </Link>
        </div>
      </div>
    </section>
  );
}
