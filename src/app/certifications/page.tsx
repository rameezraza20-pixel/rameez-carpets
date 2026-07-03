"use client";
import React from "react";
import { Download, FileText } from "lucide-react";

export default function CertificationsPage() {
  const certifications = [
    { title: "ISO Certification", desc: "Quality management and international standards.", file: "/certs/iso-cert.pdf" },
    { title: "Fire Safety Certification", desc: "Official Fire Safety Certificate.", file: "/certs/fire-safety-cert.pdf" },
  ];

  return (
    <div className="bg-[#F5F2EC] min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A1F2B] mb-4">Certifications & Credentials</h1>
          <p className="text-[#8C8478] max-w-2xl mx-auto">
            We operate with full transparency. Below are our official business licenses, quality certifications, and export documents available for download.
          </p>
        </div>

        {/* Grid of Certificates */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-white p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-100 mb-6 flex items-center justify-center border border-gray-200">
                <FileText className="text-gray-400 w-12 h-12" />
              </div>
              
              <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-6 flex-grow">{cert.desc}</p>
              
              <a 
                href={cert.file} 
                download
                className="inline-flex items-center gap-2 bg-[#1A1F2B] text-white px-6 py-3 rounded hover:bg-black transition text-sm font-bold"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}