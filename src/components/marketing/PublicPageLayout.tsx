import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type PublicPageLayoutProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export function PublicPageLayout({ children, title, subtitle }: PublicPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="pt-[72px]">
        {(title || subtitle) && (
          <div
            className="py-10 md:py-12 text-center text-white"
            style={{
              background: "linear-gradient(90deg, #1a3a6e 0%, #2a5a9e 50%, #1a3a6e 100%)",
            }}
          >
            {title && (
              <h1 className="font-serif text-3xl md:text-4xl tracking-wide">{title}</h1>
            )}
            {subtitle && (
              <p className="mt-3 text-white/90 max-w-2xl mx-auto px-4 font-serif">{subtitle}</p>
            )}
          </div>
        )}
        <div className="container mx-auto px-4 py-12 max-w-4xl font-serif leading-relaxed">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
