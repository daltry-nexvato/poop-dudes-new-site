import { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Septic Tank Pumping Chattanooga, TN | Poop Dudes Septic Service",
  description: "Expert septic tank pumping in Chattanooga, TN. Residential & commercial septic pumping services. 24/7 availability. Call 423-424-9120 for a free quote.",
};

export default function SepticTankPumping() {
  return (
    <ServicePageLayout
      title="Septic Tank Pumping in Chattanooga, TN"
      subtitle="Expert Septic Pumping by Poop Dudes Septic Service"
      description={[
        "When it comes to septic pumping, you need a service that is reliable, efficient, and tailored to meet your needs. That's where Poop Dudes Septic Service comes in. We specialize in both residential and commercial septic pumping, ensuring your septic system functions optimally.",
        "Our services extend to residential tank pumping and commercial tank pumping, where we expertly remove liquid and floating solids from the tank. Regular pumping is essential to prevent backups, protect your drain field, and extend the life of your entire septic system.",
        "We recommend pumping your septic tank every 3-5 years, though this can vary based on household size and usage. Don't wait until you have a problem — preventive maintenance saves you thousands in the long run.",
      ]}
      details={[
        { icon: "🏠", text: "Residential septic pumping for homes of all sizes" },
        { icon: "🏢", text: "Commercial septic pumping for businesses" },
        { icon: "🔍", text: "Full tank inspection included with every pump" },
        { icon: "📋", text: "Pumping recommended every 3-5 years" },
        { icon: "🚛", text: "Modern pump trucks for fast, clean service" },
        { icon: "⏰", text: "24/7 emergency pumping available" },
      ]}
      ctaText="Call Poop Dudes for your septic pumping needs."
    />
  );
}
