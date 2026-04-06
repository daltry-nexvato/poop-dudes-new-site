/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ClientInteractions from "./ClientInteractions";

interface ServiceDetail {
  icon: string;
  text: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string[];
  details: ServiceDetail[];
  ctaText: string;
}

const services = [
  { name: "Septic Tank Pumping", href: "/services/septic-tank-pumping", icon: "🪠" },
  { name: "Septic Tank Installations", href: "/services/septic-tank-installations", icon: "🏗️" },
  { name: "New Septic Installations", href: "/services/new-septic-installations", icon: "🏠" },
  { name: "Septic Tank Repairs", href: "/services/septic-tank-repairs", icon: "🔧" },
  { name: "Emergency Tank Repairs", href: "/services/emergency-tank-repairs", icon: "🚨" },
  { name: "Field Line Repairs", href: "/services/field-line-repairs", icon: "🌿" },
  { name: "Field Line Installations", href: "/services/field-line-installations", icon: "🌿" },
];

const serviceAreas = [
  "Chattanooga, TN", "Cleveland, TN", "Collegedale, TN", "East Ridge, TN",
  "Harrison, TN", "Hixson, TN", "Ooltewah, TN", "Red Bank, TN",
  "Soddy Daisy, TN", "Signal Mountain, TN", "Middle Valley, TN",
  "Lakesite, TN", "Fort Oglethorpe, GA", "Ringgold, GA",
];

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  details,
  ctaText,
}: ServicePageProps) {
  return (
    <>
      <ClientInteractions />

      {/* Navigation */}
      <nav className="navbar scrolled" id="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo">
            <img
              src="https://poopdudessepticservice.com/wp-content/uploads/2022/01/cropped-Poop-Dudes-Plumbing-1-399x87.png"
              alt="Poop Dudes Septic Service Logo"
            />
          </Link>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>
          <ul className="nav-links" id="navLinks">
            <li className="nav-dropdown">
              <Link href="/#services" className="nav-dropdown-trigger">
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="nav-dropdown-menu">
                <Link href="/services/septic-tank-pumping">Septic Tank Pumping</Link>
                <Link href="/services/septic-tank-installations">Septic Tank Installations</Link>
                <Link href="/services/new-septic-installations">New Septic Installations</Link>
                <Link href="/services/septic-tank-repairs">Septic Tank Repairs</Link>
                <Link href="/services/emergency-tank-repairs">Emergency Tank Repairs</Link>
                <Link href="/services/field-line-repairs">Field Line Repairs</Link>
                <Link href="/services/field-line-installations">Field Line Installations</Link>
              </div>
            </li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#areas">Service Areas</Link></li>
            <li><Link href="/#reviews">Reviews</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
            <li><a href="tel:4234249120" className="btn btn-nav">Call Now: 423-424-9120</a></li>
          </ul>
        </div>
      </nav>

      {/* Service Hero */}
      <header className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <Link href="/#services" className="service-breadcrumb">
              ← Back to All Services
            </Link>
            <h1>{title}</h1>
            <p className="service-hero-subtitle">{subtitle}</p>
            <div className="service-hero-ctas">
              <a href="tel:4234249120" className="btn btn-primary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call 423-424-9120
              </a>
              <Link href="/#contact" className="btn btn-outline-dark btn-lg">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Service Content */}
      <section className="service-content">
        <div className="container">
          <div className="service-grid">
            <div className="service-main">
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="service-details-grid">
                {details.map((detail, i) => (
                  <div key={i} className="service-detail-card">
                    <span className="service-detail-icon">{detail.icon}</span>
                    <span>{detail.text}</span>
                  </div>
                ))}
              </div>

              <div className="service-promise">
                <h3>The Poop Dudes Promise</h3>
                <p>We promise 100% satisfaction on all services or we will give you a complete refund. We treat our customers like family.</p>
              </div>

              <div className="service-cta-block">
                <h3>{ctaText}</h3>
                <p>Call us anytime — 24 hours a day, 7 days a week.</p>
                <a href="tel:4234249120" className="btn btn-primary btn-lg">
                  Call Now: 423-424-9120
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="service-sidebar">
              <div className="sidebar-card">
                <h4>All Services</h4>
                <ul className="sidebar-services">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href}>
                        <span>{s.icon}</span> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card sidebar-contact">
                <h4>Need Help Now?</h4>
                <p>We offer 24/7 emergency service.</p>
                <a href="tel:4234249120" className="btn btn-primary btn-full">
                  Call 423-424-9120
                </a>
                <a href="mailto:poopdudeslsa@gmail.com" className="sidebar-email">
                  poopdudeslsa@gmail.com
                </a>
              </div>

              <div className="sidebar-card">
                <h4>Service Areas</h4>
                <div className="sidebar-areas">
                  {serviceAreas.map((area) => (
                    <span key={area} className="sidebar-area-tag">{area}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="https://poopdudessepticservice.com/wp-content/uploads/2022/01/cropped-Poop-Dudes-Plumbing-1-399x87.png" alt="Poop Dudes Logo" className="footer-logo" />
              <p>Chattanooga&apos;s Premier Septic Service. Family-owned, professionally operated, and always ready to handle your crap.</p>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services/septic-tank-pumping">Septic Tank Pumping</Link></li>
                <li><Link href="/services/septic-tank-installations">Septic Installations</Link></li>
                <li><Link href="/services/septic-tank-repairs">Septic Repairs</Link></li>
                <li><Link href="/services/emergency-tank-repairs">Emergency Service</Link></li>
                <li><Link href="/services/field-line-repairs">Field Line Services</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/#about">About Us</Link></li>
                <li><Link href="/#reviews">Reviews</Link></li>
                <li><Link href="/#areas">Service Areas</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:4234249120">423-424-9120</a></li>
                <li><a href="mailto:poopdudeslsa@gmail.com">poopdudeslsa@gmail.com</a></li>
                <li>24/7 Availability</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Poop Dudes Septic Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
