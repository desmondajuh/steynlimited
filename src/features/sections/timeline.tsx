import { motion } from "motion/react";
import { TimelineStep } from "@/types/landing";

interface TimelineProps {
  id?: string;
}

export default function Timeline({ id }: TimelineProps) {
  const steps: TimelineStep[] = [
    {
      step: "01",
      title: "Institutional Inquiry",
      description:
        "Prospective sovereigns, central banks, and qualified bullion dealers initiate secure communications through encrypted channels or verified representatives.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Compliance & Verification",
      description:
        "Rigorous vetting in strict accordance with international LBMA (London Bullion Market Association), KYC, and AML regulatory frame-works.",
      duration: "Day 2-3",
    },
    {
      step: "03",
      title: "Ethical Sourcing & Allocation",
      description:
        "Physical bullion is securely allocated from our accredited mining partners or vaulting facilities, tracing full chain of custody.",
      duration: "Day 4-5",
    },
    {
      step: "04",
      title: "Assay & Quality Inspection",
      description:
        "Independent, third-party laboratory verification of gold purity (typically 99.99% or 999.9 fine gold) and weight certification.",
      duration: "Day 6",
    },
    {
      step: "05",
      title: "Sovereign Documentation",
      description:
        "Compilation of export permits, customs clearance papers, certificate of origin, safe logistics passes, and commercial invoices.",
      duration: "Day 7",
    },
    {
      step: "06",
      title: "Secure Armed Transit & Shipping",
      description:
        "Insured transport via world-class security carriers (Brink's, Malca-Amit) utilizing dedicated armored aviation and marine cargo.",
      duration: "Day 8-10",
    },
    {
      step: "07",
      title: "Vault Delivery & Handover",
      description:
        "Final secure handover at the buyer's specified bonded warehouse or sovereign depository, with full delivery verification.",
      duration: "Completion",
    },
  ];

  return (
    <div id={id} className="relative max-w-5xl mx-auto px-4">
      {/* Central continuous thin gold timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-gold-primary/40 via-gold-dark/20 to-transparent pointer-events-none" />

      <div className="space-y-12 md:space-y-20">
        {steps.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot / indicator with a metallic golden glow */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-brand-primary border-2 border-gold-primary flex items-center justify-center shadow-lg shadow-gold-dark/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-bright" />
                </div>
              </div>

              {/* Text content card */}
              <div
                className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}
              >
                <div className="relative group p-6 md:p-8 bg-brand-card border border-border-gold rounded-xs transition-all duration-300 hover:border-gold-primary/30">
                  {/* Step index number */}
                  <div
                    className={`font-mono text-xs text-gold-primary tracking-widest font-semibold mb-2 flex items-center gap-2 ${
                      isEven ? "md:justify-end" : "justify-start"
                    }`}
                  >
                    <span>PHASE {item.step}</span>
                    <span className="text-text-muted">|</span>
                    <span className="text-text-secondary">{item.duration}</span>
                  </div>

                  {/* Title */}
                  <h4 className="font-serif text-xl sm:text-2xl font-light text-white mb-3 group-hover:text-gold-bright transition-colors duration-300">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Empty spacer block for desktop symmetry */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
