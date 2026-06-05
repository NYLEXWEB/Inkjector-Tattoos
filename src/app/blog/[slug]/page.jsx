import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ClientLayout from '@/components/ClientLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsapp from '@/components/FloatingWhatsapp'
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema'

const blogData = {
  'best-tattoo-studio-kozhikode': {
    title: 'Finding the Best Tattoo Studio in Kozhikode: What to Look For',
    description: 'Learn how to choose the best tattoo parlor in Kozhikode, Calicut, Kerala. Features advice on professional safety, certified artists, and studio environments.',
    keywords: ['best tattoo studio kozhikode', 'tattoo shop calicut', 'professional tattoo studio kerala', 'tattoo artist kozhikode'],
    date: 'June 5, 2026',
    readTime: '5 min read',
    content: (
      <>
        <p>
          Selecting a professional studio is the most critical decision when planning to get permanently inked. In Kerala, the tattoo culture has grown exponentially, making it essential to distinguish between a standard commercial shop and a premium, high-hygiene private atelier.
        </p>
        <h2>1. Surgical-Grade Hygiene Protocols</h2>
        <p>
          Your health should always come first. A premium studio like **Inkjector Tattoos Kozhikode** operates under strict medical hygiene standards. Ensure the studio you choose utilizes heat-autoclaved grips, brand-new single-use disposable needles from certified brands (like Cheyenne and Bishop), and medical barriers for all contact surfaces.
        </p>
        <h2>2. Dynamic Custom Portfolios</h2>
        <p>
          Avoid shops that rely on stock designs or flash sheets on the walls. The **best tattoo artist in Kozhikode** should showcase bespoke illustrations tailored specifically to client anatomy. Akhil Saju’s portfolio displays unique geometric flow lines, fine-line floral scripts, and classical Hellenistic portraits that highlight master craftsmanship.
        </p>
        <h2>3. A Relaxing, Zen-Like Private Environment</h2>
        <p>
          The atmosphere plays a massive role in your pain tolerance and overall memory of the session. Look for a private, appointment-only space designed for comfort and absolute privacy, offering a peaceful sanctuary far removed from loud, crowded street-side shops.
        </p>
      </>
    )
  },
  'tattoo-aftercare-guide': {
    title: 'Complete Tattoo Aftercare Guide: Protecting Your New Ink',
    description: 'The definitive tattoo aftercare guide. Step-by-step instructions on protective films, mild cleansers, organic moisturizers, and warning signs of infections.',
    keywords: ['tattoo aftercare guide', 'how to care for new tattoo', 'tattoo healing process calicut', 'second skin tattoo care'],
    date: 'May 28, 2026',
    readTime: '6 min read',
    content: (
      <>
        <p>
          Congratulations on getting a new tattoo! While the application is completed, the final outcome depends entirely on how you treat the healing skin. Let's outline the medical-grade aftercare protocol.
        </p>
        <h2>1. Leave the Second-Skin Barrier On</h2>
        <p>
          We apply a waterproof, transparent second-skin protective film immediately after your session. Keep this on for <strong>3 to 5 days</strong>. It locks out bacteria while retaining your body's natural healing fluids.
        </p>
        <h2>2. Gentle Daily Washing</h2>
        <p>
          Once you peel the film off slowly under running warm water, wash the area gently using your clean hands and mild, fragrance-free liquid soap. Do not scrub or pick at any dry flakes. Pat dry with a fresh paper towel and let air-dry.
        </p>
        <h2>3. Micro-Hydration</h2>
        <p>
          Apply a micro-thin layer of custom organic aftercare ointment or a fragrance-free moisturizing lotion 2-3 times daily. Avoid heavy petroleum-based creams like Vaseline, which smother the skin and trap heat.
        </p>
      </>
    )
  },
  'tattoo-cost-kerala': {
    title: 'Tattoo Cost in Kerala: Pricing Structures & Flat Rates Decoded',
    description: 'Understand how professional custom tattoo prices are calculated in Kozhikode, Calicut, and Kerala. Demystifying sizing, custom drawing fees, and flat-rates.',
    keywords: ['tattoo cost in kerala', 'tattoo price in kozhikode', 'affordable tattoo studio calicut', 'custom tattoo pricing'],
    date: 'May 14, 2026',
    readTime: '4 min read',
    content: (
      <>
        <p>
          One of the most common questions clients ask is: \"How much will my tattoo cost?\" Professional tattooing in Kerala follows clear structures based on design layout, size, and artist experience.
        </p>
        <h2>Flat-Rate vs. Hourly Quotes</h2>
        <p>
          While some street shops charge by the square inch, high-end studios like **Inkjector Tattoos Kozhikode** charge a transparent flat-rate quote based on design approval. This ensures you know the exact cost before the needle touches your skin, regardless of the hours taken.
        </p>
        <h2>Factors Influencing Price</h2>
        <p>
          - **Size and Complexity:** Intricate sacred geometry, fine-dot mandala shading, and highly rendered realism require hours of detail work and multiple needle group setups.
          - **Anatomical Placement:** Highly elastic or curved areas (like ribs, neck, or full sleeves) require expert stretching techniques and specialized equipment.
          - **Custom Artwork Fee:** Designing original concepts from scratch requires hours of conceptual sketching on a digital canvas before the session.
        </p>
      </>
    )
  },
  'tattoo-healing-process': {
    title: 'Understanding the Tattoo Healing Process: Day-by-Day Stages',
    description: 'Explore the day-by-day tattoo healing stages from raw scabs to peeled skin. Guide on itch management and safe organic ointments.',
    keywords: ['tattoo healing process', 'how long does a tattoo take to heal', 'tattoo stages calicut', 'peeling tattoo guide'],
    date: 'April 30, 2026',
    readTime: '7 min read',
    content: (
      <>
        <p>
          A tattoo is essentially a controlled medical abrasion that needs to heal like any other skin wound. Understanding the stages of healing prevents panic and keeps your design safe.
        </p>
        <h2>Days 1 - 3: The Inflammation Phase</h2>
        <p>
          The area will feel warm, slightly sore, and show redness. Plasma and excess ink will collect under the second-skin film. This fluid is natural and contains white blood cells that fight off potential infections.
        </p>
        <h2>Days 4 - 10: The Peeling &amp; Itching Phase</h2>
        <p>
          The skin will begin to dry, peel, and flake. It will itch intensely. **Do not pick or scratch the flakes.** Scratching pulls ink out of the healing layers, leaving patchiness in the final design. Apply cold compresses or light lotion to soothe the itch.
        </p>
        <h2>Days 11 - 21: The Silver Skin Stage</h2>
        <p>
          The top flakes have shed, exposing a slightly dull, cloudy layer called silver skin. Continue applying moisturizer to allow the skin barrier to fully regenerate. Your design will show its true vibrancy after 4-6 weeks.
        </p>
      </>
    )
  },
  'realistic-tattoo-guide': {
    title: 'Realistic Tattoo Guide: Custom Shading, Shading Weight &amp; Contours',
    description: 'Bespoke realism guide. How high contrast ratios, shading gradients, and lighting sources are used to render realistic tattoos on skin.',
    keywords: ['realistic tattoo kerala', 'realistic tattoo guide', 'black and grey realism calicut', 'portrait tattoo kerala'],
    date: 'April 15, 2026',
    readTime: '5 min read',
    content: (
      <>
        <p>
          Realism is one of the most demanding styles in modern tattooing. It requires a profound understanding of classical drawing fundamentals, relative lighting sources, and gray-scale values.
        </p>
        <h2>1. Shading Gradients and Contrast</h2>
        <p>
          Unlike line-heavy styles, realism relies on seamless tonal shifts to create the illusion of three-dimensional depth. Master artists utilize dilution systems to blend solid black into soft silver washes, capturing textures like skin, animal fur, or cold marble.
        </p>
        <h2>2. Anatomic Flow and Alignment</h2>
        <p>
          A realistic piece must be sized and rotated to match the natural curves of the muscles. For instance, a lion portrait on the forearm must widen with the muscle bellies and narrow near the wrist, creating an organic alignment that flows as the client moves.
        </p>
      </>
    )
  },
  'portrait-tattoo-guide': {
    title: 'Hellenistic Portrait Tattoos: Capturing Shading &amp; Lifelike Anatomy',
    description: 'Guide on Hellenistic portrait tattoos. How Greek statues, classical proportions, and realistic shading are adapted to human skin by Akhil Saju.',
    keywords: ['portrait tattoo kozhikode', 'portrait tattoo guide', 'hellenistic realism kerala', 'greek statue tattoo'],
    date: 'March 29, 2026',
    readTime: '6 min read',
    content: (
      <>
        <p>
          Classical Greek statues and Hellenistic portraiture remain a popular design choice due to their timeless beauty and dramatic contrast ratios. Translating these marble figures onto the skin requires expert precision.
        </p>
        <h2>1. Preserving Classical Proportions</h2>
        <p>
          Capturing lifelike portraits requires strict adherence to mathematical proportions. An artist must precisely calculate the distance between features (eyes, nose, mouth) to maintain a realistic look, even as the skin stretches over joints.
        </p>
        <h2>2. Rendering Marble Texture</h2>
        <p>
          To make a portrait look like cold, sculpted marble rather than a flat drawing, the artist must use highlights, high-contrast drop shadows, and soft ambient reflections. This creates depth and makes the design look three-dimensional.
        </p>
      </>
    )
  },
  'custom-tattoo-design-ideas': {
    title: 'Custom Tattoo Design Ideas: Blending Sacred Geometry &amp; Florals',
    description: 'Inspirational tattoo designs blending geometry and florals. Custom layouts that fit anatomical lines, curated by Inkjector Tattoos Calicut.',
    keywords: ['custom tattoo design kerala', 'sacred geometry sleeve', 'floral tattoo kozhikode', 'minimalist tattoo calicut'],
    date: 'March 10, 2026',
    readTime: '5 min read',
    content: (
      <>
        <p>
          Blending geometric structures with organic flora represents a stunning stylistic fusion. While geometry provides stability and structure, floral designs offer organic movement and elegance.
        </p>
        <h2>1. The Geometry Core</h2>
        <p>
          Mandala nodes, Fibonacci spirals, and vector lines act as the structural framework. They are aligned to the major anatomical axes, such as the spine, chest plate, or forearm center, establishing a solid layout.
        </p>
        <h2>2. Cascading Organic Elements</h2>
        <p>
          Fine-line leaves, botanical stems, and blooming florals are draped over the geometric base. They curve around shoulders, wrists, or knees, softening the hard geometric angles and creating a design that harmonizes with the human canvas.
        </p>
      </>
    )
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = blogData[slug]

  if (!post) {
    return {
      title: 'Post Not Found | Inkjector Tattoos',
      description: 'The requested blog post was not found.'
    }
  }

  return {
    title: `${post.title} | Inkjector Tattoos`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.inkjectortattoos.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://www.inkjectortattoos.com/blog/${slug}`,
      siteName: 'Inkjector Tattoos',
      images: [
        {
          url: 'https://www.inkjectortattoos.com/images/hero-og.jpg',
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['https://www.inkjectortattoos.com/images/hero-og.jpg']
    }
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = blogData[slug]

  if (!post) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` }
  ]

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": new Date(post.date).toISOString().split('T')[0],
    "author": {
      "@type": "Person",
      "name": "Akhil Saju"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Inkjector Tattoos",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.inkjectortattoos.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.inkjectortattoos.com/blog/${slug}`
    }
  }

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#C8A45D]/30 selection:text-neutral-900">
        <Navbar />
        <BreadcrumbSchema items={breadcrumbItems} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        
        <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
          {/* Post Header */}
          <div className="space-y-4 text-left mb-12">
            <div className="flex gap-4 items-center text-xs text-[#C8A45D] font-semibold tracking-wider font-sans uppercase">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-neutral-900 leading-tight">
              {post.title}
            </h1>
            
            <div className="w-16 h-[1px] bg-[#C8A45D] mt-6"></div>
          </div>

          {/* Post Content */}
          <div className="prose prose-neutral max-w-none text-left space-y-6 text-neutral-600 font-sans leading-relaxed font-light
            prose-headings:font-serif prose-headings:font-light prose-headings:text-neutral-950 prose-headings:mt-12 prose-headings:mb-4
            prose-h2:text-2xl prose-h2:md:text-3xl
            prose-strong:font-semibold prose-strong:text-neutral-900
            prose-a:text-[#C8A45D] prose-a:underline hover:prose-a:text-neutral-950 transition-colors">
            {post.content}
          </div>

          {/* Footer Navigation */}
          <div className="border-t border-neutral-100 pt-8 mt-16 flex justify-between items-center">
            <Link href="/blog" className="text-xs uppercase tracking-widest font-bold text-neutral-900 hover:text-[#C8A45D] transition-colors font-sans">
              ← Back to Blog
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-neutral-950 hover:bg-[#C8A45D] text-white text-xs uppercase tracking-widest font-bold transition-all duration-300 font-sans">
              Inquire Session
            </Link>
          </div>
        </main>

        <Footer />
        <FloatingWhatsapp />
      </div>
    </ClientLayout>
  )
}
