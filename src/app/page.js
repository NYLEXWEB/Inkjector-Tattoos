import React from 'react'
import ClientLayout from '@/components/ClientLayout'

import dynamic from 'next/dynamic'

// Subcomponents
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import TrustBar from '@/components/TrustBar'
import AboutArtist from '@/components/AboutArtist'
import Specialization from '@/components/Specialization'
import Gallery from '@/components/Gallery'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import FloatingWhatsapp from '@/components/FloatingWhatsapp'

// Dynamically import below-the-fold components to reduce initial bundle size (SSR: true preserves SEO indexing)
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true })
const MapSection = dynamic(() => import('@/components/MapSection'), { ssr: true })
const InstagramShowcase = dynamic(() => import('@/components/InstagramShowcase'), { ssr: true })
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), { ssr: true })

// JSON-LD Schemas
import JsonLd from '@/components/SEO/JsonLd'

export const metadata = {
  title: 'Inkjector Tattoos | Premium Tattoo Studio in Kozhikode Kerala',
  description: 'Inkjector Tattoos is a high-end luxury tattoo studio led by artist Akhil Saju in Kozhikode (Calicut), Kerala. We specialize in custom-tailored realism, geometric blackwork, fine-line, and safe cover-up tattoos in a sterile, private atelier.',
  keywords: [
    'tattoo studio kozhikode',
    'best tattoo studio kozhikode',
    'tattoo shop kozhikode',
    'tattoo artist kozhikode',
    'best tattoo artist kozhikode',
    'tattoo studio calicut',
    'tattoo shop calicut',
    'best tattoo studio kerala',
    'professional tattoo studio kerala',
    'custom tattoo kerala',
    'realistic tattoo kerala',
    'portrait tattoo kozhikode',
    'inkjector tattoos',
    'inkjector tattoos kozhikode',
    'inkjector tattoo studio'
  ],
  alternates: {
    canonical: 'https://www.inkjectortattoos.com',
  },
}

export default function Home() {
  return (
    <ClientLayout>
      <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#C8A45D]/30 selection:text-neutral-900">
        {/* Navigation */}
        <Navbar />

        {/* Global Structured Data JSON-LD */}
        <JsonLd type="all" />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <AboutUs />
          <TrustBar />
          <AboutArtist />
          <Specialization />
          <Gallery />
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
    </ClientLayout>
  )
}
