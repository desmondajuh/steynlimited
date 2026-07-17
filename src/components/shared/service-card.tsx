import { useState } from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { ServiceItem } from "@/types/landing";

interface ServiceCardProps {
  id?: string;
  service: ServiceItem;
  index: number;
  onInquire: (serviceName: string) => void;
}

export default function ServiceCard({
  id,
  service,
  index,
  onInquire,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic icon retrieval with fallback
  const getIcon = (name: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[name];
    if (!IconComponent)
      return <Icons.Briefcase className="w-6 h-6 text-gold-primary" />;
    return (
      <IconComponent className="w-6 h-6 text-gold-primary transition-all duration-500" />
    );
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full bg-brand-card border border-border-gold p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:bg-neutral-900/40"
      style={{
        boxShadow: isHovered
          ? "0 10px 40px -15px rgba(212, 175, 55, 0.08), inset 0 0 20px 0 rgba(212, 175, 55, 0.02)"
          : "none",
      }}
    >
      {/* Subtle background golden mesh effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial from-[rgba(212,175,55,0.02)] to-transparent pointer-events-none" />

      {/* Top Card Decorator - Ultra fine golden accent line */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-500" />

      <div>
        {/* Service Icon with a glowing backdrop */}
        <div className="relative mb-8 w-12 h-12 flex items-center justify-center rounded-xs bg-brand-primary border border-border-gold/60 group-hover:border-gold-primary transition-colors duration-500">
          <div className="absolute inset-0 rounded-xs bg-gold-primary/0 group-hover:bg-gold-primary/5 blur-xs transition-all duration-500" />
          <span className="relative z-10 group-hover:scale-110 transition-transform duration-500">
            {getIcon(service.iconName)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-light text-white mb-4 group-hover:text-gold-bright transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-text-secondary leading-relaxed font-light mb-6">
          {service.description}
        </p>

        {/* Benefits List */}
        <ul className="space-y-3 mb-8">
          {service.benefits.map((benefit, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-text-muted"
            >
              <span className="text-gold-primary mt-1 select-none">▪</span>
              <span className="leading-relaxed font-light">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Trigger */}
      <div className="pt-4 border-t border-border-gold/30">
        <button
          onClick={() => onInquire(service.title)}
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gold-primary group-hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span>Initiate Protocol</span>
          <Icons.ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </motion.div>
  );
}
