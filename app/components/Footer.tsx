import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg, #051852 0%, #1549C9 100%)" }}
    >
      {/* Decorative circle */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #adc0f5 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden
                transition-transform duration-300 hover:scale-110"
                style={{ background: "linear-gradient(135deg, #1549C9 0%, #051852 100%)" }}
              >
                <Image
src="/logo-white.png"
                  alt="ARAALION Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </span>
              <div>
                <span className="block text-lg font-bold leading-tight">ARAALION</span>
                <span className="block text-[11px] font-medium text-white/60 uppercase tracking-widest">
                  Enterprises (U) SMC Ltd
                </span>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed max-w-xs">
              A diversified and customer-focused enterprise committed to delivering high-quality
              products and services in Uganda.
            </p>
            {/* Social / contact strip */}
            <div className="mt-5 flex gap-3">
              <a
                href="tel:+256775564851"
                className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium
                text-white/80 transition-all duration-200 hover:bg-white/20 hover:text-white"
              >
                📞 Call Us
              </a>
              <a
                href="mailto:sales@araalion.com"
                className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium
                text-white/80 transition-all duration-200 hover:bg-white/20 hover:text-white"
              >
                ✉ Email
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-5">
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
                    className="group flex items-center gap-2 text-sm text-white/65 transition-all duration-200 hover:text-white"
                  >
                    <span className="h-px w-3 bg-white/30 transition-all duration-300 group-hover:w-5 group-hover:bg-white" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-5">
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
                    className="group flex items-center gap-2 text-sm text-white/65 transition-all duration-200 hover:text-white"
                  >
                    <span className="h-px w-3 bg-white/30 transition-all duration-300 group-hover:w-5 group-hover:bg-white" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-base">📍</span>
                <span>
                  Civic Centre, Nkrumah Road
                  <br />
                  P.O. Box 199143, GPO Kampala
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-base">📞</span>
                <span>
                  0775 564851
                  <br />
                  0702 806791
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-base">✉</span>
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:sales@araalion.com"
                    className="hover:text-white transition-colors duration-200 break-all"
                  >
                    sales@araalion.com
                  </a>
                  <a
                    href="mailto:bramathan@araalion.com"
                    className="hover:text-white/80 text-white/60 transition-colors duration-200 text-xs break-all"
                  >
                    CEO: bramathan@araalion.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} ARAALION ENTERPRISES (U) SMC LIMITED. All rights reserved.
          </p>
          <p className="text-xs text-white/35 italic">
            Leading with integrity. Innovating with wisdom.
          </p>
        </div>
      </div>
    </footer>
  );
}
