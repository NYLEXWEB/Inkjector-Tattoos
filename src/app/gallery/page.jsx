import React from 'react'
import ClientLayout from '@/components/ClientLayout'
import Navbar from '@/components/Navbar'
import Gallery from '@/components/Gallery'
import InstagramShowcase from '@/components/InstagramShowcase'
import Footer from '@/components/Footer'
import FloatingWhatsapp from '@/components/FloatingWhatsapp'
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema'

export const metadata = {
  title: 'Immersive Portfolio | Custom Tattoos & Piercings in Kozhikode',
  description: 'Browse the bespoke portfolio of Akhil Saju at Inkjector Tattoos Kozhikode. Featuring classical Hellenistic realism, geometric mandalas, minimalist script, and premium titanium ear stacks.',
  keywords: [
    'tattoo gallery kozhikode',
    'sleeve tattoo kozhikode',
    'portrait tattoo kozhikode',
    'minimal tattoo kerala',
    'titanium piercing calicut'
  ],
  alternates: {
    canonical: 'https://www.inkjectortattoos.com/gallery',
  },
}

export default function GalleryPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '/gallery' }
  ]

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#C8A45D]/30 selection:text-neutral-900">
        <Navbar />
        <BreadcrumbSchema items={breadcrumbItems} />
        <main className="pt-16">
          <Gallery />
          <InstagramShowcase />
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </ClientLayout>
  )
}
