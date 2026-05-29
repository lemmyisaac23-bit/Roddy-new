import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FOOTER_CONTACT } from "@/components/marketing/marketingContent";
import { SiteLogo } from "@/components/marketing/SiteLogo";

export const Footer = () => {
  return (
    <footer className="bg-[#051d3b] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <SiteLogo variant="dark" />
            </div>
          </div>

          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-4">Popular Links</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/signup" className="hover:text-[#7eb8e8] transition-colors uppercase">
                  Start Mining Now
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="hover:text-[#7eb8e8] transition-colors uppercase"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#7eb8e8] transition-colors uppercase">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-4">Contacts</h5>
            <p className="font-semibold text-white mb-2">{FOOTER_CONTACT.company}</p>
            <p className="text-sm text-white/75 leading-relaxed mb-4">{FOOTER_CONTACT.address}</p>
            <p className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-[#7eb8e8] shrink-0" />
              <span className="text-white/75">Email: </span>
              <a
                href={`mailto:${FOOTER_CONTACT.email}`}
                className="text-[#7eb8e8] hover:underline break-all"
              >
                {FOOTER_CONTACT.email}
              </a>
            </p>
          </div>
        </div>

        <div
          className="border-t border-white/10 pt-6 text-center text-sm text-white/70"
          style={{ background: "rgba(0,0,0,0.15)" }}
        >
          <p>
            © 2019 – {new Date().getFullYear()} {FOOTER_CONTACT.company} ·{" "}
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            {" · "}
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            {" · "}
            <Link to="/usage-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
