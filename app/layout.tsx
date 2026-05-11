import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "ARAALION ENTERPRISES (U) SMC LIMITED | Stationery, ICT & Branding Services in Uganda",
    template: "%s | ARAALION ENTERPRISES",
  },
  description:
    "ARAALION ENTERPRISES is a diversified enterprise in Kampala, Uganda delivering high-quality stationery supplies, scholastic materials, ICT solutions, and professional branding services to organizations, schools, and businesses.",
  keywords: [
    "ARAALION",
    "stationery Uganda",
    "ICT solutions Kampala",
    "scholastic materials",
    "branding services Uganda",
    "office supplies Kampala",
  ],
  openGraph: {
    title: "ARAALION ENTERPRISES (U) SMC LIMITED",
    description:
      "High-quality stationery, scholastic materials, ICT solutions, and branding services in Uganda.",
    locale: "en_UG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
