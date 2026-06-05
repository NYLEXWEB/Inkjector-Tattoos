import React from 'react'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'

export default function MapSection() {
  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
            STUDIO ATELIER
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
            Find the Studio
          </h2>
          <p className="text-neutral-500 text-sm font-light mt-4 max-w-xl">
            Located in the serene surroundings of Kozhikode, Kerala, our private studio is configured for comfort, absolute privacy, and surgical-grade hygiene.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative border border-neutral-200 shadow-xl overflow-hidden flex flex-col md:block w-full md:aspect-[21/9]">
          
          {/* Full Color Google Map Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.986348325992!2d75.87702844837865!3d11.261685419998246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65da70979dcf3%3A0xc3676cf2377b8cf6!2sCherukulathoor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-[300px] md:h-full border-0 md:min-h-[450px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Inkjector Tattoos Location Map"
          ></iframe>

          {/* Floating Atelier Card */}
          <div className="relative md:absolute md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md p-6 border-t md:border border-neutral-200/60 w-full md:max-w-sm text-left shadow-2xl z-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[#C8A45D]/20 flex items-center justify-center text-[#C8A45D] shrink-0 mt-0.5">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-lg font-medium text-neutral-900 leading-none mb-1.5 font-sans">
                    Inkjector Tattoos
                  </h4>
                  <span className="text-[9px] uppercase tracking-widest text-[#C8A45D] font-bold block mb-3 font-sans">
                    BY APPOINTMENT ONLY
                  </span>
                  <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                    Medical College, Cherukulathoor,<br />
                    Kozhikode, Kerala 673008, India
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://maps.google.com/?q=Inkjector+Tattoos+Cherukulathoor+Kozhikode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-950 hover:bg-[#C8A45D] text-white hover:text-neutral-950 text-[10px] uppercase tracking-wider font-bold transition-all duration-300 font-sans"
                  >
                    <Navigation className="h-3 w-3" />
                    <span>Get Directions</span>
                  </a>
                  
                  <a
                    href="https://share.google/OH39vw4gjruKqMr0n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 border border-neutral-200 hover:border-neutral-900 text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
                    title="View Studio Reviews"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
