
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const businessStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.rameezcarpets.com/#localbusiness",
      name: "Rameez Carpets",
      url: "https://www.rameezcarpets.com/",
      image: "https://www.rameezcarpets.com/hero-bg.jpg",
      logo: "https://www.rameezcarpets.com/logo.png",
      description:
        "Rameez Carpets is a carpet and flooring supplier based in Al Sajaa, Sharjah, serving customers and projects across the GCC.",
      telephone: "+971563775899",
      email: "info@rameezcarpets.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Near Tasheel Roundabout, Emirates Industrial City",
        addressLocality: "Al Sajaa",
        addressRegion: "Sharjah",
        addressCountry: "AE",
      },
      areaServed: [
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Kuwait" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Bahrain" },
        { "@type": "Country", name: "Oman" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971563775899",
          contactType: "business telephone",
          areaServed: ["AE", "SA", "KW", "QA", "BH", "OM"],
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+971521928821",
          contactType: "sales WhatsApp",
          areaServed: ["AE", "SA", "KW", "QA", "BH", "OM"],
          availableLanguage: ["English"],
        },
      ],
      knowsAbout: [
        "Exhibition carpets",
        "Event carpets",
        "Commercial carpets",
        "Loop pile carpets",
        "Cut pile carpets",
        "Carpet tiles",
        "Vinyl flooring",
        "SPC flooring",
        "Artificial grass carpets",
        "Rugs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rameezcarpets.com/#website",
      url: "https://www.rameezcarpets.com/",
      name: "Rameez Carpets",
      publisher: {
        "@id": "https://www.rameezcarpets.com/#localbusiness",
      },
      inLanguage: "en",
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rameezcarpets.com"),

  title: {
    default:
      "Carpet Supplier in GCC | Exhibition, Event & Commercial Carpets | Rameez Carpets",
    template: "%s | Rameez Carpets",
  },

  description:
    "Rameez Carpets is a Sharjah-based carpet and flooring supplier serving the GCC. Explore exhibition carpets, event carpets, commercial flooring, rugs and more.",

  applicationName: "Rameez Carpets",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Rameez Carpets",
    title:
      "Rameez Carpets | Carpet & Flooring Supplier Serving the GCC",
    description:
      "Source exhibition, event and commercial carpets, rugs and flooring solutions from Rameez Carpets in Sharjah, UAE, serving GCC markets.",
    url: "https://www.rameezcarpets.com/",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Rameez Carpets - Carpet and Flooring Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rameez Carpets | Carpet & Flooring Supplier",
    description:
      "Exhibition, event and commercial carpets, rugs and flooring solutions serving the GCC from Sharjah, UAE.",
    images: ["/hero-bg.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  manifest: "/manifest.webmanifest",
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
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-KRBWSTX9" />

        {/* Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {/* Global Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
