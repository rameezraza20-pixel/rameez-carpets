"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { CheckCircle, ShieldCheck, Truck, Users, X } from "lucide-react";

const productDatabase: any = {
  "wedding": { 
    category: "Wedding", 
    title: "Luxury Wedding Carpets", 
    description: "Create an unforgettable entrance with our premium wedding aisle runners. Custom-fit for any venue size.",
    image: "/wedding-hero.webp",
    features: ["Luxury Velvet Finish", "Anti-Slip Backing", "Customizable Colors", "Fast Setup"],
    gallery: ["/w1.webp", "/w2.webp", "/w3.webp", "/w4.webp"]
  },
  "events-exhibition": { 
    category: "Events & Exhibition", 
    title: "Events & Exhibition Flooring", 
    description: "The gold standard for exhibition contractors. High-durability, flame-retardant flooring for trade shows.",
    image: "/events-hero.webp",
    features: ["Flame Retardant (SGS Certified)", "High Traffic Durability", "Easy Roll-out", "Bulk Stock Available"],
    gallery: ["/e1.webp", "/e2.webp", "/e3.webp", "/e4.webp"]
  },
  "vip-runner": { 
    category: "VIP Flooring", title: "VIP Runner", 
    description: "Exclusive, high-end runners for red carpet events and VIP arrivals.",
    image: "/vip-hero.webp", features: ["Premium Texture", "Luxury Aesthetic", "Durable Weave", "Custom Lengths"],
    gallery: ["/v1.webp", "/v2.webp", "/v3.webp", "/v4.webp"]
  },
  "grass-carpet": { 
    category: "Outdoor", title: "Grass Carpet", 
    description: "Artificial turf that brings a lush, green aesthetic to any outdoor event.",
    image: "/grass-hero.webp", features: ["UV Resistant", "Low Maintenance", "Natural Look", "Weather Proof"],
    gallery: ["/g1.webp", "/g2.webp", "/g3.webp", "/g4.webp"]
  },
  "vinyl-flooring": { 
    category: "Flooring", title: "Vinyl Flooring", 
    description: "Commercial-grade vinyl that combines style with extreme durability.",
    image: "/vinyl-hero.webp", features: ["Waterproof", "Easy Clean", "Anti-Scratch", "Modern Finishes"],
    gallery: ["/vi1.webp", "/vi2.webp", "/vi3.webp", "/vi4.webp"]
  },
  "rugs": { 
    category: "Rugs", title: "Luxury Rugs", 
    description: "Hand-picked, custom-designed rugs for interior design and commercial spaces.",
    image: "/rugs-hero.webp", features: ["Soft Touch", "Custom Shapes", "Stain Resistant", "Artisan Quality"],
    gallery: ["/r1.webp", "/r2.webp", "/r3.webp", "/r4.webp"]
  },
  "spc-flooring": { 
    category: "Flooring", title: "SPC Flooring", 
    description: "State-of-the-art stone plastic composite flooring for modern interiors.",
    image: "/spc-hero.webp", features: ["Rigid Core", "Impact Resistant", "Sound Proof", "Fast Click Install"],
    gallery: ["/s1.webp", "/s2.webp", "/s3.webp", "/s4.webp"]
  },
  "tile-carpet": { 
    category: "Flooring", title: "Tile Carpet", 
    description: "Modular carpet tiles designed for flexibility in office and commercial spaces.",
    image: "/tile-hero.webp", features: ["Easy Replacement", "Sound Proof", "Modular Design", "Heavy Duty"],
    gallery: ["/t1.webp", "/t2.webp", "/t3.webp", "/t4.webp"]
  },
  "design-carpet": { 
    category: "Custom", title: "Design Carpet", 
    description: "Bespoke carpet designs tailored to your corporate or brand identity.",
    image: "/design-hero.webp", features: ["Unlimited Patterns", "Commercial Grade", "High-Definition Print", "Brand Specific"],
    gallery: ["/d1.webp", "/d2.webp", "/d3.webp", "/d4.webp"]
  },
  "mosque-carpet": { 
    category: "Specialized", title: "Mosque Carpet", 
    description: "Soft, high-quality prayer carpets designed for comfort and durability.",
    image: "/mosque-hero.webp", features: ["Antimicrobial", "Comfort Cushion", "Easy Maintenance", "Traditional Designs"],
    gallery: ["/m1.webp", "/m2.webp", "/m3.webp", "/m4.webp"]
  }
  // Repeat this pattern for your other categories (VIP Runner, Grass Carpet, etc.)
};

export default function ProductPage() {
  const slug = useParams()?.slug as string;
  const product = productDatabase[slug];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!product) return <div className="py-20 text-center">Product not found.</div>;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white">
        <Image src={product.image || "/fallback.jpg"} alt={product.title} fill className="object-cover brightness-[0.6]" />
        <div className="relative z-10 text-center px-6">
          <span className="text-red-500 font-bold uppercase tracking-widest">{product.category}</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-2">{product.title}</h1>
        </div>
      </section>

     

      {/* 2. Trust Bar */}
      <section className="bg-gray-100 py-8 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] uppercase font-bold text-gray-600">
          {[
            { icon: <ShieldCheck className="text-red-600"/>, text: "Certified Quality" },
            { icon: <Truck className="text-red-600"/>, text: "Fast GCC Shipping" },
            { icon: <Users className="text-red-600"/>, text: "Corporate Trusted" },
            { icon: <CheckCircle className="text-red-600"/>, text: "Expert Installation" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">{item.icon} {item.text}</div>
          ))}
        </div>
      </section>

      {/* 3. Description & Gallery Grid */}
      <section className="container mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
            <ul className="space-y-4">
              {product.features.map((f: string, i: number) => <li key={i} className="flex items-center gap-2">✓ {f}</li>)}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {product.gallery.map((img: string, i: number) => (
              <div key={i} className="relative h-48 bg-gray-200 rounded overflow-hidden">
                <Image src={img} alt="Gallery" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="py-12 text-center bg-gray-50 border-b">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-red-700 text-white px-10 py-4 rounded font-bold hover:bg-red-800 transition uppercase tracking-widest"
        >
          Download Catalogue
        </button>
      </section>

      {/* Modal Popup */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
    <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
      <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4"><X size={24}/></button>
      <h2 className="text-2xl font-bold mb-4">Get the Catalogue</h2>
      
      {!submitted ? (
       <form 
  onSubmit={async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Failed to send email.");
    }
  }}
>
  {/* Your inputs remain exactly the same as before */}
  <input type="hidden" name="product" value={product.title} />
  <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 mb-3 border rounded" />
  <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 mb-3 border rounded" />
  <input type="tel" name="phone" placeholder="WhatsApp / Mobile Number" required className="w-full p-3 mb-4 border rounded" />
  
  <button type="submit" className="w-full bg-red-700 text-white py-3 rounded font-bold">
    Submit & Download
  </button>
</form>
      ) : (
        <div className="text-center">
          <p className="mb-4 text-green-700 font-bold">Thank you! Your details have been received.</p>
          <a 
            href="/downloads/catalogue.pdf" 
            download 
            className="block text-center bg-green-600 text-white py-3 rounded font-bold"
          >
            Click to Download PDF
          </a>
        </div>
      )}
    </div>
  </div>
)}

     
    </main>
  );
}