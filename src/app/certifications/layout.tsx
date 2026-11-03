import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Carpet Certifications & Quality Information | Rameez Carpets',
  description: 'View certification and quality information for carpet and flooring products supplied by Rameez Carpets. Contact our team for product documentation.',
  alternates: {
    canonical: '/certifications',
  },
  openGraph: {
    type: "website",
    title: 'Carpet Certifications & Quality Information | Rameez Carpets',
    description: 'View certification and quality information for carpet and flooring products supplied by Rameez Carpets. Contact our team for product documentation.',
    url: `https://www.rameezcarpets.com/certifications`,
    images: ["/hero-bg.jpg"],
  },
};

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
