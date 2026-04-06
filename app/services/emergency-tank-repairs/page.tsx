import { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Emergency Septic Tank Repairs Chattanooga, TN | Poop Dudes",
  description: "24/7 emergency septic tank repairs in Chattanooga, TN. Fast response, licensed technicians. Call 423-424-9120 anytime for immediate service.",
};

export default function EmergencyTankRepairs() {
  return (
    <ServicePageLayout
      title="Emergency Tank Repairs in Chattanooga, TN"
      subtitle="24/7 Emergency Septic Service by Poop Dudes"
      description={[
        "Septic emergencies don't wait for business hours, and neither do we. When your septic system fails unexpectedly, Poop Dudes Septic Service is here around the clock to get you out of a messy situation — fast.",
        "Septic pumping is not just about maintaining your septic system; it's about ensuring the health and safety of your environment. A failing septic system can contaminate groundwater, create health hazards, and cause serious property damage if not addressed immediately.",
        "Our emergency team is equipped and ready to respond to any septic crisis. Whether it's a backup, overflow, or system failure, we'll diagnose the problem and have it fixed as quickly as possible.",
      ]}
      details={[
        { icon: "🚨", text: "24/7 emergency response — nights, weekends, holidays" },
        { icon: "⚡", text: "Fast response times across the Chattanooga area" },
        { icon: "🔧", text: "On-the-spot diagnosis and repair" },
        { icon: "🏠", text: "Residential emergency septic service" },
        { icon: "🏢", text: "Commercial emergency septic service" },
        { icon: "🛡️", text: "Licensed, insured, and fully equipped crews" },
      ]}
      ctaText="Septic emergency? Call Poop Dudes right now."
    />
  );
}
