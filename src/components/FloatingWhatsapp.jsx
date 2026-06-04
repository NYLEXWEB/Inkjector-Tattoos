import React from 'react'
import { Instagram } from 'lucide-react'

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
        <Instagram className="h-6 w-6 text-white group-hover:rotate-6 transition-transform" />
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
        
        {/* Precise official SVG path of WhatsApp */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-white relative z-10 group-hover:scale-105 transition-transform"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.388 2.016 13.91 1 11.3 1 5.866 1 1.446 5.37 1.442 9.8c-.001 1.637.45 3.23 1.3 4.637l-.85 3.102 3.186-.826a9.786 9.786 0 0 0 4.57 1.144zM17.15 14.54c-.26-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.59.13-.18.26-.69.86-.85 1.04-.15.17-.31.2-.57.07-2.04-1.002-3.41-1.81-4.78-4.148-.36-.62.36-.58.98-1.81.1-.2.05-.38-.02-.51-.07-.13-.59-1.43-.81-1.97-.22-.53-.44-.46-.6-.47-.15-.01-.33-.01-.51-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.93 4.66 4.11 1.63.7 2.91.95 3.9.64.77-.24 1.56-.81 1.77-1.42.2-.61.2-1.13.14-1.24-.06-.11-.23-.17-.49-.3z" />
        </svg>
      </a>
    </div>
  )
}
