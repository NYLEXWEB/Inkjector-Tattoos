import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToGallery = (e) => {
    e.preventDefault()
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative h-screen lg:h-screen flex items-center justify-center pt-24 pb-12 lg:py-0 overflow-hidden bg-white"
    >
      {/* Premium Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/hero-section.png"
          alt="Inkjector Tattoos Studio Artwork"
          className="w-full h-full object-cover object-right md:object-right-top lg:object-right"
        />
        {/* Responsive overlay mask: active on mobile screens for legibility, but completely transparent on desktop screens */}
        <div className="absolute inset-0 bg-white/90 md:bg-transparent"></div>
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
            <span className="w-8 h-[1px] bg-[#C8A45D]"></span>
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase">
              PREMIUM TATTOO STUDIO
            </span>
          </motion.div>

          {/* Massive Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl text-neutral-900 leading-[1.05] tracking-tight mb-5 font-light">
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
            className="text-neutral-500 text-sm sm:text-base tracking-wide max-w-lg mb-6 leading-relaxed font-light font-sans"
          >
            Inkjector Tattoos is a high-end private tattoo atelier led by master artist Akhil Saju with{' '}
            <strong className="text-neutral-950 font-medium">8+ Years of Professional Experience</strong>. We create handcrafted, custom tattoo art tailored exclusively to your unique identity.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-neutral-950 text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#C8A45D] transition-all duration-300 group shadow-md"
            >
              Book Consultation
              <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#gallery"
              onClick={scrollToGallery}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-neutral-200 bg-white text-neutral-950 text-xs uppercase tracking-[0.25em] font-semibold hover:border-neutral-950 hover:bg-neutral-50/50 transition-all duration-300"
            >
              View Portfolio
            </a>
          </motion.div>

          {/* Floating Artist Experience Stats Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-6 border-t border-neutral-100 pt-5 max-w-md font-sans"
          >
            <div>
              <div className="font-serif text-3xl font-light text-neutral-900">8+ Years</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1 font-semibold">Master Craftsmanship</div>
            </div>
            <div className="w-[1px] h-8 bg-neutral-200"></div>
            <div>
              <div className="font-serif text-3xl font-light text-neutral-900">100%</div>
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
