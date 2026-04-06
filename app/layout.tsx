import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poop Dudes Septic Service | Chattanooga's Premier Septic Service",
  description:
    "Family-owned septic service in Chattanooga, TN. 20+ years experience, 150+ five-star reviews. Septic pumping, installations, repairs & 24/7 emergency service. Call 423-424-9120.",
  icons: {
    icon: "https://poopdudessepticservice.com/wp-content/uploads/2022/01/cropped-Poop-Dudes-Plumbing-1-399x87.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
