import { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Septic Field Line Installations Chattanooga, TN | Poop Dudes",
  description: "Highest rated septic field line installation in Chattanooga, TN. Licensed, insured, experienced. Call 423-424-9120 for a free quote.",
};

export default function FieldLineInstallations() {
  return (
    <ServicePageLayout
      title="Field Line Installations in Chattanooga, TN"
      subtitle="Highest Rated Field Line Installation in Chattanooga"
      description={[
        "Poop Dudes is the highest rated company on Google for septic field line installations in Chattanooga, TN, and surrounding areas. We are licensed, insured, and have highly trained and experienced technicians equipped with advanced tools and equipment.",
        "Whether your septic field line needs replacement or you want to install a new one, we are the company to hire for the job. We offer unmatched septic field line installation services and septic solutions for residential and commercial properties.",
        "We treat our customers like family. Every installation is done to code, properly permitted, and built to last for decades. We promise 100% customer satisfaction.",
      ]}
      details={[
        { icon: "🌿", text: "New field line installation for any property type" },
        { icon: "🔄", text: "Complete field line replacement services" },
        { icon: "🏠", text: "Residential drain field installation" },
        { icon: "🏢", text: "Commercial drain field solutions" },
        { icon: "📋", text: "Fully permitted and code-compliant work" },
        { icon: "⭐", text: "Highest rated on Google in Chattanooga" },
      ]}
      ctaText="Call Poop Dudes for a free quote on your field line installation."
    />
  );
}
