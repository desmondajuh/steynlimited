import { motion } from "motion/react";
import SectionTitle from "@/components/shared/section-title";
import StatisticCard from "@/components/shared/statistic-card";
import { StatisticItem } from "@/types/landing";

interface GlobalPresenceProps {
  id?: string;
}

export default function GlobalPresence({ id }: GlobalPresenceProps) {
  const stats: StatisticItem[] = [
    {
      value: "25+",
      label: "Trading Partners",
      description:
        "Sovereign state treasuries, central banking syndicates, and major national bullion refiners.",
    },
    {
      value: "40+",
      label: "Global Destinations",
      description:
        "Secured international flight corridors and bonded vaults across 5 major continents.",
    },
    {
      value: "100+",
      label: "Completed Transactions",
      description:
        "Flawless physical settlements exceeding billions in aggregate asset valuation.",
    },
    {
      value: "99.9%",
      label: "Delivery Rate",
      description:
        "Perfect logistical custody records with zero-loss secure armed transport.",
    },
  ];

  // Sovereign hub coordinates for the custom vector SVG map
  const hubs = [
    {
      name: "London HQ",
      x: 480,
      y: 135,
      details: "Corporate Governance & Trade",
    },
    {
      name: "Zurich Vault",
      x: 495,
      y: 145,
      details: "Primary Depository & Assay",
    },
    {
      name: "Dubai Office",
      x: 585,
      y: 195,
      details: "Refinery Hub & Commodity Sourcing",
    },
    {
      name: "Singapore Hub",
      x: 745,
      y: 260,
      details: "Asia-Pacific Reserve Management",
    },
  ];

  return (
    <section
      id={id}
      className="relative py-24 sm:py-32 bg-brand-secondary/20 overflow-hidden"
    >
      {/* Background radial soft light under world map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-radial from-[rgba(212,175,55,0.03)] to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          subtitle="GLOBAL PRESENCE"
          title="Corridors of Sovereign Wealth"
          description="Operating secure physical trade pathways connecting primary gold producers, accredited refineries, and high-security vaults globally."
        />

        {/* Large Custom Animated Vector SVG Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full aspect-2/1 max-w-5xl mx-auto bg-neutral-950/40 border border-border-gold/30 p-4 sm:p-8 rounded-xs mb-16 md:mb-24 overflow-hidden shadow-2xl shadow-black/80"
        >
          {/* Subtle grid background for the map box */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,215,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,215,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Map Title Tag */}
          <div className="absolute top-4 left-6 flex items-center gap-2 font-mono text-[9px] text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-pulse" />
            <span>REAL-TIME SECURED BULLION FLOWS // TRACE NODE 4</span>
          </div>

          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full opacity-80 filter drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* World Map Outline Dots - Minimalist representation for extreme luxury style */}
            {/* We draw beautiful stylized map coordinates using vector paths representing simple continents */}
            <g
              fill="rgba(255, 255, 255, 0.05)"
              className="transition-all duration-1000"
            >
              {/* North America */}
              <path d="M100,100 L250,100 L300,150 L250,250 L180,250 L150,200 L100,150 Z" />
              {/* South America */}
              <path d="M220,270 L280,270 L320,330 L270,450 L230,370 Z" />
              {/* Eurasia / Europe */}
              <path d="M430,100 L550,100 L700,110 L850,130 L900,180 L750,220 L650,210 L520,200 L430,150 Z" />
              {/* Africa */}
              <path d="M450,220 L550,220 L580,270 L550,370 L480,310 L440,260 Z" />
              {/* Australia */}
              <path d="M780,320 L880,320 L900,380 L810,380 Z" />
            </g>

            {/* Glowing Trade Connection Curves */}
            {/* London -> Zurich */}
            <path
              d="M 480,135 Q 487,140 495,145"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
              strokeDasharray="3 3"
              className="opacity-60"
            />
            {/* London -> Dubai */}
            <motion.path
              d="M 480,135 Q 532,145 585,195"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            />
            {/* Zurich -> Dubai */}
            <motion.path
              d="M 495,145 Q 540,165 585,195"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />
            {/* Dubai -> Singapore */}
            <motion.path
              d="M 585,195 Q 665,220 745,260"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />

            {/* Defs for glow gradients */}
            <defs>
              <linearGradient
                id="goldGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9A7A17" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#F2D16B" />
              </linearGradient>
            </defs>

            {/* Hub Pulsar Targets */}
            {hubs.map((hub, idx) => (
              <g key={idx}>
                {/* Outer halo ripple */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r="8"
                  fill="rgba(212, 175, 55, 0.2)"
                >
                  <animate
                    attributeName="r"
                    values="5;15;5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.8;0;0.8"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Inner solid gold dot */}
                <circle cx={hub.x} cy={hub.y} r="3.5" fill="#F2D16B" />

                {/* Text Labels for Desktop */}
                <text
                  x={hub.x + 8}
                  y={hub.y + 4}
                  fill="#FFFFFF"
                  fontSize="9"
                  fontFamily="Inter"
                  fontWeight="bold"
                  letterSpacing="1"
                  className="select-none pointer-events-none"
                >
                  {hub.name.toUpperCase()}
                </text>
              </g>
            ))}
          </svg>

          {/* Mini overlay listing hubs on the map corner */}
          <div className="absolute bottom-4 right-6 bg-brand-primary/90 border border-border-gold p-4 rounded-xs hidden sm:block">
            <div className="font-mono text-[8px] text-gold-primary tracking-widest uppercase font-bold mb-2">
              ACCREDITED DEPOSITORIES
            </div>
            <div className="space-y-1.5">
              {hubs.map((hub, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold-bright" />
                  <span className="text-[10px] text-white font-medium">
                    {hub.name}
                  </span>
                  <span className="text-[9px] text-text-muted">
                    — {hub.details}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Four Statistics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 bg-brand-card border border-border-gold rounded-xs shadow-xl divide-y divide-border-gold md:divide-y-0">
          {stats.map((stat, idx) => (
            <StatisticCard key={idx} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
