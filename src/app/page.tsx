"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar"; 
import { 
  Building2, 
  Hotel, 
  Tent, 
  BookOpen, 
  Warehouse, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Star
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Carousel slider native controller ref
  const horizontalSliderRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "1", title: "Wedding", img: "/images/wedding.jpg" },
    { id: "2", title: "Events/Exhibition", img: "/images/exhibition.jpg" },
    { id: "3", title: "VIP Runner", img: "/images/runner.jpg" },
    { id: "4", title: "Grass Carpet", img: "/images/grass.jpg" },
    { id: "5", title: "Vinyl Flooring", img: "/images/vinyl.jpg" },
    { id: "6", title: "Rugs", img: "/images/rug.jpg" },
    { id: "7", title: "SPC Flooring", img: "/images/spc.jpg" },
    { id: "8", title: "Tile Carpet", img: "/images/tiles.jpg" },
    { id: "9", title: "Design Carpet", img: "/images/design.jpg" },
    { id: "10", title: "Mosque Carpet", img: "/images/mosque.jpg" },
  ];

  const featuredProducts = [
    { id: "RZ-101", name: "Royal Velvet Wedding White", category: "Wedding", img: "/images/feat1.webp" },
    { id: "RZ-102", name: "Premium Heavy Duty Event Blue", category: "Events/Exhibition", img: "/images/feat2.webp" },
    { id: "RZ-103", name: "Classic Ottoman Mihrab Style", category: "Mosque Carpet", img: "/images/feat3.webp" },
    { id: "RZ-104", name: "Luxury Red Carpet VIP Runner", category: "VIP Runner", img: "/images/feat4.webp" },
    { id: "RZ-105", name: "Geometric Minimalist Pattern", category: "Design Carpet", img: "/images/feat5.webp" },
    { id: "RZ-106", name: "Ultra-Dense High Dynamic Grass", category: "Grass Carpet", img: "/images/feat6.webp" },
    { id: "RZ-107", name: "Acoustic Nylon Commercial Tile", category: "Tile Carpet", img: "/images/feat7.webp" },
    { id: "RZ-108", name: "Modern Nordic Textured Area Rug", category: "Rugs", img: "/images/feat8.webp" },
    { id: "RZ-109", name: "Anti-Scratch SPC Flooring", category: "SPC Flooring", img: "/images/feat9.webp" },
    { id: "RZ-110", name: "Commercial High-Traffic Vinyl", category: "Vinyl Flooring", img: "/images/feat10.webp" },
    { id: "RZ-111", name: "Imperial Gold Ceremonial Carpet", category: "Events/Exhibition", img: "/images/feat11.webp" },
    { id: "RZ-112", name: "High-Traffic Tufted Office Tile", category: "Tile Carpet", img: "/images/feat12.webp" },
  ];

  const scrollSlider = (direction: "left" | "right") => {
    if (horizontalSliderRef.current) {
      const { scrollLeft, clientWidth } = horizontalSliderRef.current;
      const offsetAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      horizontalSliderRef.current.scrollTo({
        left: scrollLeft + offsetAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[65vh] flex items-center bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.jpg" alt="Premium Carpets GCC" fill className="object-cover object-right md:object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:block hidden" />
          <div className="absolute inset-0 bg-white/90 md:hidden block" />
        </div>

        <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-7xl w-full py-10">
          <div className="max-w-2xl">
            <h4 className="text-xs font-extrabold tracking-widest text-rameez-gold uppercase mb-3">Premium Wholesale Carpet Solutions</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
              Premium Events/Exhibition Carpets <br /> & Flooring Solutions <br />
              <span className="text-rameez-red">Across GCC</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Trusted by importers, distributors, hotels, event companies and construction firms for high-quality carpets and flooring solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => router.push("/contact")}
                className="bg-rameez-red text-white text-xs font-bold px-6 py-3.5 rounded flex items-center gap-2 tracking-wider shadow-lg hover:bg-opacity-95 transition"
              >
                REQUEST QUOTE <span className="text-sm">→</span>
              </button>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="border border-rameez-red text-rameez-red text-xs font-bold px-6 py-3.5 rounded flex items-center gap-2 tracking-wider hover:bg-red-50 transition"
              >
                DOWNLOAD CATALOG 
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Overlay */}
{isPopupOpen && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-6">
    <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
      <button 
        onClick={() => { setIsPopupOpen(false); setSubmitted(false); }} 
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
      >
        ✕
      </button>
      
      {!submitted ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Get the Catalogue</h2>
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              // Your API call to /api/send-lead goes here
              setSubmitted(true);
            }} 
            className="space-y-4"
          >
            <input name="name" placeholder="Full Name" required className="w-full p-3 border rounded" />
            <input name="email" type="email" placeholder="Email Address" required className="w-full p-3 border rounded" />
            <input name="phone" type="tel" placeholder="WhatsApp / Mobile Number" required className="w-full p-3 border rounded" />
            <button type="submit" className="w-full bg-red-700 text-white py-3 rounded font-bold hover:bg-red-800 transition">
              Submit & Download
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-6">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Thank You!</h2>
          <p className="mb-6">Your details have been received.</p>
          <a 
            href="/downloads/catalogue.pdf" 
            download 
            className="block w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition"
          >
            Click to Download PDF
          </a>
        </div>
      )}
    </div>
  </div>
)}

      {/* --- 2. TRUST BAR SECTION --- */}
      <section className="w-full bg-white border-y border-gray-100 py-5">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 text-center md:text-left">
            {[
              { title: "GCC Supplier", icon: "🌐" },
              { title: "Bulk Orders", icon: "📦" },
              { title: "Fast Delivery", icon: "🚚" },
              { title: "Premium Quality", icon: "🏅" },
              { title: "UAE Based", icon: "📍" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start gap-2.5 py-1 px-2 border-r last:border-0 border-gray-200">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-sm border border-red-100">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-gray-700 tracking-wide">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. PREMIUM PRODUCT GALLERY SECTION --- */}
      <section className="w-full bg-[#011d33] py-16 px-6 md:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-rameez-red uppercase tracking-widest flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-rameez-red/40 inline-block"></span>
              Our Product Categories
              <span className="w-8 h-[1px] bg-rameez-red/40 inline-block"></span>
            </h2>
            <div className="w-12 h-[2px] bg-rameez-gold mx-auto mt-2"></div>
            <p className="text-gray-400 text-xs mt-4 tracking-wider uppercase">Explore our professional flooring range</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {categories.map((cat, index) => (
              <motion.div 
                key={cat.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-gray-800 rounded overflow-hidden shadow-sm hover:shadow-xl transition group cursor-pointer"
              >
                <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                  <Image 
                    src={cat.img} 
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-3 left-3 w-7 h-7 bg-rameez-red rounded-full flex items-center justify-center shadow-md">
                    <span className="text-[9px] text-white font-bold">★</span>
                  </div>
                </div>
                <div className="p-3 bg-white text-center border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-900 tracking-wide group-hover:text-rameez-red transition">
                    {cat.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. NEW / FEATURED PRODUCTS SLIDER SECTION --- */}
      <section className="w-full bg-[#F6F6F6] py-20 px-6 md:px-16 border-t border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          
          {/* Slider Header Control Panel */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-sm font-bold text-rameez-red uppercase tracking-widest mb-1">
                Fresh Arrivals
              </h2>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                New & Featured Products
              </h3>
            </div>
            
            {/* Sliding Control Arrows */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button 
                onClick={() => scrollSlider("left")}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center bg-white text-gray-700 hover:bg-rameez-red hover:text-white hover:border-rameez-red shadow-xs transition duration-200 cursor-pointer"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scrollSlider("right")}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center bg-white text-gray-700 hover:bg-rameez-red hover:text-white hover:border-rameez-red shadow-xs transition duration-200 cursor-pointer"
                aria-label="Scroll Right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Horizontal Drag/Scroll Frame Wrapper */}
          <div 
            ref={horizontalSliderRef}
            className="flex overflow-x-auto gap-5 pb-6 scroll-smooth snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
            }}
          >
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="snap-start flex-none w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(20%-16px)]"
              >
                <div className="bg-white border border-gray-200 rounded overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group">
                  
                  {/* Card Visual Top */}
                  <div className="relative h-56 bg-gray-100 overflow-hidden w-full">
                    <Image 
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Decorative Top Accent Tag Badge */}
                    <div className="absolute top-3 left-3 bg-rameez-gold text-white font-extrabold text-[9px] tracking-wider px-2 py-1 rounded-xs uppercase shadow-sm">
                      NEW
                    </div>
                  </div>

                  {/* Card Info Bottom */}
                  <div className="p-4 border-t border-gray-100 flex flex-col justify-between min-h-[110px]">
                    <div>
                      <span className="text-[10px] font-bold text-rameez-gold uppercase tracking-wider mb-0.5 block">
                        {product.category}
                      </span>
                      <h4 className="text-xs font-bold text-gray-800 line-clamp-2 leading-medium tracking-wide group-hover:text-rameez-red transition duration-200">
                        {product.name}
                      </h4>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 border-t border-gray-50 pt-2.5">
                      <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                        {product.id}
                      </span>
                      <div className="flex gap-0.5 text-rameez-gold">
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- 5. INDUSTRIES WE SERVE --- */}
      <section className="w-full bg-white py-20 px-6 md:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-rameez-red uppercase tracking-widest mb-2">
              Sectors of Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Industries We Serve
            </h3>
            <div className="w-16 h-1 bg-rameez-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Hospitality & Hotels", icon: <Hotel size={32} />, desc: "Premium carpeting solutions for luxury hotel lobbies and guest rooms." },
              { title: "Exhibitions & Events", icon: <Tent size={32} />, desc: "High-durability exhibition flooring for rapid setup and high-traffic events." },
              { title: "Commercial Offices", icon: <Building2 size={32} />, desc: "Professional office carpet tiles designed for comfort and noise reduction." },
              { title: "Educational Institutes", icon: <BookOpen size={32} />, desc: "Safe, durable, and easy-to-maintain flooring for schools and universities." },
              { title: "Industrial Warehousing", icon: <Warehouse size={32} />, desc: "Heavy-duty flooring solutions built to withstand massive logistics traffic." },
              { title: "Government & Public", icon: <Users size={32} />, desc: "Custom, reliable flooring projects for public sector facilities." },
            ].map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group rounded"
              >
                <div className="text-rameez-red mb-6 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
{/* --- ABOUT US PREVIEW --- */}
      <section className="w-full bg-rameez-red py-16 px-6 md:px-16 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-start gap-12 mb-10">
            {/* Left Column: Description */}
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold mb-6">Quality You Can Trust</h2>
              <p className="text-red-50 text-sm leading-relaxed mb-6">
                Rameez Carpets is a Dubai-based trading and installation company specializing in premium exhibition carpets, event carpets, rugs, vinyl flooring, artificial grass, and complete flooring accessories. 
              </p>
              <p className="text-red-50 text-sm leading-relaxed">
                Built on the foundation of quality, reliability, and fast service, we have grown into a trusted name for businesses, event organizers, and exhibition contractors across the UAE and the wider GCC region.
              </p>
            </div>

            {/* Right Column: Vision & Mission */}
            <div className="flex-1 border-l-2 border-white/20 pl-8 space-y-8">
              <div>
                <h4 className="text-lg font-bold mb-2">Our Vision</h4>
                <p className="text-red-50 text-sm italic">
                  "To become the leading flooring partner across the GCC, recognized for our commitment to quality, innovation, and seamless project execution."
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-2">Our Mission</h4>
                <p className="text-red-50 text-sm italic">
                  "To provide premium-quality carpets and flooring solutions with fast delivery and professional installation, making every event, exhibition, and interior space look flawless." 
                </p>
              </div>
            </div>
          </div>

          {/* CTA Link to About Us */}
          <div className="text-center md:text-left">
            <a 
              href="/about" 
              className="inline-flex items-center gap-2 bg-white text-rameez-red font-bold text-xs px-6 py-3 rounded hover:bg-red-50 transition tracking-widest uppercase"
            >
              Learn More About Us <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}