import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Original Instagram Icon Container */}
      <a
        href="https://www.instagram.com/inkjectortattoos"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Instagram Link"
      >
        <FaInstagram className="h-6 w-6 text-white group-hover:rotate-6 transition-transform" />
      </a>

      {/* Original WhatsApp Icon Container */}
      <a
        href="https://wa.me/918086612111?text=Hi%20Inkjector%20Tattoos,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20tattoo%20session."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="WhatsApp Link"
      >
        {/* Subtle Pulse rings behind WhatsApp */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>
        
        <FaWhatsapp className="h-7 w-7 text-white relative z-10 group-hover:scale-105 transition-transform" />
      </a>
    </div>
  )
}
