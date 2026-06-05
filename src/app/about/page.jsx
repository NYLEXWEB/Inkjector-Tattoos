import React from 'react'
import ClientLayout from '@/components/ClientLayout'
import Navbar from '@/components/Navbar'
import AboutUs from '@/components/AboutUs'
import AboutArtist from '@/components/AboutArtist'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'
import FloatingWhatsapp from '@/components/FloatingWhatsapp'
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema'

export const metadata = {
  title: 'About Akhil Saju Atelier | Best Tattoo Artist Kozhikode',
  description: 'Inkjector Tattoos Calicut is led by certified master artist Akhil Saju with 8+ years of expertise. Learn about our luxury private atelier and medical-grade sterile procedures.',
  keywords: [
    'best tattoo artist kozhikode',
    'tattoo artist calicut',
    'certified tattoo artist kerala',
    'inkjector tattoos team',
    'akhil saju tattoo artist'
  ],
  alternates: {
    canonical: 'https://www.inkjectortattoos.com/about',
  },
}

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#C8A45D]/30 selection:text-neutral-900">
        <Navbar />
        <BreadcrumbSchema items={breadcrumbItems} />
        <main className="pt-16">
          <AboutUs />
          <AboutArtist />
          <WhyChooseUs />
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </ClientLayout>
  )
}
