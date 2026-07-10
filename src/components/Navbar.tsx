"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to toggle the mobile product sub-menu
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const getSlug = (name: string) => name.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-');

  const productList = [
    "Wedding", "Events/Exhibition", "VIP Runner", "Grass Carpet", 
    "Vinyl Flooring", "Rugs", "SPC Flooring", "Tile Carpet", 
    "Design Carpet", "Mosque Carpet"
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100">
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
            <button aria-label="Toggle Products Menu" aria-expanded={isDropdownOpen} className="hover:text-red-700">PRODUCTS ▾</button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl py-2 z-50">
                {productList.map((item, idx) => (
                  <Link key={idx} href={`/products/${getSlug(item)}`} className="block px-4 py-2 hover:bg-red-50 text-[10px]">{item}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-red-700">About Us</Link>
          <Link href="/export" className="hover:text-red-700">Export</Link>
          <Link href="/contact" className="hover:text-red-700">Contact</Link>
        </div>

        <button className="lg:hidden" aria-label="Toggle mobile navigation menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* FIXED MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t p-6 flex flex-col gap-5 text-[14px] font-bold uppercase tracking-widest">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          
          {/* Mobile Product Dropdown */}
          <button 
            className="flex justify-between items-center w-full text-left" 
            onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
          >
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
          <Link href="/export" onClick={() => setIsMobileMenuOpen(false)}>Export</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;