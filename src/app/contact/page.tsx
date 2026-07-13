"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus('submitting');

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch('/api/send-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, formName: "Contact Us Page" }),
    });

    const result = await res.json();

    // Check if the response exists and is successful
    if (result && result.success === true) {
      setStatus('success');
      e.currentTarget.reset();
    } else {
      console.error("Server returned failure:", result);
      setStatus('error');
    }
  } catch (err) {
    console.error("Submission error:", err);
    setStatus('error');
  }
};

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
{/* Interactive Map */}
<div className="mt-8 h-64 w-full rounded border border-gray-300 overflow-hidden">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.1976362660557!2d55.6321706!3d25.3311483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f31c9c9f5f23%3A0xd539f2f29f2faa70!2sExhibition%20%26%20Office%20Carpet%20Supplier%20%26%20Installation%20Dubai%20-%20Rameez%20Carpets!5e0!3m2!1sen!2sae!4v1783938770433!5m2!1sen!2sae" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {status === 'success' ? (
              <div className="p-4 bg-green-50 text-green-700 rounded font-bold text-center">
                Message sent successfully! We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-700" 
                />
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-700" 
                />
                <input 
                  name="subject" 
                  type="text" 
                  placeholder="Subject" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-700" 
                />
                <textarea 
                  name="message" 
                  placeholder="Message" 
                  rows={4} 
                  required 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-700"
                ></textarea>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-[#1A1F2B] text-white py-4 font-bold rounded hover:bg-black transition disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}