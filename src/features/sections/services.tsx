import SectionTitle from "@/components/shared/section-title";
import ServiceCard from "@/components/shared/service-card";
import { ServiceItem } from "@/types/landing";

interface ServicesProps {
  id?: string;
  onInquire: (serviceName: string) => void;
}

export default function Services({ id, onInquire }: ServicesProps) {
  const servicesList: ServiceItem[] = [
    {
      id: "srv-1",
      title: "Sovereign Gold Export",
      description:
        "Facilitating secure export clearance, custom tax clearances, and certified vault-to-vault international deliveries for large-scale physical reserves.",
      iconName: "Compass",
      benefits: [
        "LBMA Good Delivery standard documentation",
        "Strategic sovereign customs clearance passes",
        "Bespoke trade corridor allocation schemes",
      ],
    },
    {
      id: "srv-2",
      title: "Precious Metals Procurement",
      description:
        "Direct procurement pipelines for 99.99% fine gold bullion and commercial silver allocations, tailored to institutional reserve requirements.",
      iconName: "Coins",
      benefits: [
        "Assigned physical bar allocations",
        "Direct connection to major Swiss refineries",
        "Comprehensive custodial trust solutions",
      ],
    },
    {
      id: "srv-3",
      title: "Global Commodity Sourcing",
      description:
        "Facilitating international precious metals trade, structured off-take agreements, and macro hedging operations for sovereign traders.",
      iconName: "Layers",
      benefits: [
        "Physical hedging and forward trade swaps",
        "Refinery off-take contract structures",
        "Multi-asset liquidity brokerage",
      ],
    },
    {
      id: "srv-4",
      title: "Secure International Logistics",
      description:
        "Door-to-door armored transport featuring dedicated secure charter flights, physical armed escorts, and absolute insurance cover.",
      iconName: "Truck",
      benefits: [
        "Insured transit underwritten by Lloyds of London",
        "Exclusive partnership with Brink's & Malca-Amit",
        "Full GPS real-time chain-of-custody tracking",
      ],
    },
    {
      id: "srv-5",
      title: "Responsible Mining Partnerships",
      description:
        "Structured investments and technical assistance in environmental mining concessions, enforcing fair labor and zero conflict guidelines.",
      iconName: "Briefcase",
      benefits: [
        "OECD due-diligence audited mining assets",
        "Environmental mercury-free recovery methods",
        "Development capital for ethical mine concessions",
      ],
    },
    {
      id: "srv-6",
      title: "Refined Quality Assurance",
      description:
        "Spectroscopic chemical assay audits and double-blind laboratory testings to certify exact fineness and physical bar weight compliance.",
      iconName: "ShieldCheck",
      benefits: [
        "Independent accredited laboratory assays",
        "Full physical bar serial trace records",
        "Continuous compliance audit certifications",
      ],
    },
  ];

  return (
    <section id={id} className="relative py-24 sm:py-32 bg-brand-primary">
      {/* Background shadow glow */}
      <div className="absolute top-1/3 left-1/4 w-[50vw] h-[50vh] bg-radial from-[rgba(212,175,55,0.015)] to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          subtitle="OUR CORE PROTOCOLS"
          title="Integrated Precious Metals Solutions"
          description="Providing sovereign and corporate counter-parties with absolute operational clarity, secure financial routing, and physically-backed asset delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={service.id} className="h-full">
              <ServiceCard
                service={service}
                index={index}
                onInquire={onInquire}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
