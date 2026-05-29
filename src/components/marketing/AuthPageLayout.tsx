import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { theme } from "@/constants/theme";

type AuthPageLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  wide?: boolean;
};

export function AuthPageLayout({ title, subtitle, children, wide }: AuthPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <div style={{ background: theme.gradient }} className="py-10 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-white text-center">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-center text-white/90 text-sm max-w-lg mx-auto px-4">{subtitle}</p>
          )}
        </div>
        <div className={`container mx-auto px-4 py-10 md:py-14 ${wide ? "max-w-2xl" : "max-w-md"}`}>
          <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-6 sm:p-8">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
