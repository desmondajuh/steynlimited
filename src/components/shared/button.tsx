/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";

interface ButtonProps {
  id?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  id,
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 py-4 px-8 select-none overflow-hidden outline-none";

  // Specific luxury theme variants
  const variants = {
    primary:
      "bg-gold-gradient text-bg-primary border border-gold-bright hover:text-white hover:border-white shadow-xl shadow-gold-dark/10 shine-effect cursor-pointer",
    secondary:
      "bg-transparent text-white border border-border-gold hover:border-gold-primary hover:bg-gold-primary/5 shine-effect cursor-pointer",
    ghost:
      "bg-transparent text-text-secondary hover:text-white border border-transparent hover:border-border-gold cursor-pointer",
  };

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
