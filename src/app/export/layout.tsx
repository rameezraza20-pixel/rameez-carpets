import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Carpet & Flooring Export Supplier for the GCC',
  description: "Explore Rameez Carpets' carpet and flooring supply services for GCC markets, including exhibition, event and commercial flooring enquiries.",
  alternates: {
    canonical: '/export',
  },
  openGraph: {
    type: "website",
    title: 'Carpet & Flooring Export Supplier for the GCC',
    description: "Explore Rameez Carpets' carpet and flooring supply services for GCC markets, including exhibition, event and commercial flooring enquiries.",
    url: `https://www.rameezcarpets.com/export`,
    images: ["/hero-bg.jpg"],
  },
};

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
