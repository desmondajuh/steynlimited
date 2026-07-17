import { motion } from "motion/react";

interface SectionTitleProps {
  id?: string;
  number?: string;
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  id,
  number,
  subtitle,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const isLeft = align === "left";

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`max-w-4xl mb-16 md:mb-24 ${isLeft ? "text-left" : "mx-auto text-center"}`}
    >
      <div
        className={`flex items-center gap-3 mb-4 ${isLeft ? "justify-start" : "justify-center"}`}
      >
        {number && (
          <span className="font-mono text-xs text-gold-primary tracking-widest font-semibold">
            {number}
          </span>
        )}
        {number && (
          <span className="w-1.5 h-1.5 rounded-full bg-gold-dark/40" />
        )}

        {isLeft ? (
          <>
            <div className="w-12 h-[1px] bg-gold-primary/60" />
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold-primary font-medium">
              {subtitle}
            </span>
          </>
        ) : (
          <>
            <div className="w-8 h-[1px] bg-gold-primary/40" />
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold-primary font-medium">
              {subtitle}
            </span>
            <div className="w-8 h-[1px] bg-gold-primary/40" />
          </>
        )}
      </div>

      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-6 leading-[1.1]">
        {title}
      </h2>

      {description && (
        <p className="font-sans text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
          {description}
        </p>
      )}

      <div
        className={`mt-8 flex ${isLeft ? "justify-start" : "justify-center"}`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "48px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-[1px] bg-gold-primary"
        />
      </div>
    </motion.div>
  );
}
