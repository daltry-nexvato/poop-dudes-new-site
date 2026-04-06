import { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "New Septic System Installation Chattanooga, TN | Poop Dudes",
  description: "New septic system installation for new construction in Chattanooga, TN. Expert team, no hassles. Call 423-424-9120 for a free quote.",
};

export default function NewSepticInstallations() {
  return (
    <ServicePageLayout
      title="New Septic Installs in Chattanooga, TN"
      subtitle="New Construction Septic Systems by Poop Dudes"
      description={[
        "Septic systems are an essential part of any home or property without the option of sewer systems. These systems manage wastewater from sinks, toilets, and showers — and getting the installation right from day one is critical.",
        "Our team at Poop Dudes Septic Service is highly trained in septic system installation and committed to providing quality service with no hassles or mistakes. We work closely with builders, contractors, and homeowners to ensure your new septic system is designed and installed perfectly for your property.",
        "From site evaluation and soil testing to permitting and final inspection, we handle every step of the process so you can focus on building your dream home.",
      ]}
      details={[
        { icon: "🏗️", text: "Complete new construction septic system design" },
        { icon: "🧪", text: "Site evaluation and soil testing" },
        { icon: "📋", text: "Permitting and regulatory compliance" },
        { icon: "🏠", text: "Residential new build septic systems" },
        { icon: "🏢", text: "Commercial new construction solutions" },
        { icon: "🤝", text: "Coordination with builders and contractors" },
      ]}
      ctaText="Call Poop Dudes for a free quote on your new septic installation."
    />
  );
}
