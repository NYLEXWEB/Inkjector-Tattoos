"use client"

import React, { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Subcomponents
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import AboutArtist from '@/components/AboutArtist'
import Specialization from '@/components/Specialization'
import Gallery from '@/components/Gallery'
import HorizontalShowcase from '@/components/HorizontalShowcase'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import MapSection from '@/components/MapSection'
import InstagramShowcase from '@/components/InstagramShowcase'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingWhatsapp from '@/components/FloatingWhatsapp'

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Scroll to hash links on initial load if present
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash)
      if (target) {
        setTimeout(() => {
          lenis.scrollTo(target, { offset: -50 })
        }, 500)
      }
    }

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#C8A45D]/30 selection:text-neutral-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <TrustBar />
        <AboutArtist />
        <Specialization />
        <Gallery />
        <HorizontalShowcase />
        <WhyChooseUs />
        <Process />
        <Reviews />
        <FAQ />
        <Contact />
        <MapSection />
        <InstagramShowcase />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call to Action */}
      <FloatingWhatsapp />
    </div>
  )
}
