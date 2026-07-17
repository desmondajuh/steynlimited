import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Menu, X, ArrowRight, Lock } from "lucide-react";
import Button from "@/components/shared/button";
import Image from "next/image";

interface NavbarProps {
  id?: string;
  onContactClick: () => void;
}

export default function Navbar({ id, onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Global Reach", href: "#global-presence" },
    { label: "Why Steyn", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      setIsMobileMenuOpen(false);
      const navHeight = 90; // Approx height of scrolled header
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id={id}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 ${
        isScrolled
          ? "bg-brand-primary/80 backdrop-blur-xl border-b border-border-gold/30 py-4 shadow-2xl shadow-black/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Crest of Steyn Limited */}
        <a
          href="#home"
          onClick={(e) => handleScrollToSection(e, "#home")}
          className="flex items-center gap-3.5 group select-none"
        >
          <div className="relative w-12 h-12  flex items-center justify-center transition-all duration-500">
            {/* <span className="text-gold-bright font-serif font-bold -rotate-45 text-sm group-hover:text-white transition-colors">
              S
            </span> */}
            <Image
              src="/assets/logo.png"
              alt="Steyn Limited Logo"
              width={200}
              height={200}
            />
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

        {/* Desktop Menu - Highly spaced and minimal */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="relative font-sans text-[11px] uppercase tracking-[0.2em] font-medium text-text-secondary hover:text-white transition-colors duration-300 py-2 group cursor-pointer"
            >
              <span>{item.label}</span>
              {/* Ultra fine underline hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right Side Corporate CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-text-muted select-none">
            <Lock className="w-3 h-3 text-gold-primary" />
            <span>SECURE ACCESS</span>
          </div>
          <Button
            variant="secondary"
            onClick={onContactClick}
            className="py-2.5 px-6 text-[10px] tracking-[0.15em]"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-secondary hover:text-white transition-colors p-1"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with a deep dark luxurious backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-brand-secondary/95 backdrop-blur-2xl border-b border-border-gold/30 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col">
              <nav className="flex flex-col gap-5">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-text-secondary hover:text-gold-bright transition-colors py-1.5"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="h-[1px] bg-border-gold/20" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-text-muted">
                  <Lock className="w-3 h-3 text-gold-primary" />
                  <span>SECURE ECC NODE ACTIVE</span>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full text-center py-4"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
