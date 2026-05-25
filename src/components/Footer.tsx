import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#040a0f] border-t border-teal-500/10 relative overflow-hidden">
      {/* Background circuit dots */}
      <div className="absolute inset-0 circuit-bg opacity-40 pointer-events-none" />

      {/* Subtle glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5" style={{ background: "radial-gradient(circle, #00e5ff, transparent)" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-5" style={{ background: "radial-gradient(circle, #00c853, transparent)" }} />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="relative flex items-center justify-center w-9 h-9 rounded-xl"
                style={{ background: "linear-gradient(135deg, #00e5ff 0%, #00c853 100%)" }}
              >
                <Cpu className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-black tracking-tight">
                <span className="text-white">Grill</span>
                <span className="text-gradient-teal">hashpowermine</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Grillhashpowermine is one of the leading cryptocurrency cloud mining platforms, offering mining capacities for every level — from newcomers to professionals. Our mission is to make earning crypto easy and accessible worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="text-white font-semibold text-lg relative pb-2">
              Quick Links
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full" />
            </h5>
            <ul className="space-y-2">
              <li>
                <Link to="/team" className="text-white/60 hover:text-teal-400 transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-white/60 hover:text-teal-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h5 className="text-white font-semibold text-lg relative pb-2">
              Useful Links
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full" />
            </h5>
            <ul className="space-y-2">
              <li>
                <Link to="/usage-policy" className="text-white/60 hover:text-teal-400 transition-colors text-sm">
                  Usage Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-white/60 hover:text-teal-400 transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/60 hover:text-teal-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/60 hover:text-teal-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h5 className="text-white font-semibold text-lg relative pb-2">
              Contact Info
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full" />
            </h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-teal-400 shrink-0" />
                <a href="mailto:support@grillhashpowermine.com" className="text-white/60 hover:text-teal-400 transition-colors text-sm">
                  support@grillhashpowermine.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  57 Kingfisher Grove, Willenhall, England, WV12 5HG (Company No. 15415402)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-teal-500/10 pt-8">
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center border border-teal-500/20"
              style={{ background: "rgba(0,229,255,0.06)" }}
            >
              <Cpu className="w-5 h-5 text-teal-400" />
            </div>
            <p className="text-white/40 text-sm text-center">
              Copyright © 2020–2026 Grillhashpowermine. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
