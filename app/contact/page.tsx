import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ARAALION ENTERPRISES (U) SMC LIMITED. Located at Civic Centre, Nkrumah Road, Kampala. Call 0775 564851 or email ramathanaraali@gmail.com.",
};

const contactDetails = [
  {
    title: "Visit Us",
    description: "Civic Centre, Nkrumah Road, Kampala",
    secondary: "P.O. Box 199143, GPO Kampala",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    description: "0775 564851",
    secondary: "0702 806791",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    description: "ramathanaraali@gmail.com",
    secondary: "We respond within 24 hours",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sapphire-900 to-sapphire-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-sapphire-300 uppercase tracking-wider mb-3">
              Get in Touch
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-sapphire-200 leading-relaxed">
              We&apos;d love to hear from you. Whether you have a question about
              our services, need a quote, or want to discuss a partnership —
              reach out and we&apos;ll respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {contactDetails.map((detail) => (
              <div
                key={detail.title}
                className="rounded-2xl border border-sapphire-100 p-8 text-center hover:shadow-md transition-shadow"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-sapphire-50 text-sapphire-600">
                  {detail.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-sapphire-900">
                  {detail.title}
                </h3>
                <p className="mt-2 text-sm text-sapphire-700 font-medium">
                  {detail.description}
                </p>
                <p className="mt-1 text-xs text-sapphire-500">
                  {detail.secondary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-sapphire-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-sm border border-sapphire-100">
                <h2 className="text-2xl font-bold text-sapphire-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-sapphire-600 mb-8">
                  Fill in the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-sapphire-800 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-sapphire-200 px-4 py-3 text-sm text-sapphire-900 placeholder:text-sapphire-400 focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-sapphire-800 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-sapphire-200 px-4 py-3 text-sm text-sapphire-900 placeholder:text-sapphire-400 focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-sapphire-800 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-sapphire-200 px-4 py-3 text-sm text-sapphire-900 placeholder:text-sapphire-400 focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 focus:outline-none transition-colors"
                      placeholder="e.g. 0775 123456"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-sapphire-800 mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-sapphire-200 px-4 py-3 text-sm text-sapphire-900 focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="stationery">
                        Stationery Supply Services
                      </option>
                      <option value="scholastic">
                        Scholastic Materials Distribution
                      </option>
                      <option value="ict">ICT Services and Solutions</option>
                      <option value="branding">
                        Branding and Promotional Services
                      </option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-sapphire-800 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-sapphire-200 px-4 py-3 text-sm text-sapphire-900 placeholder:text-sapphire-400 focus:border-sapphire-500 focus:ring-2 focus:ring-sapphire-500/20 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-sapphire-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-sapphire-700 transition-colors focus:ring-2 focus:ring-sapphire-500/50 focus:outline-none"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl bg-sapphire-900 p-8 text-white">
                <h3 className="text-lg font-bold mb-4">Company Information</h3>
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-sapphire-400 text-xs uppercase tracking-wider mb-1">
                      Company Name
                    </dt>
                    <dd className="font-medium">
                      ARAALION ENTERPRISES (U) SMC LIMITED
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sapphire-400 text-xs uppercase tracking-wider mb-1">
                      Location
                    </dt>
                    <dd className="font-medium">
                      Civic Centre, Nkrumah Road, Kampala
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sapphire-400 text-xs uppercase tracking-wider mb-1">
                      Postal Address
                    </dt>
                    <dd className="font-medium">
                      P.O. Box 199143, GPO Kampala
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sapphire-400 text-xs uppercase tracking-wider mb-1">
                      Telephone
                    </dt>
                    <dd className="font-medium">
                      <a href="tel:+256775564851" className="hover:text-sapphire-200 transition-colors">
                        0775 564851
                      </a>
                      {" | "}
                      <a href="tel:+256702806791" className="hover:text-sapphire-200 transition-colors">
                        0702 806791
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sapphire-400 text-xs uppercase tracking-wider mb-1">
                      Email
                    </dt>
                    <dd className="font-medium">
                      <a
                        href="mailto:ramathanaraali@gmail.com"
                        className="hover:text-sapphire-200 transition-colors"
                      >
                        ramathanaraali@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-white p-8 border border-sapphire-100">
                <h3 className="text-lg font-bold text-sapphire-900 mb-4">
                  Business Hours
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-sapphire-600">Monday – Friday</span>
                    <span className="font-medium text-sapphire-900">
                      8:00 AM – 5:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sapphire-600">Saturday</span>
                    <span className="font-medium text-sapphire-900">
                      9:00 AM – 1:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sapphire-600">Sunday</span>
                    <span className="font-medium text-sapphire-500">
                      Closed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
