
"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  CheckCircle,
  ShieldCheck,
  Truck,
  Users,
  X,
  ImageIcon,
} from "lucide-react";

const productDatabase: any = {
  wedding: {
    category: "Wedding",
    title: "Luxury Wedding Carpets",
    description:
      "Create an unforgettable entrance with our premium wedding aisle runners. Custom-fit for any venue size.",
    image: "/wedding-hero.webp",
    features: [
      "Luxury Velvet Finish",
      "Anti-Slip Backing",
      "Customizable Colors",
      "Fast Setup",
    ],
    gallery: ["/w1.webp", "/w2.webp", "/w3.webp", "/w4.webp"],
  },
  "events-exhibition": {
    category: "Events & Exhibition",
    title: "Events & Exhibition Flooring",
    description:
      "The gold standard for exhibition contractors. High-durability, flame-retardant flooring for trade shows.",
    image: "/events-hero.webp",
    features: [
      "Flame Retardant (SGS Certified)",
      "High Traffic Durability",
      "Easy Roll-out",
      "Bulk Stock Available",
    ],
    gallery: ["/e1.webp", "/e2.webp", "/e3.webp", "/e4.webp"],
  },
  "vip-runner": {
    category: "VIP Flooring",
    title: "VIP Runner",
    description:
      "Exclusive, high-end runners for red carpet events and VIP arrivals.",
    image: "/vip-hero.webp",
    features: [
      "Premium Texture",
      "Luxury Aesthetic",
      "Durable Weave",
      "Custom Lengths",
    ],
    gallery: ["/v1.webp", "/v2.webp", "/v3.webp", "/v4.webp"],
  },
  "grass-carpet": {
    category: "Outdoor",
    title: "Grass Carpet",
    description:
      "Artificial turf that brings a lush, green aesthetic to any outdoor event.",
    image: "/grass-hero.webp",
    features: [
      "UV Resistant",
      "Low Maintenance",
      "Natural Look",
      "Weather Proof",
    ],
    gallery: ["/g1.webp", "/g2.webp", "/g3.webp", "/g4.webp"],
  },
  "vinyl-flooring": {
    category: "Flooring",
    title: "Vinyl Flooring",
    description:
      "Commercial-grade vinyl that combines style with extreme durability.",
    image: "/vinyl-hero.webp",
    features: ["Waterproof", "Easy Clean", "Anti-Scratch", "Modern Finishes"],
    gallery: ["/vi1.webp", "/vi2.webp", "/vi3.webp", "/vi4.webp"],
  },
  rugs: {
    category: "Rugs",
    title: "Luxury Rugs",
    description:
      "Hand-picked, custom-designed rugs for interior design and commercial spaces.",
    image: "/rugs-hero.webp",
    features: ["Soft Touch", "Custom Shapes", "Stain Resistant", "Artisan Quality"],
    gallery: ["/r1.webp", "/r2.webp", "/r3.webp", "/r4.webp"],
  },
  "spc-flooring": {
    category: "Flooring",
    title: "SPC Flooring",
    description:
      "State-of-the-art stone plastic composite flooring for modern interiors.",
    image: "/spc-hero.webp",
    features: ["Rigid Core", "Impact Resistant", "Sound Proof", "Fast Click Install"],
    gallery: ["/s1.webp", "/s2.webp", "/s3.webp", "/s4.webp"],
  },
  "tile-carpet": {
    category: "Flooring",
    title: "Tile Carpet",
    description:
      "Modular carpet tiles designed for flexibility in office and commercial spaces.",
    image: "/tile-hero.webp",
    features: ["Easy Replacement", "Sound Proof", "Modular Design", "Heavy Duty"],
    gallery: ["/t1.webp", "/t2.webp", "/t3.webp", "/t4.webp"],
  },
  "design-carpet": {
    category: "Custom",
    title: "Design Carpet",
    description:
      "Bespoke carpet designs tailored to your corporate or brand identity.",
    image: "/design-hero.webp",
    features: [
      "Unlimited Patterns",
      "Commercial Grade",
      "High-Definition Print",
      "Brand Specific",
    ],
    gallery: ["/d1.webp", "/d2.webp", "/d3.webp", "/d4.webp"],
  },
  "mosque-carpet": {
    category: "Specialized",
    title: "Mosque Carpet",
    description:
      "Soft, high-quality prayer carpets designed for comfort and durability.",
    image: "/mosque-hero.webp",
    features: [
      "Antimicrobial",
      "Comfort Cushion",
      "Easy Maintenance",
      "Traditional Designs",
    ],
    gallery: ["/m1.webp", "/m2.webp", "/m3.webp", "/m4.webp"],
  },

  // NEW PRODUCT 1
  "loop-pile-carpets": {
    category: "Commercial Carpet Collection",
    title: "Loop Pile Carpets",
    description:
      "Explore our Loop Pile Carpet collection, designed for commercial and interior flooring applications. Contact our team to discuss available styles, colours and project requirements.",
    image: "/loop-pile-hero.webp",
    features: [
      "Distinctive Loop Pile Texture",
      "Suitable for Commercial Interiors",
      "Available in Different Styles",
      "Options for Various Project Requirements",
    ],
    gallery: ["/loop-pile-1.webp","/loop-pile-2.webp","/loop-pile-3.webp","/loop-pile-4.webp"],
  },

  // NEW PRODUCT 2
  "cut-pile-carpets": {
    category: "Premium Carpet Collection",
    title: "Cut Pile Carpets",
    description:
      "Discover our Cut Pile Carpet collection, featuring a soft, textured surface for residential and commercial interior applications. Contact us for available designs, colours and specifications.",
    image:  "/cut-pile-hero.webp",
    features: [
      "Soft Cut Pile Texture",
      "Elegant Interior Appearance",
      "Multiple Design Possibilities",
      "Options for Different Applications",
    ],
    gallery: ["/cut-pile-1.webp", "/cut-pile-2.webp", "/cut-pile-3.webp", "/cut-pile-4.webp"],
  },
};

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-500">
      <ImageIcon size={34} strokeWidth={1.2} />
      <span className="mt-3 text-xs font-bold uppercase tracking-widest text-center px-3">
        {label}
      </span>
      <span className="mt-1 text-[10px] text-gray-400">
        Image coming soon
      </span>
    </div>
  );
}

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = productDatabase[slug];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalogue.pdf";
    link.setAttribute("download", "Rameez-Carpets-Catalogue.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false);
    setSubmitted(false);
  };

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found.</h1>
        <a href="/" className="text-red-700 underline mt-4 inline-block">
          Return to Home
        </a>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[350px] w-full flex items-center justify-center text-white overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#011d33] via-[#163b50] to-[#526875]">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <ImageIcon size={220} strokeWidth={0.6} />
            </div>
          </div>
        )}

        <div className="relative z-10 text-center px-6">
          <span className="text-red-400 font-bold uppercase tracking-widest">
            {product.category}
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold mt-3">
            {product.title}
          </h1>
          <p className="text-white/80 mt-4 text-sm md:text-base">
            Premium Carpet Solutions by Rameez Carpets
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-100 py-8 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] uppercase font-bold text-gray-600">
          {[
            { icon: <ShieldCheck className="text-red-600" />, text: "Certified Quality" },
            { icon: <Truck className="text-red-600" />, text: "Fast GCC Shipping" },
            { icon: <Users className="text-red-600" />, text: "Corporate Trusted" },
            { icon: <CheckCircle className="text-red-600" />, text: "Expert Installation" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="container mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-red-700 font-bold text-xs uppercase tracking-widest">
              Rameez Carpets
            </span>
            <h2 className="text-3xl font-bold mb-6 mt-2">
              Product Overview
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <h3 className="font-bold mb-4">Key Features</h3>
            <ul className="space-y-4">
              {product.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-red-600 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 bg-red-700 text-white px-8 py-3 rounded font-bold hover:bg-red-800 transition uppercase tracking-widest text-xs"
            >
              Request Product Catalogue
            </button>
          </div>

          {/* IMAGE GALLERY */}
          <div className="grid grid-cols-2 gap-4">
            {product.gallery.map((img: string | null, i: number) => (
              <div
                key={i}
                className="relative h-48 bg-gray-100 rounded overflow-hidden"
              >
                {img ? (
                  <Image
                    src={img}
                    alt={`${product.title} gallery image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <ImagePlaceholder label={`Gallery Image ${i + 1}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE CTA */}
      <section className="py-12 text-center bg-gray-50 border-y">
        <h2 className="text-2xl font-bold mb-3">
          Interested in {product.title}?
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Contact our team for product information and quotations.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-700 text-white px-10 py-4 rounded font-bold hover:bg-red-800 transition uppercase tracking-widest"
        >
          Request Information
        </button>
      </section>

      {/* CATALOGUE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-4 right-4"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4">Get the Catalogue</h2>

            {!submitted ? (
              <form
                onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  setLoading(true);

                  try {
                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData.entries());

                    const res = await fetch("/api/send-lead", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        ...data,
                        formName: `Catalog Download: ${product.title}`,
                      }),
                    });

                    const result = await res.json();

                    if (res.ok && result.success) {
  const dataLayerWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };

  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer || [];
  dataLayerWindow.dataLayer.push({
    event: "generate_lead",
    form_name: "Product Catalogue Request",
    product_name: product.title,
  });

  setSubmitted(true);
} else {
                      alert("Failed to send. Please check API settings.");
                    }
                  } catch {
                    alert("Something went wrong. Please try again.");
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                <input
                  type="hidden"
                  name="product"
                  value={product.title}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 mb-3 border rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 mb-3 border rounded"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp / Mobile Number"
                  required
                  className="w-full p-3 mb-4 border rounded"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-700 text-white py-3 rounded font-bold hover:bg-red-800 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit & Download"}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <p className="mb-4 text-green-700 font-bold">
                  Thank you! Your details have been received.
                </p>
                <button
                  onClick={triggerDownload}
                  className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700"
                >
                  Click to Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
