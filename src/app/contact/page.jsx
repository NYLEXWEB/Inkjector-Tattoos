import React from 'react'
import ClientLayout from '@/components/ClientLayout'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import MapSection from '@/components/MapSection'
import Footer from '@/components/Footer'
import FloatingWhatsapp from '@/components/FloatingWhatsapp'
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema'

export const metadata = {
  title: 'Book a Tattoo Appointment | Best Tattoo Shop in Calicut Kerala',
  description: 'Book a private consultation with Akhil Saju at Inkjector Tattoos Kozhikode. Submit your design concept and secure your session in our hygienic, high-end studio atelier.',
  keywords: [
    'tattoo shop near me',
    'tattoo studio near me',
    'tattoo consultation kozhikode',
    'book tattoo appointment kerala',
    'inkjector tattoos contact number'
  ],
  alternates: {
    canonical: 'https://www.inkjectortattoos.com/contact',
  },
}

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ]

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#C8A45D]/30 selection:text-neutral-900">
        <Navbar />
        <BreadcrumbSchema items={breadcrumbItems} />
        <main className="pt-16">
          <Contact />
          <MapSection />
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </ClientLayout>
  )
}
