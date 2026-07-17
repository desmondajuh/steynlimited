import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Lock } from "lucide-react";

interface FooterProps {
  id?: string;
}

export default function Footer({ id }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate high-security whitelist logging
    setTimeout(() => {
      setSubscribed(true);
    }, 1000);
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id={id}
      className="relative bg-brand-primary border-t border-border-gold/30 pt-24 pb-12 z-10 overflow-hidden"
    >
      {/* Background shadow glow */}
      <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-radial from-[rgba(212,175,55,0.02)] to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-border-gold/20">
          {/* Column 1: Company Profile Logo */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-center gap-3.5 group select-none"
            >
              <div className="relative w-8 h-8 border-2 border-gold-primary rotate-45 flex items-center justify-center bg-brand-secondary group-hover:border-white transition-all duration-300">
                <span className="text-gold-bright font-serif font-bold -rotate-45 text-sm group-hover:text-white transition-colors">
                  S
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.25em] font-light text-white leading-none">
                  STEYN
                </span>
                <span className="font-sans text-[8px] tracking-[0.4em] text-gold-primary uppercase font-bold mt-1 leading-none">
                  LIMITED
                </span>
              </div>
            </a>

            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
              Steyn Limited is an international commodity partner specializing
              in sovereign bullion logistics, responsible mining procurement,
              and gold assay compliance. Facilitating flawless trade corridors.
            </p>

            <div className="flex items-center gap-1.5 font-mono text-[9px] text-text-muted select-none">
              <Lock className="w-3 h-3 text-gold-primary" />
              <span>STEYN SWISS SERVERS // CONFIDENTIALITY GUARANTEED</span>
            </div>
          </div>

          {/* Column 2: Services List */}
          <div className="sm:col-span-2 col-span-1 space-y-5">
            <h5 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Core Protocols
            </h5>
            <ul className="space-y-3 font-sans text-xs text-text-secondary font-light">
              <li>
                <a
                  href="#services"
                  className="hover:text-gold-bright transition-colors"
                >
                  Gold Export
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gold-bright transition-colors"
                >
                  Asset Procurement
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gold-bright transition-colors"
                >
                  Commodity Sourcing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gold-bright transition-colors"
                >
                  Sovereign Logistics
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gold-bright transition-colors"
                >
                  Mining Alliances
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gold-bright transition-colors"
                >
                  Assay Audits
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate/Company */}
          <div className="sm:col-span-2 col-span-1 space-y-5">
            <h5 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Institutional
            </h5>
            <ul className="space-y-3 font-sans text-xs text-text-secondary font-light">
              <li>
                <a
                  href="#about"
                  className="hover:text-gold-bright transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#global-presence"
                  className="hover:text-gold-bright transition-colors"
                >
                  Global Footprint
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="hover:text-gold-bright transition-colors"
                >
                  Ethos & Trust
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-gold-bright transition-colors"
                >
                  Counterparty Consensus
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gold-bright transition-colors"
                >
                  Liaison Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Sovereign Regulatory */}
          <div className="sm:col-span-2 col-span-1 space-y-5">
            <h5 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Regulatory
            </h5>
            <ul className="space-y-3 font-sans text-xs text-text-secondary font-light">
              <li>
                <span className="hover:text-gold-bright transition-colors cursor-pointer">
                  LBMA Compliance
                </span>
              </li>
              <li>
                <span className="hover:text-gold-bright transition-colors cursor-pointer">
                  OECD Due Diligence
                </span>
              </li>
              <li>
                <span className="hover:text-gold-bright transition-colors cursor-pointer">
                  Swiss FinSA Code
                </span>
              </li>
              <li>
                <span className="hover:text-gold-bright transition-colors cursor-pointer">
                  Anti-Money Laundering
                </span>
              </li>
              <li>
                <span className="hover:text-gold-bright transition-colors cursor-pointer">
                  Terms of Engagement
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter Sign up */}
          <div className="lg:col-span-2 space-y-5">
            <h5 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Sovereign Ledger
            </h5>
            <p className="font-sans text-[11px] text-text-muted leading-relaxed font-light">
              Subscribe to the Steyn Private Intelligence Briefing for
              macro-commodities, central bank reserves, and assay data.
            </p>

            {!subscribed ? (
              <form
                onSubmit={handleSubscribe}
                className="relative flex border-b border-border-gold/40 focus-within:border-gold-primary transition-colors py-1"
              >
                <input
                  type="email"
                  required
                  placeholder="corporate@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-xs text-white placeholder-text-muted w-full outline-none font-sans font-light py-2"
                />
                <button
                  type="submit"
                  className="text-gold-primary hover:text-white transition-colors px-1 cursor-pointer"
                  aria-label="Submit Newsletter Subscription"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-gold-bright font-semibold font-sans text-[10px] uppercase tracking-wider bg-gold-primary/5 border border-gold-primary/35 p-3 rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-gold-primary" />
                <span>On Verification List</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-text-muted uppercase tracking-widest font-semibold">
          <div>
            &copy; {currentYear} STEYN LIMITED. All Sovereign Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>SECURE SYSTEM // ISO-27001</span>
            <span className="text-gold-primary">|</span>
            <span>CH-944.4.24.4 ZURICH REGISTRY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
