import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { StatisticItem } from "@/types/landing";

interface StatisticCardProps {
  id?: string;
  stat: StatisticItem;
  index: number;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ id, stat, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Parse numeric target from value (e.g. "25+" -> 25, "99%" -> 99)
  const targetNumber = parseInt(stat.value.replace(/\D/g, "")) || 0;
  const suffix = stat.value.replace(/\d/g, "");

  useEffect(() => {
    if (!isInView) return;

    // let start = 0;
    const duration = 1500; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * targetNumber);

      setDisplayValue(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetNumber);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetNumber]);

  return (
    <motion.div
      id={id}
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="text-center p-6 md:p-8 bg-neutral-900/10 border-r border-border-gold last:border-r-0 max-md:border-r-0 max-md:border-b last:max-md:border-b-0"
    >
      {/* Dynamic Count Animation */}
      <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-gold-primary mb-3">
        {displayValue}
        <span className="text-gold-bright text-3xl sm:text-4xl md:text-5xl ml-1 font-sans font-light">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white mb-2">
        {stat.label}
      </h4>

      {/* Description */}
      <p className="font-sans text-xs text-text-muted max-w-xs mx-auto leading-relaxed">
        {stat.description}
      </p>
    </motion.div>
  );
};

export default StatisticCard;
