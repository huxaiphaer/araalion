"use client";

import Link from "next/link";
import { useScrollReveal } from "./hooks/useScrollReveal";

const services = [
  {
    title: "Stationery Supply",
    description:
      "High-quality printing paper, notebooks, files, folders, writing materials, and office consumables for every organization.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Scholastic Materials",
    description:
      "Textbooks, exercise books, school uniforms, and educational aids — making quality learning accessible and affordable.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "ICT Solutions",
    description:
      "Computers, laptops, printers, networking equipment, installation, maintenance, and full IT support for digital transformation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    title: "Branding & Promotions",
    description:
      "Graphic design, printing, signage, banners, embroidery, branded merchandise, and full corporate identity solutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

const stats = [
  { value: "4+", label: "Core Service Areas" },
  { value: "100+", label: "Clients Served" },
  { value: "Kampala", label: "Based in Uganda" },
  { value: "2026", label: "Profile Edition" },
];

const values = [
  "Professionalism",
  "Innovation",
  "Customer Focus",
  "Quality Assurance",
  "Reliability",
];

export default function Home() {
  const statsRef = useScrollReveal<HTMLDivElement>({ staggerChildren: true, staggerDelay: 100 });
  const servicesRef = useScrollReveal<HTMLDivElement>({ staggerChildren: true, staggerDelay: 100 });
  const aboutRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const ctaRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1549C9 0%, #082470 60%, #051852 100%)" }}
      >
        {/* Animated blob decorations */}
        <div
          className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full opacity-20 animate-blob"
          style={{ background: "radial-gradient(circle, #4772e3 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] rounded-full opacity-15 animate-blob"
          style={{ background: "radial-gradient(circle, #adc0f5 0%, transparent 70%)", animationDelay: "3s" }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v1H0zm0 39h40v1H0zM0 0v40H1V0zm39 0v40h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-44">
          <div className="max-w-3xl">
            {/* Badge */}
            <p className="animate-fade-in-down inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 uppercase tracking-wider mb-6 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Trusted Enterprise Partner in Uganda
            </p>

            <h1 className="animate-fade-in-up delay-100 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl leading-[1.08]">
              Delivering{" "}
              <span className="relative inline-block">
                <span className="text-shimmer">Excellence</span>
              </span>
              <br />
              Across Uganda
            </h1>

            <p className="animate-fade-in-up delay-200 mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">
              ARAALION ENTERPRISES (U) SMC LIMITED is a diversified and customer-focused
              enterprise committed to delivering high-quality products and services — from
              stationery and scholastic materials to ICT solutions and professional branding.
            </p>

            <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-sm font-semibold text-sapphire-500 text-center
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20"
              >
                <span className="absolute inset-0 bg-sapphire-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Explore Our Services
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact"
                className="group rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white text-center
                backdrop-blur transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:-translate-y-1"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Floating hero badge */}
          <div className="animate-fade-in-right delay-500 absolute right-8 bottom-10 hidden lg:block">
            <div className="glass rounded-2xl px-6 py-4 text-white text-center">
              <p className="text-3xl font-bold">100+</p>
              <p className="text-xs text-white/70 mt-1">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-sapphire-100" ref={statsRef}>
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="reveal text-center group">
                <p
                  className="text-3xl font-bold transition-colors duration-300 group-hover:text-sapphire-500"
                  style={{ color: "#1549C9" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-sapphire-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ───────────────────────────────────── */}
      <section className="bg-sapphire-50/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal text-center max-w-2xl mx-auto mb-16" ref={useScrollReveal<HTMLDivElement>().current as any}>
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#1549C9" }}>
              What We Do
            </p>
            <h2 className="text-3xl font-bold text-sapphire-900 sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-sapphire-600 leading-relaxed">
              We provide reliable solutions to corporate organizations, government institutions,
              schools, and individuals across Uganda.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" ref={servicesRef}>
            {services.map((service) => (
              <div
                key={service.title}
                className="reveal group bg-white rounded-2xl p-8 shadow-sm border border-sapphire-100
                hover-lift cursor-default"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl text-white
                  transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)" }}
                >
                  {service.icon}
                </div>
                {/* Coloured top accent line */}
                <div
                  className="mt-6 h-0.5 w-10 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ background: "#1549C9" }}
                />
                <h3 className="mt-4 text-lg font-semibold text-sapphire-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-sapphire-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal" ref={useScrollReveal<HTMLDivElement>().current as any}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300
              hover:gap-4 group"
              style={{ color: "#1549C9" }}
            >
              View all services
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Preview ──────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32" ref={aboutRef}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Text side */}
            <div className="reveal reveal-left">
              <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#1549C9" }}>
                About ARAALION
              </p>
              <h2 className="text-3xl font-bold text-sapphire-900 sm:text-4xl leading-tight">
                A Legacy of Faith,{" "}
                <span className="text-shimmer">Strength & Vision</span>
              </h2>
              <p className="mt-6 text-sapphire-700 leading-relaxed">
                The ARAALION name carries deep meaning — the lion at its heart embodies courage and
                leadership, surrounded by elegant Arabic calligraphy spelling &ldquo;Ramathan,&rdquo; representing
                our founder Mr. Bagaya Ramathan.
              </p>
              <p className="mt-4 text-sapphire-600 leading-relaxed">
                Our Royal Blue identity conveys wisdom and trust, while purity and transparency guide
                everything we do. We lead with integrity, innovate with wisdom, and operate with
                faith-inspired excellence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full px-4 py-1.5 text-xs font-semibold border transition-all duration-300
                    hover:text-white hover:border-transparent cursor-default"
                    style={{
                      color: "#1549C9",
                      borderColor: "#adc0f5",
                      background: "#eef2fd",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#1549C9";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#eef2fd";
                    }}
                  >
                    {value}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sapphire-500/30 group"
                style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)" }}
              >
                Learn More About Us
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Card side */}
            <div className="reveal reveal-right">
              <div
                className="rounded-3xl p-10 lg:p-12"
                style={{ background: "linear-gradient(135deg, #1549C9 0%, #082470 100%)" }}
              >
                <div className="space-y-5">
                  {[
                    {
                      title: "Our Vision",
                      body: "To be a leading and trusted provider of stationery, educational supplies, ICT solutions, and branding services in Uganda and beyond.",
                    },
                    {
                      title: "Our Mission",
                      body: "To deliver high-quality, affordable, and innovative products and services that support education, business efficiency, and brand visibility.",
                    },
                  ].map((item, i) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/15
                      transition-all duration-300 hover:bg-white/18 hover:-translate-y-1"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="h-2 w-2 rounded-full bg-white/60" />
                        <h4 className="font-semibold text-white">{item.title}</h4>
                      </div>
                      <p className="text-sm text-white/75 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: "linear-gradient(135deg, #051852 0%, #1549C9 100%)" }}
        ref={ctaRef}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 animate-float-slow"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 animate-float"
          style={{ background: "radial-gradient(circle, #adc0f5 0%, transparent 70%)" }} />

        <div className="relative mx-auto max-w-4xl px-6 text-center" ref={ctaRef}>
          <div className="reveal">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Partner with Us?
            </h2>
            <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Whether you need office supplies, educational materials, IT solutions, or professional
              branding — ARAALION ENTERPRISES is your dependable partner.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-sm font-semibold text-sapphire-500
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/25"
              >
                <span className="absolute inset-0 bg-sapphire-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Contact Us Today</span>
              </Link>
              <a
                href="tel:+256775564851"
                className="group rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white
                backdrop-blur transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:-translate-y-1"
              >
                📞 Call: 0775 564851
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
