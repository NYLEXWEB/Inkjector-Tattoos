"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section id="about-us" className="py-24 bg-[#F7F7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Overlapping Images */}
          <div className="lg:col-span-6 relative flex justify-start items-center pb-12 lg:pb-0">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              
              {/* Base Vertical Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-[70%] aspect-[3/4.2] overflow-hidden shadow-xl border border-neutral-200/40 bg-neutral-100 group"
              >
                <Image
                  src="/images/about/vibrant-color-blend-tattoo.jpg"
                  alt="Bespoke Tattoo Forearm Art Calicut by Akhil Saju at Inkjector Tattoos"
                  fill
                  sizes="(max-width: 768px) 70vw, 35vw"
                  className="object-cover grayscale contrast-[1.12] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </motion.div>

              {/* Overlapping Offset Square Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="absolute -bottom-8 right-0 w-[55%] aspect-square overflow-hidden shadow-2xl border-[6px] sm:border-8 border-white bg-neutral-100 z-10 group"
              >
                <Image
                  src="/images/about/miniature-detailed-micro-tattoo.webp"
                  alt="Fine Line Custom Tattooing Session Calicut at Inkjector Tattoos Kozhikode"
                  fill
                  sizes="(max-width: 768px) 55vw, 27vw"
                  className="object-cover grayscale contrast-[1.08] brightness-[0.95] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out"
                />
              </motion.div>

            </div>
          </div>

          {/* Right Column: Text & Editorial Content */}
          <div className="lg:col-span-6 text-left space-y-6">
            {/* Subheading */}
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block">
              01 // ABOUT US
            </span>
            
            {/* Large Editorial Title */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] font-light text-neutral-900 leading-tight uppercase">
              Redefining <br />
              <span className="italic">the Atelier</span> <br />
              Experience.
            </h2>

            {/* Gold Divider Line */}
            <div className="w-12 h-[1px] bg-[#C8A45D] my-6"></div>

            {/* Paragraph 1 */}
            <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed font-sans">
              Inkjector Tattoos is born from the convergence of fine art, couture aesthetics, and master-level body ornamentation. Established as the premier <strong className="font-medium text-neutral-800">Tattoo Studio in Kozhikode, Kerala</strong>, we reject the loud tattoo shop paradigm. In its place, we have built a sanctuary—a silent luxury space of premium design and museum-like focus.
            </p>

            {/* Pull Quote */}
            <div className="border-l-2 border-[#C8A45D] pl-6 py-1 my-8">
              <p className="font-serif text-neutral-800 text-base md:text-lg italic font-light leading-relaxed">
                &ldquo;We do not merely create tattoos; we design permanent visual narratives that harmonize with the contours of the human canvas.&rdquo;
              </p>
            </div>

            {/* Paragraph 2 */}
            <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed font-sans">
              As a renowned <strong className="font-medium text-neutral-800">Tattoo Shop Calicut</strong> trusted by clients seeking the <strong className="font-medium text-neutral-800">Best Tattoo Artist Calicut</strong>, we ensure that each client is afforded complete privacy, undivided focus, and a bespoke artistic dialogue at our <strong className="font-medium text-neutral-800">Hygienic Tattoo Studio Calicut</strong>.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
