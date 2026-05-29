import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-[72px] px-4">
        <div className="text-center">
          <h1 className="font-serif text-6xl text-slate-900 mb-4">404</h1>
          <p className="mb-6 text-xl text-slate-600">Oops! Page not found</p>
          <Link
            to="/"
            className="inline-block rounded-full px-8 py-3 text-white font-semibold hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #1a3a6e 0%, #3b6db5 100%)" }}
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
