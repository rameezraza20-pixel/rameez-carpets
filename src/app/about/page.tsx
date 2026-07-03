"use client";
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Container for main content */}
      <div className="container mx-auto max-w-6xl py-16 px-6 md:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Rameez Carpets</h1>
          <div className="w-20 h-1 bg-red-700 mx-auto"></div>
        </div>

        {/* Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rameez Carpets is a Dubai-based trading and installation company that specializes in a 
              comprehensive range of flooring solutions, including premium exhibition carpets, 
              event carpets, rugs, vinyl flooring, artificial grass, and complete flooring accessories.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We have established ourselves as a trusted partner for businesses, event organizers, 
              exhibition contractors, and corporate clients across the UAE. Our business is built 
              upon a foundation of quality, reliability, and fast, efficient service.
            </p>
          </div>
          <div className="bg-gray-100 h-64 md:h-96 relative rounded overflow-hidden">
             <Image src="/about-us.webp" alt="Rameez Carpets Team" fill className="object-cover" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-50 p-8 border-l-4 border-red-700">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 italic">
              "To provide premium-quality carpets and flooring solutions with fast delivery and 
              professional installation, making every event, exhibition, and interior space look flawless."
            </p>
          </div>
          <div className="bg-gray-50 p-8 border-l-4 border-yellow-600">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 italic">
              "To become the leading carpet and flooring supplier across the UAE and the GCC, 
              recognized for our variety, reliability, and complete customer satisfaction."
            </p>
          </div>
        </div>
      </div>

      {/* --- CORE VALUES (Full Width) --- */}
      <div style={{ backgroundColor: "#011d33" }} className="w-full py-16 px-6 md:px-16 text-white mb-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality First", desc: "We source only premium materials to ensure longevity and style." },
              { title: "Customer Centric", desc: "Your requirements are our priority; we tailor solutions to match." },
              { title: "Integrity", desc: "We operate with transparency, honesty, and professional dedication." }
            ].map((val, i) => (
              <div key={i} className="text-center p-6 border border-gray-700 rounded hover:border-red-700 transition">
                <div className="text-red-500 font-bold text-4xl mb-4">✦</div>
                <h4 className="font-bold mb-2 text-white">{val.title}</h4>
                <p className="text-sm text-gray-300">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Container for Export Markets */}
      <div className="container mx-auto max-w-6xl px-6 md:px-16 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
              Our Global Flooring <br/>
              <span className="text-red-700">Export Network</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Rameez Carpets provides streamlined export solutions for commercial projects, 
              exhibition contractors, and luxury event organizers. We guarantee fast, 
              reliable logistics across the GCC and beyond.
            </p>
          </div>
          <div className="relative w-full aspect-[16/9] bg-gray-50 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <Image src="/world-map.png" alt="Export regions" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* --- WHY CHOOSE US (Full Width, Glassmorphism, Light Gray) --- */}
      <div className="w-full bg-gray-100 py-20 px-6 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Rameez Carpets?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Fast Delivery", desc: "Logistics network for time-sensitive events." },
              { title: "Wide Range", desc: "Everything under one roof." },
              { title: "Customization", desc: "Tailored to your brand and style." },
              { title: "Expert Setup", desc: "Professional, stress-free installation." },
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white/40 backdrop-blur-md border border-white/50 p-8 rounded-2xl shadow-lg hover:bg-white/60 transition-all duration-300 text-center"
              >
                <h4 className="font-bold text-red-700 mb-3">{item.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* --- FINAL CALL TO ACTION --- */}
      <div className="w-full bg-red-700 py-20 px-6 text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-red-100 mb-10 text-lg leading-relaxed">
            Whether you are planning a large-scale exhibition or a premium interior project, 
            our team is here to provide the perfect flooring solution. Let's discuss your requirements today.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-red-700 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
          >
            Contact Us Now
          </a>
        </div>
      </div>

    </div>
  );
}