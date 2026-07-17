import { motion } from "motion/react";
import SectionTitle from "@/components/shared/section-title";
import { TestimonialItem } from "@/types/landing";

interface TestimonialsProps {
  id?: string;
}

export default function Testimonials({ id }: TestimonialsProps) {
  const testimonials: TestimonialItem[] = [
    {
      id: "quote-1",
      quote:
        "Steyn Limited represents the gold standard in physical precious metals delivery. Their adherence to rigorous LBMA compliance protocols and Swiss-vault custody safeguards has made them our most trusted trading counterparty.",
      author: "Dr. Dieter Reinhardt",
      role: "Director of Asset Allocation",
      company: "Zurich Private Wealth Management",
      location: "Zurich, Switzerland",
    },
    {
      id: "quote-2",
      quote:
        "We have executed several multi-tonne physical bullion swaps with Steyn Limited to rebalance our state reserves. Their end-to-end logistics with armored air transports and absolute transaction confidentiality are unmatched in the industry.",
      author: "Hon. Alastair Vance",
      role: "Treasury Reserves Custodian",
      company: "Sovereign Wealth Reserve Fund",
      location: "London, United Kingdom",
    },
    {
      id: "quote-3",
      quote:
        "Ethical sourcing and complete supply chain transparency are critical for our institutional mandates. Steyn Limited provides independent double-blind assays and traceable provenance for every single bar delivered.",
      author: "Min-Jae Song",
      role: "Chief Investment Officer",
      company: "Asia Pacific Sovereign Trust",
      location: "Singapore",
    },
  ];

  return (
    <section
      id={id}
      className="relative py-24 sm:py-32 bg-brand-primary overflow-hidden"
    >
      {/* Background radial gold glow behind quotes */}
      <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vh] bg-radial from-[rgba(212,175,55,0.02)] to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          subtitle="TESTIMONIALS"
          title="The Consensus of Elite Counterparties"
          description="Earning the confidence of sovereign treasuries, global asset managers, and bullion consortiums through absolute precision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative bg-brand-card border border-border-gold p-10 flex flex-col justify-between rounded-xs transition-colors duration-500 hover:bg-neutral-900/10 group"
            >
              {/* Huge stylized cormorant quotes in top corner */}
              <div className="absolute top-4 right-8 font-serif text-8xl text-gold-primary/10 select-none leading-none font-bold group-hover:text-gold-primary/20 transition-colors duration-500">
                &ldquo;
              </div>

              <div className="space-y-8">
                {/* Quote Text */}
                <p className="font-serif text-lg sm:text-xl text-text-secondary leading-relaxed font-light italic">
                  {item.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-8 mt-8 border-t border-border-gold/20 flex flex-col">
                <span className="font-sans text-xs uppercase tracking-widest font-semibold text-white group-hover:text-gold-bright transition-colors duration-300">
                  {item.author}
                </span>
                <span className="font-sans text-[11px] text-text-secondary mt-1 font-light">
                  {item.role}
                </span>
                <span className="font-sans text-[10px] text-gold-primary font-bold tracking-wider mt-1.5 uppercase">
                  {item.company} <span className="text-text-muted">|</span>{" "}
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
