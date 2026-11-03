import type { Metadata } from "next";
import ProductPageClient from "./ProductPageClient";

const SITE_URL = "https://www.rameezcarpets.com";

const productSeo: Record<string, { title: string; description: string }> = {
  wedding: {
    title: "Wedding Carpets & Aisle Runners",
    description:
      "Explore wedding carpets and aisle runners for venues and events. Ask Rameez Carpets about colours, sizes and supply options across the GCC.",
  },
  "events-exhibition": {
    title: "Exhibition & Event Carpets",
    description:
      "Source exhibition and event carpet flooring for trade shows, exhibitions and high-traffic venues. Contact Rameez Carpets for GCC project enquiries.",
  },
  "vip-runner": {
    title: "VIP Carpet Runners",
    description:
      "Discover VIP carpet runners for red-carpet events, arrivals and special occasions. Enquire about available colours, widths and lengths.",
  },
  "grass-carpet": {
    title: "Artificial Grass Carpet",
    description:
      "Explore artificial grass carpet for outdoor areas, events and temporary installations, with options for different project requirements.",
  },
  "vinyl-flooring": {
    title: "Commercial Vinyl Flooring",
    description:
      "Explore commercial vinyl flooring for practical interior and business environments. Contact Rameez Carpets for product and project enquiries.",
  },
  rugs: {
    title: "Rugs for Residential & Commercial Interiors",
    description:
      "Explore rugs for residential, hospitality and commercial interiors. Contact Rameez Carpets for available designs and supply options.",
  },
  "spc-flooring": {
    title: "SPC Flooring Solutions",
    description:
      "Discover stone plastic composite flooring for modern interiors, with rigid-core flooring options for residential and commercial applications.",
  },
  "tile-carpet": {
    title: "Commercial Carpet Tiles",
    description:
      "Explore modular carpet tiles for offices and commercial spaces, with flexible layouts and practical maintenance options.",
  },
  "design-carpet": {
    title: "Custom Design Carpets",
    description:
      "Explore custom design carpets for branded environments, corporate spaces and commercial projects. Discuss your design requirements with our team.",
  },
  "mosque-carpet": {
    title: "Mosque Prayer Carpets",
    description:
      "Explore mosque prayer carpets designed for prayer spaces, with traditional design options and practical durability for regular use.",
  },
  "loop-pile-carpets": {
    title: "Loop Pile Carpets",
    description:
      "Explore loop pile carpets for commercial and interior flooring projects. Contact Rameez Carpets for styles, colours and GCC supply enquiries.",
  },
  "cut-pile-carpets": {
    title: "Cut Pile Carpets",
    description:
      "Discover cut pile carpets with a soft textured surface for residential and commercial interiors. Enquire about available designs and specifications.",
  },
};

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productSeo[slug];

  if (!product) {
    return {
      title: "Carpet & Flooring Products",
      description: "Explore carpet and flooring products from Rameez Carpets.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      type: "website",
      title: `${product.title} | Rameez Carpets`,
      description: product.description,
      url: `${SITE_URL}/products/${slug}`,
      images: ["/hero-bg.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Rameez Carpets`,
      description: product.description,
      images: ["/hero-bg.jpg"],
    },
  };
}

export default function ProductPage() {
  return <ProductPageClient />;
}
