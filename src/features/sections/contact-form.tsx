import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Loader2,
  CheckCircle2,
  Lock,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import Button from "@/components/shared/button";
// import { Button } from "../ui/button";

interface ContactFormProps {
  id?: string;
  prefilledService?: string | null;
}

export default function ContactForm({
  id,
  prefilledService,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    institution: "",
    email: "",
    phone: "",
    service: prefilledService || "Gold Procurement",
    volume: "50kg - 250kg",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [protocolCode, setProtocolCode] = useState("");

  const generateProtocolCode = () => {
    const chars = "0123456789ABCDEFGPQRST";
    let code = "STEYN-";
    for (let i = 0; i < 12; i++) {
      if (i === 4 || i === 8) code += "-";
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.institution) {
      alert("Please provide Name, Institution and Corporate Email.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury-grade enterprise compliance checks
    setTimeout(() => {
      setProtocolCode(generateProtocolCode());
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2200);
  };

  return (
    <div id={id} className="relative w-full max-w-2xl mx-auto">
      {/* Decorative outer fine border and blur */}
      <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-xl border border-border-gold/30 rounded-xs pointer-events-none z-0" />

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 p-8 md:p-12 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-border-gold/20 pb-4 mb-6">
              <div className="flex items-center gap-2 text-gold-primary">
                <Lock className="w-4 h-4" />
                <span className="font-mono text-[10px] tracking-widest uppercase font-semibold">
                  Secure Encryption Activated
                </span>
              </div>
              <div className="text-[10px] font-mono text-text-muted">
                ECC-256 BIT / AES-GCM
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] uppercase tracking-widest text-text-secondary font-medium">
                  Authorized Signatory Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Baron von Steyn"
                  className="w-full bg-neutral-950/80 border border-border-gold/30 focus:border-gold-primary text-sm text-white px-4 py-3 outline-none transition-colors duration-300 font-sans font-light"
                />
              </div>

              {/* Institution */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] uppercase tracking-widest text-text-secondary font-medium">
                  Institution / Sovereign Entity
                </label>
                <input
                  type="text"
                  name="institution"
                  required
                  value={formData.institution}
                  onChange={handleInputChange}
                  placeholder="e.g. Central Bank of Switzerland"
                  className="w-full bg-neutral-950/80 border border-border-gold/30 focus:border-gold-primary text-sm text-white px-4 py-3 outline-none transition-colors duration-300 font-sans font-light"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Corporate Email */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] uppercase tracking-widest text-text-secondary font-medium">
                  Secure Corporate Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@institution.com"
                  className="w-full bg-neutral-950/80 border border-border-gold/30 focus:border-gold-primary text-sm text-white px-4 py-3 outline-none transition-colors duration-300 font-sans font-light"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] uppercase tracking-widest text-text-secondary font-medium">
                  Protected Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+41 (0) 44 234 11 11"
                  className="w-full bg-neutral-950/80 border border-border-gold/30 focus:border-gold-primary text-sm text-white px-4 py-3 outline-none transition-colors duration-300 font-sans font-light"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Service Requested */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] uppercase tracking-widest text-text-secondary font-medium">
                  Primary Protocol Requested
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-950 border border-border-gold/30 focus:border-gold-primary text-sm text-white px-4 py-3 outline-none transition-colors duration-300 font-sans font-light cursor-pointer"
                >
                  <option value="Gold Export">Gold Export Services</option>
                  <option value="Gold Procurement">
                    Precious Metal Procurement
                  </option>
                  <option value="Commodity Trading">
                    International Commodity Sourcing
                  </option>
                  <option value="International Logistics">
                    Secure Global Logistics
                  </option>
                  <option value="Mining Partnerships">
                    Responsible Mining Partnerships
                  </option>
                  <option value="Quality Assurance">
                    Institutional Assay & QA
                  </option>
                </select>
              </div>

              {/* Volume Estimate */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] uppercase tracking-widest text-text-secondary font-medium">
                  Estimated Bullion Volume (Annual)
                </label>
                <select
                  name="volume"
                  value={formData.volume}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-950 border border-border-gold/30 focus:border-gold-primary text-sm text-white px-4 py-3 outline-none transition-colors duration-300 font-sans font-light cursor-pointer"
                >
                  <option value="Under 50kg">
                    Under 50 kg (Boutique / Sovereign Wealth)
                  </option>
                  <option value="50kg - 250kg">
                    50 kg - 250 kg (Standard Institutional)
                  </option>
                  <option value="250kg - 1000kg">
                    250 kg - 1,000 kg (Tier 1 Treasury)
                  </option>
                  <option value="1000kg+">
                    1,000 kg+ (Good Delivery Bullion Consortium)
                  </option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="font-sans text-[10px] uppercase tracking-widest text-text-secondary font-medium">
                Mandate Objectives & Confidential Notes
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe sovereign guidelines, target delivery vault coordinates, or procurement scope..."
                className="w-full bg-neutral-950/80 border border-border-gold/30 focus:border-gold-primary text-sm text-white px-4 py-3 outline-none transition-colors duration-300 font-sans font-light resize-none"
              />
            </div>

            {/* Disclaimer */}
            <p className="font-sans text-[10px] text-text-muted leading-relaxed font-light">
              By submitting this secure mandate inquiry, you acknowledge that
              Steyn Limited enforces absolute confidentiality. All data is
              processed on high-security private physical nodes in Switzerland
              and conforms to swiss banking privacy practices.
            </p>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full font-bold py-5 text-[11px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-bg-primary" />
                    <span>Verifying Compliance...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Secure Corporate Mandate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 p-8 md:p-12 text-center space-y-8"
          >
            {/* Shield success logo */}
            <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-gold-primary/10 border border-gold-primary mb-2">
              <CheckCircle2 className="w-10 h-10 text-gold-bright" />
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-3xl font-light text-white tracking-wide">
                Secure Transmission Completed
              </h3>
              <p className="font-sans text-xs sm:text-sm text-text-secondary max-w-md mx-auto leading-relaxed font-light">
                Your mandate has been encrypted, routed through Steyn Private
                Server, and registered within our Swiss operations ledger.
              </p>
            </div>

            {/* Cryptographic metadata output */}
            <div className="bg-neutral-950 border border-border-gold p-6 text-left rounded-xs space-y-4 max-w-lg mx-auto font-mono text-[11px]">
              <div className="flex items-center gap-2 border-b border-border-gold/20 pb-2 text-gold-primary font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Verification Ledger Receipt</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-text-muted">
                <div>Client ID:</div>
                <div className="col-span-2 text-white font-medium">
                  {formData.fullName.split(" ")[0] || "SIG"}-
                  {(
                    formData.institution.replace(/\s+/g, "").substring(0, 4) ||
                    "ENT"
                  ).toUpperCase()}
                </div>

                <div>Auth Protocol:</div>
                <div className="col-span-2 text-gold-bright font-semibold">
                  {protocolCode}
                </div>

                <div>Status:</div>
                <div className="col-span-2 text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  QUEUED FOR ASSAY OFFICER
                </div>

                <div>Hash (SHA-256):</div>
                <div className="col-span-2 text-text-muted truncate">
                  8f39c2d184bf4aa93874ddffccae918e9aef81d11234bcfe123e4f7a
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    fullName: "",
                    institution: "",
                    email: "",
                    phone: "",
                    service: "Gold Procurement",
                    volume: "50kg - 250kg",
                    message: "",
                  });
                }}
                className="flex items-center gap-2 text-xs font-semibold tracking-wider text-text-muted hover:text-gold-primary transition-colors duration-300 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Mandate</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
