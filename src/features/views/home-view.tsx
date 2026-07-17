"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import FAQ from "@/features/sections/faq";
import Hero from "@/features/sections/hero";
import About from "@/features/sections/about";
import Footer from "@/features/sections/footer";
import Timeline from "@/features/sections/timeline";
import Services from "@/features/sections/services";
import Testimonials from "@/features/sections/tetsimonials";
import ContactForm from "@/features/sections/contact-form";
import WhyChooseUs from "@/features/sections/why-choose-us";
import GlobalPresence from "@/features/sections/global-presence";

import Navbar from "@/components/shared/navbar";
import SectionTitle from "@/components/shared/section-title";
import AnimatedBackground from "@/components/shared/animated-background";

export const HomeView = () => {
  const [inquiryService, setInquiryService] = useState<string | null>(null);

  // Smooth scroll helper to navigate directly to sections
  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const navOffset = 90; // Navigation bar gap
      const targetPos =
        target.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  };

  // When user clicks "Initiate Protocol" on a ServiceCard
  const handleInquireService = (serviceName: string) => {
    setInquiryService(serviceName);
    scrollToSection("#contact");
  };

  return (
    <div className="relative min-h-screen w-full bg-brand-primary text-white selection:bg-gold-primary/30 selection:text-white">
      {/* Luxury Animated Canvas & Grid Background */}
      <AnimatedBackground />

      {/* Transparent Sticky Navigation */}
      <Navbar onContactClick={() => scrollToSection("#contact")} />

      {/* Main Sections Stack */}
      <main className="relative z-10">
        {/* Full Viewport Cinematic Hero Section */}
        <section id="home" className="w-full">
          <Hero
            onExploreClick={() => scrollToSection("#services")}
            onContactClick={() => scrollToSection("#contact")}
          />
        </section>

        {/* Corporate Ethos & About Section */}
        <section id="about" className="relative">
          <About onExploreServices={() => scrollToSection("#services")} />
        </section>

        {/* Dynamic Services Grid Section */}
        <section id="services" className="relative">
          <Services onInquire={handleInquireService} />
        </section>

        {/* Global Presence, connection arcs & Stats Section */}
        <section id="global-presence" className="relative">
          <GlobalPresence />
        </section>

        {/* Six Core Pillars of Trust (Why Choose Us) */}
        <section id="why-choose-us" className="relative">
          <WhyChooseUs />
        </section>

        {/* Physical Bullion Flow Workflow Timeline */}
        <section
          id="timeline"
          className="relative py-24 sm:py-32 bg-brand-secondary/40"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionTitle
              subtitle="OPERATIONAL ARCHITECTURE"
              title="Secure bullion custody protocol"
              description="A rigorous, highly regulated end-to-end framework governing international precious metals transaction settlements, assays, and deliveries."
            />
            <Timeline />
          </div>
        </section>

        {/* Sovereign Consensus & Client Testimonials */}
        <section id="testimonials" className="relative">
          <Testimonials />
        </section>

        {/* Frequently Answered Inquiries */}
        <section
          id="faq"
          className="relative py-24 sm:py-32 bg-brand-nd-secondary/40"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionTitle
              subtitle="REGULATORY COMPLIANCE FAQ"
              title="Sovereign Diligence Standards"
              description="Review transparency procedures, minimum delivery volumes, assay processes, and physical transport insurance policies."
            />
            <FAQ />
          </div>
        </section>

        {/* Contact Liaison Coordinator & Encrypted Form */}
        <section
          id="contact"
          className="relative py-24 sm:py-32 bg-brand-primary border-t border-border-gold/30"
        >
          {/* Subtle world map watermarked background */}
          <div className="absolute inset-0 bg-radial from-transparent to-bg-primary pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <SectionTitle
              subtitle="LIAISON COORDINATE"
              title="Initiate Secure Communications"
              description="Establish contact with Steyn Limited regulatory officers. Fully audited and secured ECC encrypted routing ensures peak confidentiality."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
              {/* Left Column: Corporate Coordinates */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-5 space-y-10"
              >
                <div className="space-y-4">
                  <h3 className="font-serif text-3xl font-light text-white tracking-wide">
                    Global Offices & Depository Coordinates
                  </h3>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed font-light">
                    For high-value sovereign bullion settlements, please request
                    a secure PGP key. We welcome sovereign representatives and
                    legal councils at our primary offices by appointment only.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address 1: Switzerland */}
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 w-8 h-8 rounded-full border border-border-gold flex items-center justify-center bg-brand-card">
                      <MapPin className="w-4 h-4 text-gold-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-sans text-xs uppercase tracking-widest font-semibold text-white">
                        Primary Swiss Depository
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                        Bahnhofstrasse 45, 8001 Zürich, Switzerland <br />
                        <span className="text-[11px] text-text-muted">
                          CH-Vault Code: CH-ZH-8001
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Address 2: London */}
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 w-8 h-8 rounded-full border border-border-gold flex items-center justify-center bg-brand-card">
                      <MapPin className="w-4 h-4 text-gold-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-sans text-xs uppercase tracking-widest font-semibold text-white">
                        London Corporate Office
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                        12 Finch Lane, London EC3V 3NA, United Kingdom <br />
                        <span className="text-[11px] text-text-muted">
                          Direct Access to London Bullion Market
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Address 3: Dubai */}
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 w-8 h-8 rounded-full border border-border-gold flex items-center justify-center bg-brand-card">
                      <MapPin className="w-4 h-4 text-gold-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-sans text-xs uppercase tracking-widest font-semibold text-white">
                        Dubai Trade Refinery Hub
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                        Almas Tower, Jumeirah Lakes Towers, Dubai, UAE <br />
                        <span className="text-[11px] text-text-muted">
                          Gold Sourcing & Refinery Liaison
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="h-[1px] bg-border-gold/20" />

                  {/* Secure email */}
                  <div className="flex gap-4 items-center">
                    <div className="w-8 h-8 rounded-full border border-border-gold flex items-center justify-center bg-brand-nd-card">
                      <Mail className="w-4 h-4 text-gold-primary" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-sans text-[10px] uppercase tracking-widest font-bold text-text-muted">
                        CONFIDENTIAL SECURE INBOX
                      </div>
                      <a
                        href="mailto:liaison@steynlimited.com"
                        className="font-serif text-base text-white hover:text-gold-bright transition-colors font-light"
                      >
                        liaison@steynlimited.com
                      </a>
                    </div>
                  </div>

                  {/* Secure phone */}
                  <div className="flex gap-4 items-center">
                    <div className="w-8 h-8 rounded-full border border-border-gold flex items-center justify-center bg-brand-card">
                      <Phone className="w-4 h-4 text-gold-primary" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-sans text-[10px] uppercase tracking-widest font-bold text-text-muted">
                        24/7 RESERVES LIAISON
                      </div>
                      <a
                        href="tel:+410442341111"
                        className="font-serif text-base text-white hover:text-gold-bright transition-colors font-light"
                      >
                        +41 (0) 44 234 11 11
                      </a>
                    </div>
                  </div>
                </div>

                {/* Swiss security seal card */}
                <div className="bg-brand-card border border-border-gold p-6 rounded-xs flex items-start gap-4">
                  <ShieldCheck className="w-10 h-10 text-gold-primary flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="font-sans text-xs uppercase tracking-wider font-semibold text-white">
                      Swiss Data Security Custody
                    </div>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed font-light">
                      Steyn Limited operates high-security backup server
                      infrastructure situated in Swiss alpine bunker vaults. All
                      digital communications are encrypted end-to-end.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Encrypted Contact Form with pre-populated service states */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7"
              >
                <ContactForm prefilledService={inquiryService} />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Majestic dark multi-column Footer */}
      <Footer />
    </div>
  );
};
