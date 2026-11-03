import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Contact Rameez Carpets | GCC Carpet & Flooring Enquiries',
  description: 'Contact Rameez Carpets in Sharjah, UAE for exhibition carpets, event carpets, commercial flooring, rugs and GCC supply enquiries. Call or WhatsApp our sales team.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: "website",
    title: 'Contact Rameez Carpets | GCC Carpet & Flooring Enquiries',
    description: 'Contact Rameez Carpets in Sharjah, UAE for exhibition carpets, event carpets, commercial flooring, rugs and GCC supply enquiries. Call or WhatsApp our sales team.',
    url: `https://www.rameezcarpets.com/contact`,
    images: ["/hero-bg.jpg"],
  },
};

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
