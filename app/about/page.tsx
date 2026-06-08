"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const coreValues = [
  {
    title: "Professionalism",
    description: "We maintain the highest standards of conduct and service delivery in every engagement.",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>),
  },
  {
    title: "Innovation",
    description: "We continuously seek better ways to serve our clients through modern solutions and creative approaches.",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>),
  },
  {
    title: "Customer Focus",
    description: "Our clients are at the center of everything we do. We listen, understand, and deliver tailored solutions.",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>),
  },
  {
    title: "Quality Assurance",
    description: "We ensure that every product we supply and every service we deliver meets stringent quality benchmarks.",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>),
  },
  {
    title: "Reliability",
    description: "We are a dependable partner — consistent delivery, transparent operations, and long-term trust.",
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>),
  },
];

const strategicObjectives = [
  "Supply high-quality and reliable stationery products",
  "Ensure accessibility of scholastic materials across Uganda",
  "Provide innovative ICT solutions for education and business",
  "Deliver professional branding services that enhance visibility",
  "Build long-term partnerships through quality and trust",
  "Promote local content and support Ugandan enterprises",
  "Contribute to education and digital transformation in Uganda",
];

export default function AboutPage() {
  /* ── All hooks at top level ── */
  const storyRef   = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const vmRef      = useScrollReveal<HTMLDivElement>({ staggerChildren: true, staggerDelay: 120 });
  const valuesRef  = useScrollReveal<HTMLDivElement>({ staggerChildren: true, staggerDelay: 80 });
  const objRef     = useScrollReveal<HTMLDivElement>({ staggerChildren: true, staggerDelay: 70 });
  const ctaRef     = useScrollReveal<HTMLDivElement>();

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
            Company Profile — 2026 Edition
          </p>
          <h1 className="animate-fade-in-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            About{" "}
            <span className="text-shimmer">ARAALION</span>{" "}
            Enterprises
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
            A diversified and customer-focused enterprise committed to delivering high-quality
            products and services in Uganda since inception.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 50L60 42C120 34 240 18 360 13C480 8 600 16 720 21C840 26 960 26 1080 21C1200 16 1320 8 1380 4L1440 0V50H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ══ Brand Story ════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 relative overflow-hidden" ref={storyRef}>
        {/* Soft background watermark */}
        <div className="absolute -right-12 top-12 w-[350px] h-[350px] opacity-[0.04] pointer-events-none">
          <Image
            src="/05_logo_watermark_light.png"
            alt="ARAALION Watermark"
            fill
            className="object-contain"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="reveal reveal-left">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#1549C9" }}>
                Our Story
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-sapphire-900 sm:text-4xl">
                The Meaning Behind ARAALION
              </h2>
              <div className="mt-5 space-y-4 text-sm sm:text-base text-sapphire-700 leading-relaxed">
                <p>The ARAALION Enterprises Uganda Ltd logo in Royal Blue on white symbolizes a legacy of faith, strength, and global vision.</p>
                <p>At its heart lies <strong>the lion</strong>, embodying courage and leadership, surrounded by elegant Arabic calligraphy spelling &ldquo;Ramathan&rdquo; — representing our founder, <strong>Mr. Bagaya Ramathan</strong>.</p>
                <p>The <strong>Royal Blue</strong> tone conveys wisdom and trust, while the white background reflects purity and transparency.</p>
              </div>
            </div>

            <div className="reveal reveal-right">
              <div className="rounded-3xl p-7 sm:p-10 text-white relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1549C9 0%, #082470 100%)" }}>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 pointer-events-none"
                  style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 mb-5
                  transition-transform duration-500 hover:scale-110 overflow-hidden">
                  <Image
                    src="/02_logo_white_transparent.png"
                    alt="ARAALION Logo"
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-4">Brand Identity</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  {[
                    { label: "The Lion", desc: "Courage, leadership, and unwavering strength" },
                    { label: "Arabic Calligraphy", desc: "Faith-rooted heritage and the founder's legacy" },
                    { label: "Royal Blue", desc: "Wisdom, trust, and professional excellence" },
                    { label: "White Background", desc: "Purity, transparency, and integrity" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                      <span><strong className="text-white">{item.label}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Executive Leadership ══════════════════════════════ */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-sapphire-100 flex flex-col md:flex-row items-stretch bg-sapphire-50/15">
            <div className="relative w-full md:w-2/5 min-h-[300px]">
              <Image
                src="/04_welcome_businesswoman.jpeg"
                alt="Executive Leadership"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="p-8 sm:p-12 md:w-3/5 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-sapphire-500 block mb-2">
                Executive Leadership
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-sapphire-900 mb-4">
                Message From Leadership
              </h3>
              <p className="text-sm sm:text-base text-sapphire-700 leading-relaxed mb-6 italic">
                &ldquo;Our commitment is to empower enterprises, educational institutions, and individuals across Uganda by providing top-tier solutions that build efficiency and foster growth. Integrity and reliability are the cornerstones of ARAALION.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-sapphire-500 flex items-center justify-center font-bold text-white text-sm">
                  BR
                </div>
                <div>
                  <h4 className="font-bold text-sapphire-900 text-sm">Mr. Bagaya Ramathan</h4>
                  <p className="text-xs text-sapphire-500">Founder & Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Vision & Mission ═══════════════════════════════════ */}
      <section className="py-16 sm:py-24" style={{ background: "#eef2fd" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#1549C9" }}>
              Our Direction
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-sapphire-900 sm:text-4xl">Vision & Mission</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2" ref={vmRef}>
            {[
              {
                title: "Our Vision",
                body: "To be a leading and trusted provider of stationery, educational supplies, ICT solutions, and branding services in Uganda and beyond.",
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
              },
              {
                title: "Our Mission",
                body: "To deliver high-quality, affordable, and innovative products and services that support education, business efficiency, and brand visibility while promoting professionalism and customer satisfaction.",
                icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="reveal rounded-2xl bg-white p-7 sm:p-10 shadow-sm border border-sapphire-100 hover-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl text-white mb-5"
                  style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)" }}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-sapphire-900 mb-3">{card.title}</h3>
                <p className="text-sm sm:text-base text-sapphire-700 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Core Values ════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#1549C9" }}>
              What Drives Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-sapphire-900 sm:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" ref={valuesRef}>
            {coreValues.map((value) => (
              <div key={value.title} className="reveal group rounded-2xl border border-sapphire-100 p-6 sm:p-7 hover-lift cursor-default">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white
                  transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)" }}>
                  {value.icon}
                </div>
                <div className="mt-4 h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-14"
                  style={{ background: "#1549C9" }} />
                <h3 className="mt-3 text-base font-semibold text-sapphire-900">{value.title}</h3>
                <p className="mt-2 text-sm text-sapphire-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Strategic Objectives ═══════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-24"
        style={{ background: "linear-gradient(135deg, #051852 0%, #1549C9 100%)" }}>
        {/* Corner logo watermark */}
        <div className="absolute left-[-5%] top-[-5%] w-[300px] h-[300px] opacity-[0.06] pointer-events-none mix-blend-overlay">
          <Image
            src="/12_logo_watermark_corner.png"
            alt="ARAALION Corner Watermark"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 animate-float-slow pointer-events-none"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6" ref={objRef}>
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="reveal reveal-left">
              <p className="text-xs sm:text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                Looking Ahead
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white sm:text-4xl">Strategic Objectives</h2>
              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                Our strategic direction is focused on sustainable growth, quality delivery, and
                meaningful contribution to Uganda&apos;s educational and business landscape.
              </p>
            </div>
            <ul className="space-y-3">
              {strategicObjectives.map((obj, i) => (
                <li key={i} className="reveal flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3
                  border border-white/10 transition-all duration-300 hover:bg-white/18 backdrop-blur">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-sapphire-900 bg-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-white/85 leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20" ref={ctaRef}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="reveal">
            <h2 className="text-2xl sm:text-3xl font-bold text-sapphire-900">Want to Work With Us?</h2>
            <p className="mt-3 text-sm sm:text-base text-sapphire-600">
              We are your trusted partner in stationery, education, ICT, and branding solutions.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white
              transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sapphire-500/30 group"
              style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)" }}
            >
              Contact Us
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
