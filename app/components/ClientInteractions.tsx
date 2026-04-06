"use client";

import { useEffect, useCallback, useState } from "react";

export default function ClientInteractions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showEmergencyBar, setShowEmergencyBar] = useState(false);

  const handleScroll = useCallback(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }

    // Back to top visibility
    setShowBackToTop(window.scrollY > 600);

    // Emergency bar - show after scrolling past hero
    setShowEmergencyBar(window.scrollY > window.innerHeight);

    // Parallax effect on hero background
    const heroBg = document.querySelector(".hero-bg") as HTMLElement;
    if (heroBg) {
      heroBg.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Mobile nav toggle
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    const toggleNav = () => {
      navLinks?.classList.toggle("active");
      navToggle?.classList.toggle("active");
    };

    const closeNav = () => {
      navLinks?.classList.remove("active");
      navToggle?.classList.remove("active");
    };

    navToggle?.addEventListener("click", toggleNav);

    // Mobile dropdown toggle
    const dropdownTriggers = document.querySelectorAll(".nav-dropdown-trigger");
    dropdownTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
          e.preventDefault();
          const dropdown = (trigger as HTMLElement).closest(".nav-dropdown");
          dropdown?.classList.toggle("open");
        }
      });
    });

    // Close nav on link click (but not dropdown trigger on mobile)
    navLinks?.querySelectorAll("a").forEach((link) => {
      if (!link.classList.contains("nav-dropdown-trigger")) {
        link.addEventListener("click", closeNav);
      }
    });
    // Also close nav when clicking dropdown menu links
    document.querySelectorAll(".nav-dropdown-menu a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });

    // Intersection Observer for animations with staggered delays
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          // Find siblings for stagger
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(
              parent.querySelectorAll(
                ".service-card, .review-card, .area-tag, .step-card"
              )
            );
            const index = siblings.indexOf(el);
            if (index >= 0) {
              el.style.transitionDelay = `${index * 0.1}s`;
            }
          }

          el.classList.add("visible");
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(
        ".service-card, .review-card, .stat, .area-tag, .contact-method, .step-card, .gallery-item"
      )
      .forEach((el) => {
        observer.observe(el);
      });

    // Animated number counters
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = el.getAttribute("data-count");
            if (!target) return;

            const isNumber = /^\d+$/.test(target);
            if (isNumber) {
              const end = parseInt(target);
              const duration = 2000;
              const startTime = performance.now();

              const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * end);
                el.textContent = current + "+";

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              requestAnimationFrame(animate);
            }
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("[data-count]").forEach((el) => {
      counterObserver.observe(el);
    });

    // Page load animation
    document.body.classList.add("loaded");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      navToggle?.removeEventListener("click", toggleNav);
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, [handleScroll]);

  return (
    <>
      {/* Emergency sticky bar */}
      <div className={`emergency-bar ${showEmergencyBar ? "visible" : ""}`}>
        <div className="emergency-pulse"></div>
        <span>Emergency? </span>
        <a href="tel:4234249120">Call Now: 423-424-9120</a>
      </div>

      {/* Mobile floating CTA */}
      <div className="mobile-cta">
        <a href="tel:4234249120" className="mobile-cta-btn">
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
          Call Now — 423-424-9120
        </a>
      </div>

      {/* Back to top button */}
      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="17 11 12 6 7 11"></polyline>
          <line x1="12" y1="6" x2="12" y2="18"></line>
        </svg>
      </button>
    </>
  );
}
