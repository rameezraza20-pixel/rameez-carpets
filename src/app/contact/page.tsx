"use client";
import React from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#F5F2EC] min-h-screen text-[#1A1F2B] py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-[#8C8478] max-w-xl mx-auto">
            We welcome inquiries from business owners, distributors, and event companies across the GCC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <Phone className="text-red-700 mt-1" />
              <div>
                <p className="font-bold">Call Us</p>
                <p className="text-sm text-gray-600">+971 52 192 8821 | +971 56 377 5899</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-red-700 mt-1" />
              <div>
                <p className="font-bold">Email</p>
                <p className="text-sm text-gray-600">info@rameezcarpets.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-red-700 mt-1" />
              <div>
                <p className="font-bold">Location</p>
                <p className="text-sm text-gray-600">Near Tasheel Roundabout, Al Sajaa, Emirates Industrial City, Sharjah, UAE</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe className="text-red-700 mt-1" />
              <div>
                <p className="font-bold">Website</p>
                <p className="text-sm text-gray-600">www.rameezcarpets.com</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 h-64 flex items-center justify-center rounded border border-gray-300">
              <p className="text-gray-500">

                
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-700" />
              <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-700" />
              <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-700" />
              <textarea placeholder="Message" rows={4} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-700"></textarea>
              <button type="submit" className="w-full bg-[#1A1F2B] text-white py-4 font-bold rounded hover:bg-black transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}