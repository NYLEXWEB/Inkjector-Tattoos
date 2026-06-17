import React from 'react'
import ClientLayout from '@/components/ClientLayout'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Specialization from '@/components/Specialization'
import Process from '@/components/Process'
import Footer from '@/components/Footer'
import FloatingWhatsapp from '@/components/FloatingWhatsapp'
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema'

const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true })

export const metadata = {
  title: 'Professional Tattoo Services Kozhikode | Custom & Cover-Up Tattoos Kerala',
  description: 'Explore bespoke design options at Inkjector Tattoos Kozhikode. Specialized in detailed realism, custom geometric sleeves, fine-line botanicals, safe cover-ups, and sterile piercings.',
  keywords: [
    'professional tattoo services kerala',
    'custom tattoo design kerala',
    'cover up tattoo kozhikode',
    'black and grey tattoo kerala',
    'realistic tattoo calicut',
    'hygienic tattoo studio kerala'
  ],
  alternates: {
    canonical: 'https://www.inkjectortattoos.com/services',
  },
}

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ]

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#C8A45D]/30 selection:text-neutral-900">
        <Navbar />
        <BreadcrumbSchema items={breadcrumbItems} />
        <main className="pt-16">
          <Specialization />
          <Process />
          <FAQ />
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </ClientLayout>
  )
}
