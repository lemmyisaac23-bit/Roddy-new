import { REVIEWS } from "./marketingContent";

export function ReviewsSection() {
  const featured = REVIEWS[0];
  return (
    <section className="bg-[#f5f7fa] py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 md:p-12">
          <h2 className="font-serif text-2xl md:text-3xl text-center text-slate-900 mb-10">
            Reviews Grillhashpowermine
          </h2>
          <div className="relative px-4 md:px-12">
            <span
              className="absolute left-0 top-0 text-[#7eb8e8] text-7xl md:text-8xl font-serif leading-none select-none"
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote className="text-center font-serif italic text-slate-600 text-lg md:text-xl leading-relaxed pt-6">
              {featured.quote}
            </blockquote>
            <p className="text-center mt-8 font-semibold text-slate-800">{featured.author}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {REVIEWS.slice(1).map((r) => (
            <div
              key={r.author}
              className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm"
            >
              <p className="font-serif italic text-slate-600 text-sm leading-relaxed mb-4">
                &ldquo;{r.quote}&rdquo;
              </p>
              <p className="font-semibold text-slate-800 text-sm">— {r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
