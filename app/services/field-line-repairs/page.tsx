import { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Septic Field Line Repairs Chattanooga, TN | Poop Dudes",
  description: "Expert septic field line repairs in Chattanooga, TN. Prevent backups and sewage issues. Licensed & insured. Call 423-424-9120.",
};

export default function FieldLineRepairs() {
  return (
    <ServicePageLayout
      title="Septic Field Line Repairs in Chattanooga, TN"
      subtitle="Expert Field Line Repair by Poop Dudes Septic Service"
      description={[
        "Field lines are one of the most important components of a healthy septic system. When they fail, harmful sewage can back up into your yard or even into your home. That's why prompt, professional field line repair is critical.",
        "Field lines, when clogged, can cause similar issues as any other septic components including leaks and backing up of sewage. Signs of a failing drain field include wet or soggy areas in your yard, foul odors, and slow-draining fixtures inside your home.",
        "We recommend septic system inspections yearly, with professional tank pumping every 3-5 years. Regular maintenance helps catch field line problems early before they become expensive emergencies.",
      ]}
      details={[
        { icon: "🌿", text: "Complete field line diagnosis and repair" },
        { icon: "🔍", text: "Camera inspection to locate damaged sections" },
        { icon: "🚜", text: "Excavation and replacement of failed lines" },
        { icon: "💧", text: "Drainage restoration and grading" },
        { icon: "🛡️", text: "Prevention strategies to extend field line life" },
        { icon: "✅", text: "100% satisfaction guarantee on all repairs" },
      ]}
      ctaText="Call Poop Dudes for a free quote on your field line repair."
    />
  );
}
