import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore ARAALION ENTERPRISES' core services: stationery supply, scholastic materials distribution, ICT solutions, and professional branding services in Uganda.",
};

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
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    accent: "sapphire",
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
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    accent: "gold",
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
      "Installation, maintenance, and IT support services",
      "Technology consulting and procurement",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
    accent: "sapphire",
  },
  {
    id: "branding",
    title: "Branding and Promotional Services",
    tagline: "Helping businesses stand out and communicate their brand",
    description:
      "We provide professional branding services to enhance corporate identity and visibility. We help businesses stand out and effectively communicate their brand.",
    items: [
      "Graphic design and visual identity",
      "Printing services (business cards, flyers, brochures)",
      "Signage, banners, and outdoor media",
      "Embroidery and branded merchandise",
      "Corporate branding solutions",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    accent: "gold",
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
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sapphire-900 to-sapphire-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-sapphire-300 uppercase tracking-wider mb-3">
              What We Offer
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-sapphire-200 leading-relaxed">
              We provide reliable solutions to corporate organizations,
              government institutions, schools, and individuals — ensuring
              quality, affordability, and efficiency in all our service areas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid gap-12 lg:grid-cols-2 items-start ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${
                    service.accent === "gold"
                      ? "bg-gold-500/10 text-gold-600"
                      : "bg-sapphire-50 text-sapphire-600"
                  }`}
                >
                  {service.icon}
                </div>
                <h2 className="mt-6 text-2xl font-bold text-sapphire-900 sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-sapphire-500">
                  {service.tagline}
                </p>
                <p className="mt-4 text-sapphire-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl bg-sapphire-50 p-8">
                  <h3 className="text-sm font-semibold text-sapphire-900 uppercase tracking-wider mb-6">
                    What we provide
                  </h3>
                  <ul className="space-y-4">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 mt-0.5 shrink-0 text-sapphire-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12.75L11.25 15 15 9.75"
                          />
                        </svg>
                        <span className="text-sapphire-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="bg-sapphire-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-sapphire-600 uppercase tracking-wider mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-bold text-sapphire-900 sm:text-4xl">
              Our Competitive Advantage
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {advantages.map((advantage, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm border border-sapphire-100"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sapphire-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-sapphire-800 leading-relaxed">
                  {advantage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="bg-sapphire-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Commitment to Quality
          </h2>
          <p className="mt-4 text-sapphire-200 leading-relaxed max-w-2xl mx-auto">
            At ARAALION ENTERPRISES (U) SMC LIMITED, we are committed to
            maintaining high standards in all our products and services. We
            continuously improve our processes to ensure customer satisfaction
            and long-term partnerships.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-sapphire-900 hover:bg-sapphire-50 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
