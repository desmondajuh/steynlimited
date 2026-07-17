import { motion } from "motion/react";
import { ShieldCheck, Eye, Compass, Scale, Globe2, Lock } from "lucide-react";
import SectionTitle from "@/components/shared/section-title";
import { WhyReason } from "@/types/landing";

interface WhyChooseUsProps {
  id?: string;
}

export default function WhyChooseUs({ id }: WhyChooseUsProps) {
  const reasons: WhyReason[] = [
    {
      id: "integrity",
      title: "Uncompromised Integrity",
      description:
        "We hold our alliances to the highest moral and ethical benchmarks, enforcing stringent anti-bribery, conflict-free mineral sourcing, and fair-wage compliance metrics.",
      iconName: "ShieldCheck",
    },
    {
      id: "transparency",
      title: "Auditable Transparency",
      description:
        "We offer full dual-assay reporting and independent third-party vaults validation. Clients can view audit logs and full physical asset tracking in real-time.",
      iconName: "Eye",
    },
    {
      id: "standards",
      title: "International Standards",
      description:
        "All operations strictly adhere to LBMA Good Delivery specifications, Swiss Federal Act on Precious Metals Control, and London Metals Exchange provisions.",
      iconName: "Scale",
    },
    {
      id: "team",
      title: "Elite Advisory Team",
      description:
        "Our senior trade team includes veteran Swiss bankers, veteran metal refiners, compliance attorneys, and sovereign reserve advisors with decadal expertise.",
      iconName: "Compass",
    },
    {
      id: "network",
      title: "Global Sovereign Network",
      description:
        "We operate exclusive trade corridors connecting major bullion refineries directly to sovereign bank depositories across London, Zurich, Dubai, and Singapore.",
      iconName: "Globe2",
    },
    {
      id: "transactions",
      title: "Cryptographic Protection",
      description:
        "Every financial transfer and transaction receipt is verified via secure client keys and tracked using distributed ledger technologies to ensure zero-risk settlement.",
      iconName: "Lock",
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-gold-primary" />;
      case "Eye":
        return <Eye className="w-5 h-5 text-gold-primary" />;
      case "Scale":
        return <Scale className="w-5 h-5 text-gold-primary" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-gold-primary" />;
      case "Globe2":
        return <Globe2 className="w-5 h-5 text-gold-primary" />;
      case "Lock":
        return <Lock className="w-5 h-5 text-gold-primary" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-gold-primary" />;
    }
  };

  return (
    <section id={id} className="relative py-24 sm:py-32 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          subtitle="STEYN ADVANTAGE"
          title="The Pillars of Precious Metals Excellence"
          description="Sovereigns and global corporations choose Steyn Limited because we combine traditional trade security with ultra-modern tracking technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: "#D4AF37" }}
              className="group relative flex flex-col sm:flex-row items-start gap-6 p-8 bg-brand-card border border-border-gold transition-all duration-300 hover:bg-neutral-900/20 rounded-xs"
            >
              {/* Card Hover Shimmer Top line */}
              <div className="absolute top-0 left-0 w-0 h-px bg-gold-primary group-hover:w-full transition-all duration-500" />

              {/* Number tag */}
              <div className="absolute top-4 right-6 font-mono text-[9px] text-text-muted tracking-widest font-semibold group-hover:text-gold-primary transition-colors">
                SECURE // 0{index + 1}
              </div>

              {/* Icon container */}
              <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xs bg-brand-primary border border-border-gold/60 group-hover:border-gold-primary transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Text detail */}
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-normal text-white group-hover:text-gold-bright transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
