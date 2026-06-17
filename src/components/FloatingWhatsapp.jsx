import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Google Review Floating Button */}
      <a
        href="https://www.google.com/search?client=mobilesearchapp&sca_esv=9111c760d8c2668c&channel=iss&cs=1&hl=en_GB&rlz=1MDAPLA_en-GBIN1199IN1199&v=423.5.920392540&sxsrf=ANbL-n5rZbseZUWk5RRoRDfxQkIdQOsplQ:1781700500146&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZc8Ga_YXkoNVGLngckvV6s1K5bkBC1V5_F-UqYvWGmZxJfBLm57VpoI6rzEjqF2igQN0ulpq5XgHzBh0jh648BP8MwXajpOS2rwmaBmtC1jG0ilYA%3D%3D&q=INKJECTOR+TATTOOS+Reviews&sa=X&ved=2ahUKEwiW1qDLp46VAxWDUWwGHVG6HhMQ0bkNegQIJRAF&biw=1536&bih=730&dpr=1.25"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group relative border border-neutral-100"
        aria-label="Write a Google Review"
      >
        <svg className="h-6 w-6 shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      </a>

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
