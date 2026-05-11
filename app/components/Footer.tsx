import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sapphire-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sapphire-700 font-bold text-lg">
                A
              </span>
              <div>
                <span className="block text-lg font-bold leading-tight">
                  ARAALION
                </span>
                <span className="block text-[11px] font-medium text-sapphire-300 uppercase tracking-widest">
                  Enterprises (U) SMC Ltd
                </span>
              </div>
            </div>
            <p className="text-sm text-sapphire-200 leading-relaxed max-w-xs">
              A diversified and customer-focused enterprise committed to
              delivering high-quality products and services in Uganda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sapphire-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sapphire-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sapphire-300 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Stationery Supply",
                "Scholastic Materials",
                "ICT Solutions",
                "Branding Services",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-sapphire-200 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sapphire-300 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-sapphire-200">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-sapphire-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Civic Centre, Nkrumah Road
                  <br />
                  P.O. Box 199143, GPO Kampala
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-sapphire-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>
                  0775 564851
                  <br />
                  0702 806791
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-sapphire-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:ramathanaraali@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ramathanaraali@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-sapphire-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sapphire-400">
            &copy; {new Date().getFullYear()} ARAALION ENTERPRISES (U) SMC
            LIMITED. All rights reserved.
          </p>
          <p className="text-xs text-sapphire-500">
            Leading with integrity. Innovating with wisdom.
          </p>
        </div>
      </div>
    </footer>
  );
}
