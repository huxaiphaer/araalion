"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const contactDetails = [
  {
    title: "Visit Us",
    description: "Shop 6, Shoal House, Bombo Road",
    secondary: "Nakasero III, Central Division, Kampala",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    description: "+256 775 564851",
    secondary: "+256 702 806791",
    href: "tel:+256775564851",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    description: "sales@araalion.com",
    secondary: "We respond within 24 hours",
    href: "mailto:sales@araalion.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const companyInfo = [
  { label: "Company Name", value: "ARAALION ENTERPRISES (U) SMC LIMITED" },
  { label: "Location", value: "Shop 6, Shoal House, Bombo Road, Nakasero III, Central Division, Kampala" },
  { label: "Postal Address", value: "P.O. Box 199143, GPO Kampala" },
  { label: "Telephone", value: "+256 775 564851 | +256 702 806791" },
  { label: "General Email", value: "sales@araalion.com" },
  { label: "CEO Email", value: "bramathan@araalion.com" },
];

const businessHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 5:00 PM", open: true },
  { day: "Saturday", hours: "9:00 AM – 1:00 PM", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

export default function ContactPage() {
  /* ── All hooks at top level ── */
  const cardsRef = useScrollReveal<HTMLDivElement>({ staggerChildren: true, staggerDelay: 100 });
  const formRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.06 });

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
            Get in Touch
          </p>
          <h1 className="animate-fade-in-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Contact <span className="text-shimmer">Us</span>
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
            We&apos;d love to hear from you. Whether you have a question about our services, need a
            quote, or want to discuss a partnership — reach out and we&apos;ll respond promptly.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 50L60 42C120 34 240 18 360 13C480 8 600 16 720 21C840 26 960 26 1080 21C1200 16 1320 8 1380 4L1440 0V50H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ══ Contact Cards ══════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3" ref={cardsRef}>
            {contactDetails.map((detail) => {
              const cardClass =
                "reveal group rounded-2xl border border-sapphire-100 p-6 sm:p-8 text-center hover-lift transition-all";
              const inner = (
                <>
                  <div
                    className="mx-auto flex h-13 w-13 items-center justify-center rounded-xl text-white
                    transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)", width: "52px", height: "52px" }}
                  >
                    {detail.icon}
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-semibold text-sapphire-900">{detail.title}</h3>
                  <p className="mt-2 text-sm font-medium text-sapphire-700">{detail.description}</p>
                  <p className="mt-1 text-xs text-sapphire-500">{detail.secondary}</p>
                </>
              );

              return detail.href ? (
                <a key={detail.title} href={detail.href} className={cardClass}>{inner}</a>
              ) : (
                <div key={detail.title} className={cardClass}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ Form + Sidebar ═════════════════════════════════════ */}
      <section className="py-12 sm:py-20" style={{ background: "#eef2fd" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6" ref={formRef}>
          <div className="grid gap-8 lg:grid-cols-5">

            {/* Form */}
            <div className="lg:col-span-3 reveal reveal-left">
              <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-sapphire-100">
                <h2 className="text-xl sm:text-2xl font-bold text-sapphire-900 mb-1">Send Us a Message</h2>
                <p className="text-sm text-sapphire-500 mb-7">
                  Fill in the form and we&apos;ll get back to you as soon as possible.
                </p>
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-sapphire-800 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text" id="name" name="name" required placeholder="Your full name"
                        className="w-full rounded-xl border border-sapphire-200 px-4 py-3 text-sm text-sapphire-900
                        placeholder:text-sapphire-400 outline-none transition-all duration-200
                        focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 hover:border-sapphire-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-sapphire-800 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email" id="email" name="email" required placeholder="your@email.com"
                        className="w-full rounded-xl border border-sapphire-200 px-4 py-3 text-sm text-sapphire-900
                        placeholder:text-sapphire-400 outline-none transition-all duration-200
                        focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 hover:border-sapphire-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-sapphire-800 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel" id="phone" name="phone" placeholder="e.g. +256 775 123456"
                      className="w-full rounded-xl border border-sapphire-200 px-4 py-3 text-sm text-sapphire-900
                      placeholder:text-sapphire-400 outline-none transition-all duration-200
                      focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 hover:border-sapphire-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-sapphire-800 mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      id="service" name="service"
                      className="w-full rounded-xl border border-sapphire-200 px-4 py-3 text-sm text-sapphire-900 bg-white
                      outline-none transition-all duration-200
                      focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 hover:border-sapphire-300"
                    >
                      <option value="">Select a service</option>
                      <option value="stationery">Stationery Supply Services</option>
                      <option value="scholastic">Scholastic Materials Distribution</option>
                      <option value="ict">ICT Services and Solutions</option>
                      <option value="branding">Branding and Promotional Services</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-sapphire-800 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message" name="message" rows={5} required
                      placeholder="Tell us about your needs..."
                      className="w-full rounded-xl border border-sapphire-200 px-4 py-3 text-sm text-sapphire-900
                      placeholder:text-sapphire-400 outline-none transition-all duration-200
                      focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 hover:border-sapphire-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold text-white
                    transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sapphire-500/30"
                    style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)" }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5 reveal reveal-right">
               {/* Company info card */}
              <div className="rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1549C9 0%, #051852 100%)" }}>
                {/* Corner logo watermark */}
                <div className="absolute right-[-8%] bottom-[-8%] w-[160px] h-[160px] opacity-[0.06] pointer-events-none mix-blend-overlay">
                  <Image
                    src="/12_logo_watermark_corner.png"
                    alt="ARAALION Corner Watermark"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-0 right-0 w-36 h-36 rounded-full opacity-10 pointer-events-none"
                  style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />
                <h3 className="text-base font-bold mb-5 relative z-10">Company Information</h3>
                <dl className="space-y-3.5 text-sm relative">
                  {companyInfo.map((item) => (
                    <div key={item.label} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <dt className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{item.label}</dt>
                      <dd className="font-medium text-white/90 text-sm break-words">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Business hours */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 border border-sapphire-100 shadow-sm">
                <h3 className="text-base font-bold text-sapphire-900 mb-4">Business Hours</h3>
                <ul className="space-y-2 text-sm">
                  {businessHours.map((row) => (
                    <li key={row.day} className="flex justify-between items-center py-2 border-b border-sapphire-50 last:border-0">
                      <span className="text-sapphire-600 text-xs sm:text-sm">{row.day}</span>
                      <span
                        className={`font-semibold text-xs px-2.5 py-1 rounded-full ${
                          row.open ? "text-sapphire-500 bg-sapphire-50" : "text-sapphire-400 bg-sapphire-50/50"
                        }`}
                      >
                        {row.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
