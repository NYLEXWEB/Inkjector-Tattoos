"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-neutral-950"
    >
      {/* Premium Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none w-full h-full">
        <Image
          src="/hero-section.png"
          alt="Inkjector Tattoos Kozhikode Studio Artwork - Akhil Saju Masterpiece"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-right-top lg:object-right"
        />
        {/* Cinematic dark overlay to make text pop with a high-end premium look */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/70 to-neutral-950/90 md:bg-gradient-to-r md:from-neutral-950/95 md:via-neutral-950/80 md:to-transparent" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 pt-10 lg:pt-14">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-4"
          >
          
          </motion.div>

          {/* Massive Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl text-white leading-[1.05] tracking-tight mb-5 font-light">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="block"
            >
              Your Story.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="block"
            >
              Your Identity.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="block text-[#C8A45D]"
            >
              Your Tattoo.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-neutral-300 text-sm sm:text-base tracking-wide max-w-lg mb-6 leading-relaxed font-light font-sans"
          >
            Inkjector Tattoos is a high-end private tattoo atelier led by artist Akhil Saju with{' '}
            <strong className="text-[#C8A45D] font-medium">8+ Years of Professional Experience</strong>. We create handcrafted, custom tattoo art tailored exclusively to your unique identity in Kozhikode, Calicut, Kerala.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C8A45D] text-neutral-950 text-xs uppercase tracking-[0.25em] font-bold hover:bg-white hover:text-neutral-950 transition-all duration-300 group shadow-md"
            >
              Book Consultation
              <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 bg-transparent text-white text-xs uppercase tracking-[0.25em] font-semibold hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* Floating Artist Experience Stats Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-6 border-t border-white/10 pt-5 max-w-md font-sans"
          >
            <div>
              <div className="font-serif text-3xl font-light text-white">8+ Years</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1 font-semibold">Master Craftsmanship</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div>
              <div className="font-serif text-3xl font-light text-white">100%</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1 font-semibold">Custom Handcrafted</div>
            </div>
          </motion.div>
        </div>

        {/* Right side: Kept empty to let the background tattoo masterpiece show fully on desktop */}
        <div className="lg:col-span-5 hidden lg:block" />
      </div>
    </section>
  )
}
