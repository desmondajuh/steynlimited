import { motion } from "motion/react";
import { ShieldCheck, Truck, Globe2, Award } from "lucide-react";
import SectionTitle from "@/components/shared/section-title";

interface AboutProps {
  id?: string;
  onExploreServices: () => void;
}

export default function About({ id, onExploreServices }: AboutProps) {
  const values = [
    {
      icon: <Award className="w-5 h-5 text-gold-primary" />,
      title: "Ethical Provenance Assurance",
      description:
        "We adhere to the highest LBMA and OECD standards. Every shipment is conflict-free, fully auditable, and trace-certified back to licensed environmental mines.",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-gold-primary" />,
      title: "International Sovereign Alliances",
      description:
        "Headquartered in London with strategic vault partnerships in Zurich, Dubai, and Singapore, we facilitate trade across five continents with local regulatory compliance.",
    },
    {
      icon: <Truck className="w-5 h-5 text-gold-primary" />,
      title: "Armored Vault-to-Vault Logistics",
      description:
        "All transits are secured via world-class operators (Brink's, Malca-Amit) featuring GPS tracking, armored convoys, and 100% comprehensive Lloyds insurance.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold-primary" />,
      title: "Bespoke Private Reserve Management",
      description:
        "Providing tailored custodial arrangements, physical swaps, and sovereign bar allocations for central banks, sovereign wealth, and family trusts.",
    },
  ];

  return (
    <section id={id} className="relative py-24 sm:py-32 bg-brand-secondary/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          subtitle="ABOUT STEYN LIMITED"
          title="The Standard of Sovereign Trust"
          description="A premier international counterparty facilitating secure precious metals procurement and global commodity trade for central banks, sovereign funds, and institutional portfolios."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Premium Editorial Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Background offset decorative frame */}
            <div className="absolute top-4 left-4 w-full h-full border border-gold-primary/30 z-0 rounded-xs" />

            {/* Main Luxury Image */}
            <div className="relative z-10 overflow-hidden bg-neutral-950 border border-border-gold rounded-xs shadow-2xl shadow-black">
              <motion.img
                src="https://images.unsplash.com/photo-1599740831464-5eec934f0f03?auto=format&fit=crop&q=80&w=1200"
                alt="Refined Gold Assay pouring"
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
                className="w-full h-[450px] object-cover opacity-90 filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Inner vignette glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* Small hovering overlay seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-6 -right-6 z-20 bg-brand-primary border border-gold-primary p-4 rounded-xs shadow-xl hidden sm:block max-w-[200px]"
            >
              <div className="font-mono text-[9px] text-gold-bright tracking-widest uppercase font-bold text-center">
                LBMA ACCREDITED PARTNER
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Ethos & Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">
                Sustaining Wealth Across Generations with Absolute Security
              </h3>
              <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed font-light">
                Steyn Limited operates at the intersection of traditional
                mining, international logistics, and global macro-commodities
                trade. Our legacy is built on the rigorous application of safety
                protocols, transparency, and reliable execution of high-value,
                physical precious metal allocations.
              </p>
            </div>

            {/* Grid of core values with clean, elegant styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {values.map((item, index) => (
                <div key={index} className="group space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-border-gold flex items-center justify-center bg-brand-card group-hover:border-gold-primary transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-sans text-sm uppercase tracking-wider font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-text-muted leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom corporate quote block */}
            <div className="border-l-2 border-gold-primary pl-6 py-2">
              <blockquote className="font-serif text-lg italic text-text-secondary font-light">
                &ldquo;Compliance is not merely a legal requirement at Steyn; it
                is the cornerstone of our corporate sovereign standing.&rdquo;
              </blockquote>
              <cite className="block font-sans text-[10px] uppercase tracking-widest text-gold-primary mt-2 font-bold not-italic">
                — Arthur Steyn, Chairman of the Board
              </cite>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold text-white hover:text-gold-bright transition-colors duration-300 cursor-pointer"
              >
                <span>Audit Our Service Spectrum</span>
                <span className="text-gold-primary">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
