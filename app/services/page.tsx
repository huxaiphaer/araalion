"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    id: "stationery",
    title: "Stationery Supply Services",
    tagline: "Equipping offices and organizations with premium supplies",
    description:
      "We supply a wide range of high-quality stationery items for offices, schools, and organizations. We ensure consistency in quality and timely delivery to meet client needs efficiently.",
    items: [
      "Printing paper and notebooks",
      "Files, folders, and office consumables",
      "Writing materials and administrative tools",
      "Bulk and custom orders for institutions",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    id: "scholastic",
    title: "Scholastic Materials Distribution",
    tagline: "Making quality education accessible across Uganda",
    description:
      "We provide essential learning materials to schools and institutions across Uganda. Our goal is to enhance accessibility and affordability of learning resources for all learners.",
    items: [
      "Textbooks for all levels",
      "Exercise books and notebooks",
      "School uniforms",
      "Educational aids and learning tools",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: "ict",
    title: "ICT Services and Solutions",
    tagline: "Powering digital transformation for businesses and schools",
    description:
      "We offer innovative and reliable ICT solutions that support digital transformation. We help organizations and schools improve efficiency through modern technology.",
    items: [
      "Supply of computers, laptops, and printers",
      "Networking equipment and accessories",
      "Installation, maintenance, and IT support",
      "Technology consulting and procurement",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    id: "branding",
    title: "Branding and Promotional Services",
    tagline: "Helping businesses stand out and communicate their brand",
    description:
      "We provide professional branding services to enhance corporate identity and visibility. We help businesses stand out and effectively communicate their brand.",
    items: [
      "Graphic design and visual identity",
      "Printing services (cards, flyers, brochures)",
      "Signage, banners, and outdoor media",
      "Embroidery and branded merchandise",
      "Corporate branding solutions",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

const advantages = [
  "Specialized focus on core service areas",
  "Commitment to quality and affordability",
  "Reliable supply and delivery systems",
  "Customer-centered approach",
  "Strong support for education and business growth",
];

export default function ServicesPage() {
  /* ── All hooks at top level ── */
  const servicesRef    = useScrollReveal<HTMLDivElement>({ threshold: 0.06 });
  const advantagesRef  = useScrollReveal<HTMLDivElement>({ staggerChildren: true, staggerDelay: 90 });
  const ctaRef         = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* ══ Hero ══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1549C9 0%, #082470 60%, #051852 100%)" }}
      >
        <div className="absolute top-[-60px] right-[-60px] w-64 h-64 sm:w-80 sm:h-80 rounded-full opacity-15 animate-blob pointer-events-none"
          style={{ background: "radial-gradient(circle, #4772e3 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v1H0zm0 39h40v1H0zM0 0v40H1V0zm39 0v40h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="animate-fade-in-down inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-white/90 uppercase tracking-wider mb-5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            What We Offer
          </p>
          <h1 className="animate-fade-in-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Our <span className="text-shimmer">Services</span>
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
            Reliable solutions for corporate organizations, government institutions, schools, and
            individuals — quality, affordability, and efficiency in every engagement.
          </p>

          {/* Quick jump pills */}
          <div className="animate-fade-in-up delay-300 mt-7 flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white
                backdrop-blur transition-all duration-200 hover:bg-white/25 hover:border-white/50"
              >
                {s.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 50L60 42C120 34 240 18 360 13C480 8 600 16 720 21C840 26 960 26 1080 21C1200 16 1320 8 1380 4L1440 0V50H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ══ Services Detail ════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-16 sm:space-y-24" ref={servicesRef}>
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`reveal grid gap-8 sm:gap-12 lg:grid-cols-2 items-start ${
                i % 2 === 1 ? "reveal-right" : "reveal-left"
              }`}
            >
              {/* Text side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white
                  transition-transform duration-500 hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)" }}
                >
                  {service.icon}
                </div>
                <div className="mt-4 h-1 w-10 rounded-full"
                  style={{ background: "linear-gradient(90deg, #1549C9, #4772e3)" }} />
                <h2 className="mt-3 text-xl sm:text-2xl font-bold text-sapphire-900 sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm font-medium text-sapphire-500">{service.tagline}</p>
                <p className="mt-3 text-sm sm:text-base text-sapphire-700 leading-relaxed">{service.description}</p>
              </div>

              {/* Items side */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl p-6 sm:p-8 border border-sapphire-100" style={{ background: "#eef2fd" }}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "#1549C9" }}>
                    What we provide
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 group">
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5
                          transition-transform duration-200 group-hover:scale-110"
                          style={{ background: "#1549C9" }}
                        >
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm text-sapphire-700 group-hover:text-sapphire-900 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ Competitive Advantage ══════════════════════════════ */}
      <section className="py-16 sm:py-24" style={{ background: "#eef2fd" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#1549C9" }}>
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-sapphire-900 sm:text-4xl">
              Our Competitive Advantage
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto" ref={advantagesRef}>
            {advantages.map((advantage, i) => (
              <div key={i} className="reveal flex items-start gap-4 rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-sapphire-100 hover-lift">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)" }}
                >
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-sapphire-800 leading-relaxed">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Quality CTA ════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #051852 0%, #1549C9 100%)" }}
        ref={ctaRef}
      >
        <div className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-10 animate-float pointer-events-none"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="reveal">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Commitment to Quality</h2>
            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl mx-auto">
              At ARAALION ENTERPRISES (U) SMC LIMITED, we are committed to maintaining high standards
              in all our products and services. We continuously improve to ensure customer satisfaction
              and long-term partnerships.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-sapphire-500
              transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/25 group"
            >
              Request a Quote
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
