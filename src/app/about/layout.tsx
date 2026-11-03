import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'About Rameez Carpets | Carpet Supplier Serving the GCC',
  description: 'Learn about Rameez Carpets, a Sharjah-based carpet and flooring supplier serving businesses, event organizers and projects across the GCC.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: "website",
    title: 'About Rameez Carpets | Carpet Supplier Serving the GCC',
    description: 'Learn about Rameez Carpets, a Sharjah-based carpet and flooring supplier serving businesses, event organizers and projects across the GCC.',
    url: `https://www.rameezcarpets.com/about`,
    images: ["/hero-bg.jpg"],
  },
};

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
