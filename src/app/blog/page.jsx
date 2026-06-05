import React from 'react'
import Link from 'next/link'
import ClientLayout from '@/components/ClientLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsapp from '@/components/FloatingWhatsapp'
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema'

export const metadata = {
  title: 'Tattoo Blog & Insights | Inkjector Tattoos Kozhikode',
  description: 'Read the latest guides and tattoo culture insights from Inkjector Tattoos Calicut. Explore guides on aftercare, pricing, healing stages, and detailed tattoo designs in Kerala.',
  keywords: [
    'tattoo blog kozhikode',
    'tattoo design ideas kerala',
    'tattoo cost in kerala',
    'best tattoo studio in kozhikode',
    'tattoo calicut insights'
  ],
  alternates: {
    canonical: 'https://www.inkjectortattoos.com/blog',
  },
}

const blogPosts = [
  {
    slug: 'best-tattoo-studio-kozhikode',
    title: 'Finding the Best Tattoo Studio in Kozhikode: What to Look For',
    excerpt: 'A comprehensive checklist on hygiene, artist portfolios, and studio environments to help you choose the best tattoo parlor in Calicut.',
    date: 'June 5, 2026',
    readTime: '5 min read'
  },
  {
    slug: 'tattoo-aftercare-guide',
    title: 'Complete Tattoo Aftercare Guide: Protecting Your New Ink',
    excerpt: 'Step-by-step instructions on washing, protective second-skin film usage, organic moisturizers, and actions to avoid for safe healing.',
    date: 'May 28, 2026',
    readTime: '6 min read'
  },
  {
    slug: 'tattoo-cost-kerala',
    title: 'Tattoo Cost in Kerala: Pricing Structures & Flat Rates Decoded',
    excerpt: 'Understand how custom tattoo pricing is calculated in Kozhikode and Cochin based on size, complexity, placement, and professional setup.',
    date: 'May 14, 2026',
    readTime: '4 min read'
  },
  {
    slug: 'tattoo-healing-process',
    title: 'Understanding the Tattoo Healing Process: Day-by-Day Stages',
    excerpt: 'From initial redness and plasma collection under the film to the peeling and itching phase. Know what to expect during healing.',
    date: 'April 30, 2026',
    readTime: '7 min read'
  },
  {
    slug: 'realistic-tattoo-guide',
    title: 'Realistic Tattoo Guide: Custom Shading, Shading Weight & Contours',
    excerpt: 'Detailed analysis on realistic design flow, mapping classical structures to body anatomy, and contrast principles.',
    date: 'April 15, 2026',
    readTime: '5 min read'
  },
  {
    slug: 'portrait-tattoo-guide',
    title: 'Hellenistic Portrait Tattoos: Capturing Shading & Lifelike Anatomy',
    excerpt: 'How Greek sculptures and neoclassical illustrations are scaled and rendered as permanent black and grey masterpieces on skin.',
    date: 'March 29, 2026',
    readTime: '6 min read'
  },
  {
    slug: 'custom-tattoo-design-ideas',
    title: 'Custom Tattoo Design Ideas: Blending Sacred Geometry & Florals',
    excerpt: 'Inspiration on custom linework flow, mandala alignment, and organic floral placements to create unique visual narratives.',
    date: 'March 10, 2026',
    readTime: '5 min read'
  }
]

export default function BlogIndexPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#C8A45D]/30 selection:text-neutral-900">
        <Navbar />
        <BreadcrumbSchema items={breadcrumbItems} />
        
        <main className="pt-32 pb-24 max-w-5xl mx-auto px-6 md:px-12 text-left">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
              Inkjector Journal
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
              Tattoo Culture &amp; Guides
            </h1>
            <div className="w-12 h-[1px] bg-[#C8A45D] mx-auto mt-6"></div>
          </div>

          {/* Grid List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col justify-between p-6 sm:p-8 border border-neutral-100 bg-[#F7F7F5] hover:border-neutral-900 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-[#C8A45D] font-semibold">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="font-serif text-xl sm:text-2xl font-light text-neutral-900 leading-snug group-hover:text-[#C8A45D] transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-light font-sans line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-neutral-200/50 mt-6">
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-neutral-900 hover:text-[#C8A45D] transition-colors font-sans">
                    Read Full Article <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </main>

        <Footer />
        <FloatingWhatsapp />
      </div>
    </ClientLayout>
  )
}
