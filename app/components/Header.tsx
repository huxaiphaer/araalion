"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/96 backdrop-blur-lg shadow-lg shadow-sapphire-900/10 border-b border-sapphire-100"
          : "bg-white/85 backdrop-blur border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className="relative flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden
            transition-transform duration-300 group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, #1549C9 0%, #051852 100%)" }}
          >
            <Image
              src="/02_logo_white_transparent.png"
              alt="ARAALION Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
          <div className="hidden sm:block">
            <span className="block text-lg font-bold text-sapphire-900 leading-tight tracking-tight group-hover:text-sapphire-500 transition-colors duration-300">
              ARAALION
            </span>
            <span className="block text-[11px] font-medium text-sapphire-500 uppercase tracking-widest">
              Enterprises
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden ${
                  isActive
                    ? "text-sapphire-500"
                    : "text-sapphire-800 hover:text-sapphire-500"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-lg bg-sapphire-50 transition-transform duration-300 origin-center ${
                    isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                  }`}
                />
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-sapphire-500" />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="relative ml-3 overflow-hidden rounded-xl px-5 py-2.5 text-sm font-semibold text-white group
            transition-all duration-300 hover:shadow-lg hover:shadow-sapphire-500/35 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)" }}
          >
            <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Get a Quote</span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl hover:bg-sapphire-50 transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`block h-0.5 w-5 bg-sapphire-800 transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-sapphire-800 mt-1.5 transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-sapphire-800 mt-1.5 transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Nav — animated slide-down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      >
        <nav className="border-t border-sapphire-100 bg-white/98 backdrop-blur px-6 pb-6 pt-2">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-sapphire-50 text-sapphire-500"
                    : "text-sapphire-800 hover:bg-sapphire-50 hover:text-sapphire-500"
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
              >
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-sapphire-500" />}
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #1549C9 0%, #1140b5 100%)" }}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
