import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Carpet Supplier in GCC | Exhibition & Event Carpets",
  description:
    "Rameez Carpets supplies exhibition carpets, event carpets, commercial flooring, rugs and carpet solutions from Sharjah, UAE, serving GCC markets.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Carpet Supplier in GCC | Rameez Carpets",
    description:
      "Exhibition, event and commercial carpets supplied from Sharjah, UAE to customers and projects across the GCC.",
    url: "https://www.rameezcarpets.com/",
    type: "website",
    images: ["/hero-bg.jpg"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
