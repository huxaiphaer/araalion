import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ARAALION ENTERPRISES (U) SMC LIMITED — our story, vision, mission, core values, and commitment to quality in Uganda.",
};

const coreValues = [
  {
    title: "Professionalism",
    description:
      "We maintain the highest standards of conduct and service delivery in every engagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We continuously seek better ways to serve our clients through modern solutions and creative approaches.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    description:
      "Our clients are at the center of everything we do. We listen, understand, and deliver tailored solutions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description:
      "We ensure that every product we supply and every service we deliver meets stringent quality benchmarks.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "We are a dependable partner — consistent delivery, transparent operations, and long-term trust.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
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
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sapphire-900 to-sapphire-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-sapphire-300 uppercase tracking-wider mb-3">
              Company Profile — 2026 Edition
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
              About ARAALION Enterprises
            </h1>
            <p className="mt-6 text-lg text-sapphire-200 leading-relaxed">
              A diversified and customer-focused enterprise committed to
              delivering high-quality products and services in Uganda since
              inception.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <p className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-2">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-sapphire-900">
                The Meaning Behind ARAALION
              </h2>
              <div className="mt-6 space-y-4 text-sapphire-700 leading-relaxed">
                <p>
                  The ARAALION Enterprises Uganda Ltd logo in Sapphire Blue on
                  white symbolizes a legacy of faith, strength, and global
                  vision.
                </p>
                <p>
                  At its heart lies <strong>the lion</strong>, embodying courage
                  and leadership, surrounded by elegant Arabic calligraphy
                  spelling &ldquo;Ramathan&rdquo; — representing our founder,{" "}
                  <strong>Mr. Bagaya Ramathan</strong>.
                </p>
                <p>
                  The <strong>Sapphire Blue</strong> tone conveys wisdom and
                  trust, while the white background reflects purity and
                  transparency.
                </p>
                <p>
                  Together, they express ARAALION&apos;s mission to lead with
                  integrity, innovate with wisdom, and operate with
                  faith-inspired excellence on the global stage.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-sapphire-600 to-sapphire-800 p-12 text-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-4xl font-bold mb-6">
                A
              </div>
              <h3 className="text-xl font-bold mb-3">Brand Identity</h3>
              <ul className="space-y-4 text-sm text-sapphire-100">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                  <span>
                    <strong className="text-white">The Lion:</strong> Courage,
                    leadership, and unwavering strength
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                  <span>
                    <strong className="text-white">
                      Arabic Calligraphy:
                    </strong>{" "}
                    Faith-rooted heritage and the founder&apos;s legacy
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                  <span>
                    <strong className="text-white">Sapphire Blue:</strong>{" "}
                    Wisdom, trust, and professional excellence
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                  <span>
                    <strong className="text-white">White Background:</strong>{" "}
                    Purity, transparency, and integrity
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-sapphire-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-10 shadow-sm border border-sapphire-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sapphire-600 text-white mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-sapphire-900 mb-4">
                Our Vision
              </h3>
              <p className="text-sapphire-700 leading-relaxed">
                To be a leading and trusted provider of stationery, educational
                supplies, ICT solutions, and branding services in Uganda and
                beyond.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-10 shadow-sm border border-sapphire-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-white mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-sapphire-900 mb-4">
                Our Mission
              </h3>
              <p className="text-sapphire-700 leading-relaxed">
                To deliver high-quality, affordable, and innovative products and
                services that support education, business efficiency, and brand
                visibility while promoting professionalism and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-sapphire-600 uppercase tracking-wider mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl font-bold text-sapphire-900 sm:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <div
                key={value.title}
                className={`rounded-2xl border border-sapphire-100 p-8 hover:shadow-md transition-shadow ${
                  i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sapphire-50 text-sapphire-600">
                  {value.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-sapphire-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-sapphire-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="bg-sapphire-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <p className="text-sm font-semibold text-sapphire-300 uppercase tracking-wider mb-2">
                Looking Ahead
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Strategic Objectives
              </h2>
              <p className="mt-4 text-sapphire-200 leading-relaxed">
                Our strategic direction is focused on sustainable growth,
                quality delivery, and meaningful contribution to Uganda&apos;s
                educational and business landscape.
              </p>
            </div>
            <ul className="space-y-4">
              {strategicObjectives.map((obj, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-xl bg-sapphire-800/50 px-6 py-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-sapphire-100 leading-relaxed">
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-sapphire-900 sm:text-3xl">
            Want to Work With Us?
          </h2>
          <p className="mt-3 text-sapphire-600">
            We are your trusted partner in stationery, education, ICT, and
            branding solutions.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-sapphire-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-sapphire-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
