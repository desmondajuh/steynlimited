/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Lock } from "lucide-react";
// import { Button } from "../ui/button";
import Button from "@/components/shared/button";

interface HeroProps {
  id?: string;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({
  id,
  onExploreClick,
  onContactClick,
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "/assets/photo-1.jpg",
      caption: "Gold Bullion Storage",
    },
    {
      url: "/assets/photo-2.jpg",
      caption: "International Marine Logistics",
    },
    {
      url: "/assets/photo-1.jpg",
      caption: "Refining & Assay verification",
    },
    {
      url: "/assets/photo-2.jpg",
      caption: "Global Financial Trading Corridor",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per luxury slide
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id={id}
      className="relative w-full h-screen min-h-162.5 flex items-center justify-start overflow-hidden z-10"
    >
      {/* Background slideshow container */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].url}
              alt={slides[currentSlide].caption}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter grayscale contrast-110"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic ambient dark overlays */}
        {/* Deep background mesh overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-bg-primary/90 to-bg-primary" />
        <div className="absolute inset-0 bg-linear-to-r from-bg-primary via-bg-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-transparent to-transparent" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-25 flex flex-col justify-between h-[85%]">
        {/* Subtle upper metadata tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-gold-primary/5 border border-border-gold rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-pulse" />
            <span className="font-mono text-[9px] text-gold-bright tracking-widest uppercase font-bold">
              ESTABLISHED INTERNATIONAL TRADING HOUSE
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[9px] text-text-muted">
            <Lock className="w-3 h-3 text-gold-primary" />
            <span>SECURE ALLOCATION NODE</span>
          </div>
        </motion.div>

        {/* Hero main copywriting */}
        <div className="max-w-3xl space-y-6 sm:space-y-8 my-auto">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.1]"
          >
            Global Excellence in <br className="hidden md:inline" />
            <span className="italic text-gold-bright font-light">
              Gold Export
            </span>{" "}
            & Metals Trade
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
            className="font-sans text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-light max-w-2xl"
          >
            Steyn Limited is an accredited international trading house
            specializing in sovereign reserves procurement, LBMA Good Delivery
            logistics, and ethical mining sourcing. We bridge elite production
            networks with institutional vault depositories.
          </motion.p>

          {/* Premium Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Button
              variant="primary"
              onClick={onExploreClick}
              className="min-w-50"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-bg-primary" />
            </Button>

            <Button
              variant="secondary"
              onClick={onContactClick}
              className="min-w-45"
            >
              <span>Get in Touch</span>
            </Button>
          </motion.div>
        </div>

        {/* Bottom Hero status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.8 }}
          className="border-t border-border-gold/20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="space-y-1">
            <div className="font-mono text-[9px] text-text-muted tracking-wider uppercase font-semibold">
              Active Depository
            </div>
            <div className="font-serif text-sm text-white font-medium">
              Zurich, Switzerland
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-[9px] text-text-muted tracking-wider uppercase font-semibold">
              Compliance Status
            </div>
            <div className="font-serif text-sm text-gold-primary font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              LBMA Conflict-Free
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-[9px] text-text-muted tracking-wider uppercase font-semibold">
              Trade Registry
            </div>
            <div className="font-serif text-sm text-white font-medium">
              Geneva // CH-944.4.2
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-[9px] text-text-muted tracking-wider uppercase font-semibold">
              Secured Logistics
            </div>
            <div className="font-serif text-sm text-white font-medium">
              Brink’s & Malca-Amit
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
