import { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Septic Tank Installations Chattanooga, TN | Poop Dudes",
  description: "Professional septic tank installation in Chattanooga, TN. Aerobic, conventional & residential systems. Licensed & insured. Call 423-424-9120.",
};

export default function SepticTankInstallations() {
  return (
    <ServicePageLayout
      title="Septic Tank Installations in Chattanooga, TN"
      subtitle="Expert Septic Installations by Poop Dudes Septic Service"
      description={[
        "Septic installation represents a vital aspect of any property, whether residential or commercial. It ensures proper waste management and contributes to a healthy living or working environment.",
        "At Poop Dudes Septic Service, we handle every type of septic system installation. From aerobic systems for efficient waste treatment to conventional systems for traditional waste management, we do it right the first time.",
        "Every installation is done to code, fully permitted, and built to last. Our team works with you from planning through completion to ensure your new septic system meets your property's specific needs.",
      ]}
      details={[
        { icon: "💨", text: "Aerobic septic tank installation for efficient waste treatment" },
        { icon: "🏗️", text: "Conventional septic tank installation for traditional systems" },
        { icon: "🏠", text: "Residential septic tank installation for homes of all sizes" },
        { icon: "🏢", text: "Commercial septic tank installation for businesses" },
        { icon: "💧", text: "Advanced waste management solutions including pump systems" },
        { icon: "📋", text: "Fully permitted and inspected installations" },
      ]}
      ctaText="Call Poop Dudes for a free quote on your septic installation."
    />
  );
}
