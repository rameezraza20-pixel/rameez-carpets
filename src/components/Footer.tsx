"use client";
import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-gray-400 text-xs pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* --- FLOATING WHATSAPP BUTTON --- */}
        <a
          href="https://wa.me/971563775899"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
          aria-label="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>

        {/* Column 1: Logo */}
        <div className="space-y-4">
          <a href="/" aria-label="Go to Homepage">
            <Image src="/logo.png" alt="Rameez Carpets Logo" width={140} height={35} className="object-contain brightness-0 invert" />
          </a>
          <p className="leading-relaxed text-gray-400">
            Premium trading and installation company specializing in exhibition carpets, event flooring, and high-durability commercial surfaces across the UAE and GCC.
          </p>
        </div>

        {/* Column 2: Menu */}
        <div className="space-y-3">
          <h4 className="font-extrabold text-sm tracking-widest text-white uppercase">Menu</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About Us</a></li>
            <li><a href="/export" className="hover:text-red-500 transition">Export Markets</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Let's Connect */}
        <div className="space-y-3">
          <h4 className="font-extrabold text-sm tracking-widest text-white uppercase">Let's Connect</h4>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-red-500" aria-hidden="true" />
              <span>+971 52 192 8821 / +971 56 377 5899</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-red-500" aria-hidden="true" />
              <a href="mailto:info@rameezcarpets.com" className="hover:text-white transition">info@rameezcarpets.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-red-500" aria-hidden="true" />
              <span>Dubai, United Arab Emirates</span>
            </li>
          </ul>

          <div className="flex gap-4 pt-4">
            <a href="https://www.facebook.com/rameezcarpets/" aria-label="Visit our Facebook page" className="hover:text-blue-500 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/rameezcarpets/" aria-label="Visit our Instagram page" className="hover:text-pink-500 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.13.052 1.745.24 2.155.4.542.21.928.462 1.334.868.406.406.658.792.868 1.334.16.41.348 1.025.4 2.155.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.13-.24 1.745-.4 2.155-.21.542-.462.928-.868 1.334-.406.406-.792.658-1.334.868-.41.16-1.025.348-2.155.4-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.13-.052-1.745-.24-2.155-.4-.542-.21-.928-.462-1.334-.868-.406-.406-.658-.792-.868-1.334-.16-.41-.348-1.025-.4-2.155-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.13.24-1.745.4-2.155.21-.542.462-.928.868-1.334.406-.406.792-.658 1.334-.868.41-.16 1.025-.348 2.155-.4 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.15.258-2.913.557-.79.306-1.458.717-2.126 1.385S.936 3.497.63 4.287c-.3 1.163-.499 2.035-.557 3.313C.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.277.258 2.15.557 2.913.306.79.717 1.458 1.385 2.126.668.668 1.335 1.079 2.126 1.385.763.3 1.636.499 2.913.557C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.058 2.15-.258 2.913-.557.79-.306 1.458-.717 2.126-1.385.668-.668 1.079-1.335 1.385-2.126.3-.763.499-1.636.557-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.258-2.15-.557-2.913-.306-.79-.717-1.458-1.385-2.126-.668-.668-1.335-1.079-2.126-1.385-.763-.3-1.636-.499-2.913-.557C15.667.014 15.259 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/rameez-carpets/" aria-label="Visit our LinkedIn page" className="hover:text-blue-700 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
            <a href="https://wa.me/971563775899" aria-label="Chat with us on WhatsApp" className="hover:text-green-500 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.52 0 10.002-4.48 10.002-10.002S17.566 1.99 12.045 1.99c-5.522 0-10.004 4.48-10.004 10.002 0 2.223.697 4.364 1.919 6.202l-1.243 4.536 4.545-1.19z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 4: Markets */}
        <div className="space-y-3">
          <h4 className="font-extrabold text-sm tracking-widest text-white uppercase">Markets Served</h4>
          <p className="leading-relaxed">
            Proudly exporting and supplying corporate and luxury project networks across UAE, Oman, Qatar, Saudi Arabia, and the wider GCC region.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto max-w-7xl px-6 md:px-16 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
        <p>© 2026 Rameez Carpets. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}