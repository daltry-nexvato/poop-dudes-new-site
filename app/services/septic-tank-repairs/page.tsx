import { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Septic Tank Repairs Chattanooga, TN | Poop Dudes Septic Service",
  description: "Professional septic tank repair in Chattanooga, TN. Trained technicians with the right tools. 24/7 service. Call 423-424-9120.",
};

export default function SepticTankRepairs() {
  return (
    <ServicePageLayout
      title="Septic Tank Repairs in Chattanooga, TN"
      subtitle="Unmatched Septic Repair Services by Poop Dudes"
      description={[
        "Poop Dudes Septic Service offers unmatched septic tank repair services to Chattanooga homes and businesses. When your septic system isn't working right, you need a team that can diagnose the issue fast and fix it right.",
        "We have trained technicians and other experts equipped with the right tools and equipment to inspect and fix your tank correctly. Whether it's a cracked lid, damaged baffle, root intrusion, or a full system failure, we've seen it all and fixed it all.",
        "Don't ignore the warning signs — soggy spots in your yard, slow drains, bad odors, or sewage backups all point to a septic issue that needs professional attention. The sooner you call, the less it costs.",
      ]}
      details={[
        { icon: "🔍", text: "Thorough inspection and diagnosis of your system" },
        { icon: "🔧", text: "Repair of cracked tanks, damaged baffles, and lids" },
        { icon: "🌳", text: "Root intrusion removal and prevention" },
        { icon: "🪠", text: "Clog clearing and line repair" },
        { icon: "📸", text: "Camera inspection to find hidden problems" },
        { icon: "⏰", text: "Same-day and emergency repair service available" },
      ]}
      ctaText="Call Poop Dudes for a free quote on your septic repair."
    />
  );
}
