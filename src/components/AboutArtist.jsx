"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, Leaf, Zap } from 'lucide-react'


export default function AboutArtist() {
  return (
    <section id="artist" className="py-24 bg-[#F7F7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center lg:text-left mb-20">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
            THE ARTIST BEHIND THE NEEDLE
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
            Akhil Saju
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mt-2">
            Founder & Master Artist | 8+ Years Experience
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Typographic Experience & Credentials Card */}
          <div className="lg:col-span-5 relative group flex flex-col justify-center items-center text-center py-16 px-6 sm:p-12 bg-white border border-neutral-200/60 shadow-lg overflow-hidden aspect-auto lg:aspect-[3/4] z-10">
            {/* Absolute accent border */}
            <div className="absolute inset-4 border border-neutral-100 pointer-events-none"></div>
            <div className="absolute inset-0 border border-[#C8A45D] translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1 pointer-events-none -z-10"></div>
            
            {/* Decorative background monogram */}
            <div className="absolute -top-10 -left-10 text-[12rem] font-serif text-neutral-50 leading-none select-none pointer-events-none font-bold">
              IJ
            </div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Massive 8+ Number */}
              <span className="font-serif text-[8rem] sm:text-[9.5rem] font-extralight text-[#C8A45D] leading-none select-none tracking-tight">
                8+
              </span>
              
              <span className="text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase block mb-8 font-sans">
                Years of Needle Craft
              </span>

              {/* Stats Mini Grid */}
              <div className="w-full grid grid-cols-2 gap-y-6 gap-x-4 border-t border-neutral-100 pt-8 text-left">
                <div>
                  <span className="font-serif text-2xl font-light text-neutral-900 block">1,500+</span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400">Custom Pieces</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-light text-neutral-900 block">100%</span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400">Anatomy Drawn</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-light text-neutral-900 block">Zero</span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400">Design Replicas</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-light text-neutral-900 block">Grade A</span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400">Clinical Hygiene</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6 text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
                "Tattoos are the visual language of the soul. They should be as unique and permanent as the stories they tell."
              </h3>
              
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-light">
                For over 8 years, Akhil Saju has been redefining the medium of custom tattooing. By combining modern minimalist designs, high-end realism, and complex blackwork, Akhil crafts bespoke tattoos that integrate seamlessly with the human anatomy. Each piece is treated as a high-art canvas, custom-drawn to mirror the client's individual narrative.
              </p>

              {/* Core Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C8A45D] flex items-center justify-center text-[#C8A45D] shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-neutral-900 mb-1">Clinical Safety</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      100% single-use medical grade materials, sterile autoclave systems, and advanced hygienic protection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C8A45D] flex items-center justify-center text-[#C8A45D] shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-neutral-900 mb-1">Bespoke Design</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      We never reuse tattoo designs. Every tattoo is handcrafted from scratch specifically for your anatomy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Signature Section */}
              <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-neutral-200/60 mt-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block mb-1">
                    artist signature
                  </span>
                  <span className="font-serif text-3xl italic text-[#C8A45D] font-bold select-none tracking-widest">
                    Akhil Saju
                  </span>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block mb-1">
                    location
                  </span>
                  <span className="text-xs font-semibold text-neutral-800 tracking-widest uppercase">
                    INKJECTOR ATELIER, INDIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
