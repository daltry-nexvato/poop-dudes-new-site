/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ClientInteractions from "./components/ClientInteractions";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <ClientInteractions />

      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            <img
              src="https://poopdudessepticservice.com/wp-content/uploads/2022/01/cropped-Poop-Dudes-Plumbing-1-399x87.png"
              alt="Poop Dudes Septic Service Logo"
            />
          </a>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-links" id="navLinks">
            <li className="nav-dropdown">
              <a href="#services" className="nav-dropdown-trigger">
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </a>
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
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#areas">Service Areas</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="tel:4234249120" className="btn btn-nav">
                Call Now: 423-424-9120
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge fade-in-up">
            💩 Chattanooga&apos;s #1 Septic Service
          </div>
          <h1 className="fade-in-up delay-1">
            We Handle Your <span className="highlight">Crap</span>
            <br />
            So You Don&apos;t Have To.
          </h1>
          <p className="hero-subtitle fade-in-up delay-2">
            20+ years of experience. 150+ five-star reviews. One legendary name.
            Family-owned, professionally operated, and ready to roll — 24/7.
          </p>
          <div className="hero-ctas fade-in-up delay-3">
            <a href="tel:4234249120" className="btn btn-primary btn-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              423-424-9120
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              Get a Free Quote
            </a>
          </div>
          <div className="hero-trust fade-in-up delay-4">
            <div className="trust-item">
              <span className="trust-icon">⭐</span>
              <span>150+ Five-Star Reviews</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🔧</span>
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🕐</span>
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <a href="#services">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="7 13 12 18 17 13"></polyline>
              <polyline points="7 6 12 11 17 6"></polyline>
            </svg>
          </a>
        </div>
      </header>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-track">
          <span>💩 #1 IN THE #2 BUSINESS</span>
          <span>🚽 WE&apos;RE FLUSH WITH EXPERIENCE</span>
          <span>💪 IF WE START A JOB, WE FINISH IT</span>
          <span>📞 CALL 423-424-9120</span>
          <span>⭐ 150+ FIVE-STAR REVIEWS</span>
          <span>🏠 FAMILY OWNED &amp; OPERATED</span>
          <span>💩 #1 IN THE #2 BUSINESS</span>
          <span>🚽 WE&apos;RE FLUSH WITH EXPERIENCE</span>
          <span>💪 IF WE START A JOB, WE FINISH IT</span>
          <span>📞 CALL 423-424-9120</span>
          <span>⭐ 150+ FIVE-STAR REVIEWS</span>
          <span>🏠 FAMILY OWNED &amp; OPERATED</span>
        </div>
      </div>

      {/* How It Works / Process Section */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>3 Simple Steps</h2>
            <p>
              No runaround. No hassle. Just fast, honest septic service from
              start to finish.
            </p>
          </div>
          <div className="process-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">📞</div>
              <h3>Give Us a Call</h3>
              <p>
                Tell us what&apos;s going on. We&apos;ll give you a straight
                answer and a fair quote — no surprises.
              </p>
            </div>
            <div className="step-connector">
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
              >
                <line x1="0" y1="12" x2="32" y2="12"></line>
                <polyline points="28 6 34 12 28 18"></polyline>
              </svg>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">🚛</div>
              <h3>We Show Up</h3>
              <p>
                On time, every time. Our crew arrives ready to work with all the
                right equipment.
              </p>
            </div>
            <div className="step-connector">
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
              >
                <line x1="0" y1="12" x2="32" y2="12"></line>
                <polyline points="28 6 34 12 28 18"></polyline>
              </svg>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">✅</div>
              <h3>Problem Solved</h3>
              <p>
                Job done right, site cleaned up, and your system running like
                new. That&apos;s the Poop Dudes promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2>Our Services</h2>
            <p>
              From routine pumping to full installations — we&apos;ve seen it
              all, pumped it all, and fixed it all.
            </p>
          </div>
          <div className="services-grid">
            <Link href="/services/septic-tank-pumping" className="service-card-link">
              <div className="service-card">
                <div className="service-icon">🪠</div>
                <h3>Septic Tank Pumping</h3>
                <p>
                  Regular pumping keeps your system running smooth. We recommend
                  every 3-5 years — or whenever things start getting... fragrant.
                </p>
              </div>
            </Link>
            <Link href="/services/septic-tank-installations" className="service-card-link">
              <div className="service-card">
                <div className="service-icon">🏗️</div>
                <h3>New Septic Installations</h3>
                <p>
                  Licensed for all Tennessee septic system types: standard, low
                  pressure pipe, mounds, and drip systems. We do it right the
                  first time.
                </p>
              </div>
            </Link>
            <Link href="/services/septic-tank-repairs" className="service-card-link">
              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Septic Tank Repairs</h3>
                <p>
                  Tank acting up? Weird smells? Soggy yard? We&apos;ll diagnose
                  the issue and get your system back on track — fast.
                </p>
              </div>
            </Link>
            <Link href="/services/emergency-tank-repairs" className="service-card-link">
              <div className="service-card">
                <div className="service-icon">🚨</div>
                <h3>Emergency Repairs</h3>
                <p>
                  Septic emergencies don&apos;t wait for business hours, and
                  neither do we. 24/7 emergency service when you need it most.
                </p>
              </div>
            </Link>
            <Link href="/services/field-line-repairs" className="service-card-link">
              <div className="service-card">
                <div className="service-icon">🌿</div>
                <h3>Field Line Services</h3>
                <p>
                  Field line repairs and installations done right. We handle the
                  dirty work so your drain field stays healthy.
                </p>
              </div>
            </Link>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Inspections &amp; Camera</h3>
              <p>
                Buying a home? Need a check-up? Our septic inspections and
                snaking/camera services give you the full picture.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💧</div>
              <h3>Water Line Services</h3>
              <p>
                Water line repair and installation — because we handle both ends
                of the pipe.
              </p>
            </div>
            <Link href="/services/new-septic-installations" className="service-card-link">
              <div className="service-card">
                <div className="service-icon">🏠</div>
                <h3>New Construction</h3>
                <p>
                  Building new? We&apos;ll get your septic system installed and
                  permitted so you can focus on the fun stuff.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo">
        <div className="container">
          <div className="promo-card">
            <div className="promo-content">
              <span className="promo-tag">💰 Special Offer</span>
              <h2>$250 OFF Installation</h2>
              <p>
                Getting a second opinion? Smart move. Choose Poop Dudes and save
                $250 on your installation. Because good decisions should be
                rewarded.
              </p>
              <a href="tel:4234249120" className="btn btn-primary btn-lg">
                Claim This Offer
              </a>
            </div>
            <div className="promo-graphic">
              <span className="promo-amount">$250</span>
              <span className="promo-off">OFF</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img
                src="https://poopdudessepticservice.com/wp-content/uploads/2023/08/Dakota-and-fam-654x1024.jpg"
                alt="The Poop Dudes Family"
                loading="lazy"
              />
              <div className="about-image-badge">20+ Years Experience</div>
            </div>
            <div className="about-content">
              <span className="section-tag">Who We Are</span>
              <h2>
                Family Owned.
                <br />
                Professionally Operated.
                <br />
                Hilariously Named.
              </h2>
              <p>
                Yeah, we know the name is funny. But there&apos;s nothing funny
                about our work ethic. Poop Dudes Septic Service is a
                family-owned and operated business serving the greater
                Chattanooga area with over 20 years of industry experience.
              </p>
              <p>
                We treat every customer&apos;s home like our own. We show up on
                time, we do the job right, and we clean up after ourselves.
                We&apos;re building long-term relationships, not just pumping
                tanks.
              </p>
              <p>
                <strong>
                  Expect nothing but the best when you use Poop Dudes of
                  Chattanooga.
                </strong>
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number" data-count="20">
                    0+
                  </span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number" data-count="150">
                    0+
                  </span>
                  <span className="stat-label">5-Star Reviews</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Our Work Section */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Work</span>
            <h2>See What We Do</h2>
            <p>
              From installations to emergency repairs — here&apos;s a look at
              the Poop Dudes in action.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-item-large">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/An_excavator_digging_a_trench_-_geograph.org.uk_-_5672110.jpg/960px-An_excavator_digging_a_trench_-_geograph.org.uk_-_5672110.jpg"
                alt="Excavator digging trench for new septic installation"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">New Septic Installation</span>
                <span className="gallery-sublabel">
                  Chattanooga, TN
                </span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Trenchless_Sewer_Repair.jpg/960px-Trenchless_Sewer_Repair.jpg"
                alt="Trenchless sewer repair work"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Emergency Tank Repair</span>
                <span className="gallery-sublabel">
                  Ooltewah, TN
                </span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Septage_pump_truck_Highland_Michigan.JPG/960px-Septage_pump_truck_Highland_Michigan.JPG"
                alt="Septic pump truck performing routine pumping"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Routine Pumping</span>
                <span className="gallery-sublabel">
                  Signal Mountain, TN
                </span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Laying_land_drains_in_the_Aire_valley_-_geograph.org.uk_-_1397265.jpg"
                alt="Laying drainage field lines in a trench"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">Field Line Replacement</span>
                <span className="gallery-sublabel">
                  Cleveland, TN
                </span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Home_under_construction.JPG/960px-Home_under_construction.JPG"
                alt="New home under construction for septic system install"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-label">New Build Septic System</span>
                <span className="gallery-sublabel">
                  Soddy Daisy, TN
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews" id="reviews">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What People Say</span>
            <h2>150+ Five-Star Reviews Can&apos;t Be Wrong</h2>
            <p>
              Don&apos;t just take our word for it — our customers love us
              almost as much as they love functioning plumbing.
            </p>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p>
                &ldquo;Called Poop Dudes on a Saturday morning and they were here
                by afternoon. Professional, fast, and honestly made the whole
                experience way less stressful than I expected. Highly
                recommend!&rdquo;
              </p>
              <div className="review-author">— Happy Customer via Google</div>
            </div>
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p>
                &ldquo;Best septic company in Chattanooga, hands down. The name
                is hilarious but these guys are serious professionals. They
                treated our property with respect and got the job done
                right.&rdquo;
              </p>
              <div className="review-author">— Happy Customer via Google</div>
            </div>
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p>
                &ldquo;Had an emergency on a holiday weekend and Poop Dudes came
                through. Family-owned businesses that care about their customers
                are hard to find. These guys are the real deal.&rdquo;
              </p>
              <div className="review-author">— Happy Customer via Google</div>
            </div>
          </div>
          <div className="reviews-cta">
            <img
              src="https://poopdudessepticservice.com/wp-content/uploads/2023/05/g-5-star-300x144.jpg"
              alt="Google 5 Star Reviews"
              className="google-badge"
              loading="lazy"
            />
            <a
              href="https://www.google.com/maps/place/Poop+Dudes+Septic+Service/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary reviews-google-btn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              See All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="areas" id="areas">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Where We Work</span>
            <h2>Serving the Greater Chattanooga Area</h2>
            <p>
              We cover a wide range of cities across Tennessee and Georgia. If
              it&apos;s got a septic tank, we&apos;ll be there.
            </p>
          </div>
          <div className="areas-grid">
            <div className="area-tag">Chattanooga, TN</div>
            <div className="area-tag">Cleveland, TN</div>
            <div className="area-tag">Collegedale, TN</div>
            <div className="area-tag">East Ridge, TN</div>
            <div className="area-tag">Harrison, TN</div>
            <div className="area-tag">Hixson, TN</div>
            <div className="area-tag">Ooltewah, TN</div>
            <div className="area-tag">Red Bank, TN</div>
            <div className="area-tag">Soddy Daisy, TN</div>
            <div className="area-tag">Signal Mountain, TN</div>
            <div className="area-tag">Middle Valley, TN</div>
            <div className="area-tag">Lakesite, TN</div>
            <div className="area-tag">Fort Oglethorpe, GA</div>
            <div className="area-tag">Ringgold, GA</div>
          </div>
          <p className="areas-note">
            Don&apos;t see your area? Give us a call — we might still cover you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-tag">Get In Touch</span>
              <h2>Ready to Talk Crap?</h2>
              <p>
                Whether it&apos;s an emergency or a routine pump, we&apos;re
                here for you 24 hours a day, 7 days a week. No job too big, no
                job too... well, you know.
              </p>
              <div className="contact-methods">
                <a href="tel:4234249120" className="contact-method">
                  <div className="contact-method-icon">📞</div>
                  <div>
                    <strong>Call Us Anytime</strong>
                    <span>423-424-9120</span>
                  </div>
                </a>
                <a
                  href="mailto:poopdudeslsa@gmail.com"
                  className="contact-method"
                >
                  <div className="contact-method-icon">📧</div>
                  <div>
                    <strong>Email Us</strong>
                    <span>poopdudeslsa@gmail.com</span>
                  </div>
                </a>
                <div className="contact-method">
                  <div className="contact-method-icon">🕐</div>
                  <div>
                    <strong>Hours</strong>
                    <span>24/7 — We Never Sleep</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img
                src="https://poopdudessepticservice.com/wp-content/uploads/2022/01/cropped-Poop-Dudes-Plumbing-1-399x87.png"
                alt="Poop Dudes Logo"
                className="footer-logo"
              />
              <p>
                Chattanooga&apos;s Premier Septic Service. Family-owned,
                professionally operated, and always ready to handle your crap.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.facebook.com/PoopDudesSepticService"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.google.com/maps/place/Poop+Dudes+Septic+Service/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Google Business"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">Septic Tank Pumping</a>
                </li>
                <li>
                  <a href="#services">Septic Installations</a>
                </li>
                <li>
                  <a href="#services">Septic Repairs</a>
                </li>
                <li>
                  <a href="#services">Emergency Service</a>
                </li>
                <li>
                  <a href="#services">Field Line Services</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#reviews">Reviews</a>
                </li>
                <li>
                  <a href="#areas">Service Areas</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="tel:4234249120">423-424-9120</a>
                </li>
                <li>
                  <a href="mailto:poopdudeslsa@gmail.com">
                    poopdudeslsa@gmail.com
                  </a>
                </li>
                <li>24/7 Availability</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {currentYear} Poop Dudes Septic Service. All rights
              reserved. | Proudly handling Chattanooga&apos;s business since day
              one.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
