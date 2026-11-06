import type { Metadata } from "next";
import CarpetTapePageClient from "./CarpetTapePageClient";

const SITE_URL = "https://www.rameezcarpets.com";
const PAGE_URL = `${SITE_URL}/products/carpet-tape-5cm-25m`;

const productName = "Rameez Carpets Double-Sided Carpet Tape – 5 cm x 25 m";

const productDescription =
  "Strong double-sided carpet tape for exhibition carpet, 5 cm x 25 m, mesh reinforced and residue-free. Bulk supply in Dubai, UAE, Oman, Qatar and Saudi Arabia.";

export const metadata: Metadata = {
  title:
    "Double-Sided Carpet Tape 5cm x 25m | Exhibition Carpet Tape | Rameez Carpets",
  description: productDescription,
  alternates: {
    canonical: "/products/carpet-tape-5cm-25m",
  },
  openGraph: {
    title:
      "Double-Sided Carpet Tape 5cm x 25m | Exhibition Carpet Tape | Rameez Carpets",
    description: productDescription,
    url: PAGE_URL,
    siteName: "Rameez Carpets",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/products/carpet-tape/01_Carpet_Tape_Main.jpg`,
        width: 2000,
        height: 2000,
        alt: "Rameez Carpets double-sided carpet tape 5cm x 25m roll",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Double-Sided Carpet Tape 5cm x 25m | Exhibition Carpet Tape | Rameez Carpets",
    description: productDescription,
    images: [
      `${SITE_URL}/images/products/carpet-tape/01_Carpet_Tape_Main.jpg`,
    ],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: productName,
  description:
    "Strong double-sided carpet tape made for exhibition carpet rolls. It holds the carpet firmly through the whole event and peels off clean afterwards with no sticky marks. Each roll is 5 cm wide and 25 metres long.",
  image: [
    `${SITE_URL}/images/products/carpet-tape/01_Carpet_Tape_Main.jpg`,
    `${SITE_URL}/images/products/carpet-tape/02_Carpet_Tape_Size_5cm_x_25m.jpg`,
    `${SITE_URL}/images/products/carpet-tape/03_Carpet_Tape_Features.jpg`,
  ],
  brand: {
    "@type": "Brand",
    name: "Rameez Carpets",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Rameez Carpets",
    url: SITE_URL,
  },
  category: "Exhibition Carpet Accessories",
  material: "Fibre mesh reinforced adhesive",
  width: {
    "@type": "QuantitativeValue",
    value: 5,
    unitCode: "CMT",
  },
};

export default function CarpetTapePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <CarpetTapePageClient />
    </>
  );
}