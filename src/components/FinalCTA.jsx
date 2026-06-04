import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const handleCTAClick = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-[#111111] text-white">
      {/* Background Image with heavy parallax styling and dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/studio/workstation.png"
          alt="Studio Background"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]/90"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-8">
        <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block">
          design your legacy
        </span>
        
        <h2 className="font-serif text-5xl md:text-8xl font-light text-neutral-50 leading-tight">
          Ready For Your <br />
          <span className="italic text-[#C8A45D]">Next Tattoo?</span>
        </h2>
        
        <p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto font-light leading-relaxed">
          Let’s co-create a bespoke work of art that fits your unique anatomy and translates your narrative into permanent ink.
        </p>

        <div className="pt-6">
          <a
            href="#contact"
            onClick={handleCTAClick}
            className="inline-flex items-center justify-center px-10 py-5 bg-[#C8A45D] text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-white hover:text-black transition-all duration-300 group shadow-2xl border border-[#C8A45D]"
          >
            Request Appointment
            <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
