"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getSlug = (name: string) => name.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-');

  const productList = [
    "Wedding", "Events/Exhibition", "VIP Runner", "Grass Carpet", 
    "Vinyl Flooring", "Rugs", "SPC Flooring", "Tile Carpet", 
    "Design Carpet", "Mosque Carpet"
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Utility Bar */}
      <div className="hidden md:flex w-full bg-[#111111] text-white py-1.5 px-6 md:px-16 text-[10px] justify-between items-center uppercase tracking-widest">
        <span>Leading Carpet Supplier</span>
        <div className="flex gap-6">
          <a href="tel:+971521928821" aria-label="Call us" className="flex items-center gap-2 hover:text-red-500 transition">
            <Phone size={12} /> +971 52 192 8821
          </a>
          <a href="mailto:info@rameezcarpets.com" aria-label="Email us" className="flex items-center gap-2 hover:text-red-500 transition">
            <Mail size={12} /> info@rameezcarpets.com
          </a>
        </div>
      </div>

      <nav className="w-full bg-white px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" aria-label="Go to Homepage">
          <Image src="/logo.png" alt="Rameez Carpets Logo" width={140} height={35} className="object-contain cursor-pointer" />
        </Link>
        
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[10px] xl:text-[11px] font-bold tracking-widest text-gray-900 uppercase whitespace-nowrap">
          <Link href="/" className="hover:text-red-700">Home</Link>
          
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            {/* Added aria-expanded to notify screen readers of menu state */}
            <button aria-label="Toggle Products Menu" aria-expanded={isDropdownOpen} className="hover:text-red-700">PRODUCTS ▾</button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl py-2 z-50">
                {productList.map((item, idx) => (
                  <Link key={idx} href={`/products/${getSlug(item)}`} className="block px-4 py-2 hover:bg-red-50 text-[10px]">
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/about" className="hover:text-red-700">About Us</Link>
          <Link href="/export" className="hover:text-red-700">Export</Link>
          <Link href="/contact" className="hover:text-red-700">Contact</Link>
        </div>

        {/* Added aria-label to the mobile toggle button */}
        <button className="lg:hidden" aria-label="Toggle mobile navigation menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <a 
            href="https://wa.me/971521928821" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contact our sales team on WhatsApp"
            className="border border-red-900 text-red-900 font-bold text-[9px] xl:text-[10px] px-3 py-2.5 rounded hover:bg-red-50 whitespace-nowrap"
          >
            CONTACT SALES
          </a>
          <a 
            href="https://wa.me/971563775899" 
            style={{ backgroundColor: "#25D366" }} 
            aria-label="Chat with us on WhatsApp"
            className="text-white font-bold text-[9px] xl:text-[10px] px-4 py-2.5 rounded hover:opacity-90 whitespace-nowrap"
          >
            WHATSAPP
          </a>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t p-6 flex flex-col gap-4 text-[12px] font-bold uppercase tracking-widest">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          {productList.map(item => (
            <Link key={item} href={`/products/${getSlug(item)}`} onClick={() => setIsMobileMenuOpen(false)}>{item}</Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;