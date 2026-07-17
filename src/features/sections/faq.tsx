import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types/landing";

interface FAQProps {
  id?: string;
}

export default function FAQ({ id }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: "faq-1",
      question: "What is the minimum transaction volume for gold procurement?",
      answer:
        "To maintain peak efficiency and security protocols, Steyn Limited specializes in institutional-scale procurement. Our standard minimum contract starts at 12,500 troy ounces (approximately 1 Good Delivery bar standard allocation, equivalent to approximately 400kg of refined gold), although we accommodate select high-net-worth family office requests starting at 50 kilograms.",
    },
    {
      id: "faq-2",
      question:
        "How does Steyn Limited guarantee the ethical provenance of its precious metals?",
      answer:
        "We strictly adhere to the LBMA Responsible Gold Guidance and the OECD Due Diligence Guidance for Responsible Supply Chains. Every gram of gold sourced or exported by Steyn Limited is trace-tested, originating only from certified conflict-free mines. We employ blockchain-powered chain-of-custody tracking from mine-site to depository handover.",
    },
    {
      id: "faq-3",
      question:
        "Which secure logistics carriers and vaults do you partner with?",
      answer:
        "All physical transits are executed by premium security logistics firms: Brink’s, Malca-Amit, and Loomis. Bullion is deposited and verified within sovereign vaults and LBMA-approved depositories located in Zurich (Switzerland), London (UK), Singapore, and Dubai (UAE). All shipments are 100% insured under comprehensive Lloyd’s of London underwriters policies.",
    },
    {
      id: "faq-4",
      question:
        "Are assay certificates issued by internationally accredited laboratories?",
      answer:
        "Yes. Every delivery is accompanied by an independent, double-blind assay certificate issued by world-renowned refiners and sovereign labs (such as Metalor, Valcambi, or PAMP). Purity certifications state exact fineness, which regularly exceeds 999.9 parts per thousand fine gold.",
    },
    {
      id: "faq-5",
      question:
        "What INCOTERMS are supported for international sovereign trade?",
      answer:
        "Our default trade agreements are structured under CIF (Cost, Insurance, and Freight) to the buyer’s requested sovereign airport vault, or FOB (Free On Board) at our primary refinery hubs in Switzerland and Dubai. Customized delivery frameworks are negotiated individually for central banks.",
    },
  ];

  const toggle = (itemId: string) => {
    setOpenId(openId === itemId ? null : itemId);
  };

  return (
    <div id={id} className="max-w-3xl mx-auto space-y-4 px-4">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="bg-brand-card border border-border-gold transition-all duration-300 hover:border-gold-primary/20 rounded-xs overflow-hidden"
          >
            {/* Accordion Trigger Header */}
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer select-none"
            >
              <span className="font-serif text-lg sm:text-xl font-light text-white pr-6 group-hover:text-gold-bright transition-colors">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-gold-primary shrink-0"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            {/* Accordion Expandable Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-border-gold/20">
                    <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
