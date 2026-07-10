"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const getSlug = (name: string) => name.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-');

  const productList = [
    "Wedding", "Events/Exhibition", "VIP Runner", "Grass Carpet", 
    "Vinyl Flooring", "Rugs", "SPC Flooring", "Tile Carpet", 
    "Design Carpet", "Mosque Carpet"
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Top Bar */}
      <div className="hidden md:flex w-full bg-[#111111] text-white py-1.5 px-6 md:px-16 text-[10px] justify-between items-center uppercase tracking-widest">
        <span>Leading Carpet Supplier</span>
        <div className="flex gap-6">
          <a href="tel:+971521928821" className="flex items-center gap-2 hover:text-red-500 transition" aria-label="Call us at +971 52 192 8821">
            <Phone size={12} /> +971 52 192 8821
          </a>
          <a href="mailto:info@rameezcarpets.com" className="flex items-center gap-2 hover:text-red-500 transition" aria-label="Email us at info@rameezcarpets.com">
            <Mail size={12} /> info@rameezcarpets.com
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="w-full bg-white px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" aria-label="Rameez Carpets Home">
          <Image src="/logo.png" alt="Rameez Carpets Logo" width={140} height={35} className="object-contain" />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[10px] xl:text-[11px] font-bold tracking-widest text-gray-900 uppercase">
          <Link href="/" className="hover:text-red-700">Home</Link>
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className="hover:text-red-700 flex items-center gap-1" aria-expanded={isDropdownOpen} aria-haspopup="true">
              PRODUCTS ▾
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl py-2 z-50">
                {productList.map((item, idx) => (
                  <Link key={idx} href={`/products/${getSlug(item)}`} className="block px-4 py-2 hover:bg-red-50">{item}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-red-700">About Us</Link>
          <Link href="/export" className="hover:text-red-700">Export</Link>
          
          {/* Action Buttons */}
          <Link href="/contact" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition">
            CONTACT SALES
          </Link>
          <a 
            href="https://wa.me/971521928821" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#25D366] text-white px-4 py-2 rounded font-bold hover:bg-[#128C7E] transition flex items-center gap-2"
            aria-label="Chat with us on WhatsApp at +971 52 192 8821"
          >
            WHATSAPP
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle navigation menu" aria-expanded={isMobileMenuOpen}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t p-6 flex flex-col gap-5 text-[14px] font-bold uppercase tracking-widest">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <button className="flex justify-between items-center w-full" onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)} aria-expanded={isMobileProductsOpen}>
            Products {isMobileProductsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {isMobileProductsOpen && (
            <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
              {productList.map(item => (
                <Link key={item} href={`/products/${getSlug(item)}`} className="text-[12px] font-normal" onClick={() => setIsMobileMenuOpen(false)}>{item}</Link>
              ))}
            </div>
          )}
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="text-red-700" onClick={() => setIsMobileMenuOpen(false)}>Contact Sales</Link>
          <a href="https://wa.me/971563775899" className="text-[#25D366]" onClick={() => setIsMobileMenuOpen(false)} aria-label="Chat with us on WhatsApp at +971 56 377 5899">
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;