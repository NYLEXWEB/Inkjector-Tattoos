"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent } from './ui/dialog'

const galleryItems = [
  {
    id: 1,
    category: 'Portrait',
    title: 'Custom Portrait Realism',
    img: '/images/gallery/custom-realism-portrait-tattoo.jpg',
    desc: 'Hyper-realistic custom portrait tattoo showcasing refined shading and lifelike detail.',
  },
  {
    id: 2,
    category: 'Sleeve',
    title: 'Intricate Sleeve Masterpiece',
    img: '/images/gallery/best-custom-sleeve-tattoo-kozhikode.jpg',
    desc: 'Large-scale custom sleeve tattoo showcasing flowing patterns and cohesive design lines.',
  },
  {
    id: 3,
    category: 'Sleeve',
    title: 'Geometric Flow Sleeve',
    img: '/images/gallery/sacred-geometry-sleeve-tattoo-kerala.jpg',
    desc: 'Intricate custom geometric sleeve tattoo combining detailed line weights and fluid dotwork patterns.',
  },
  {
    id: 4,
    category: 'Portrait',
    title: 'Hyper-Realistic Portrait',
    img: '/images/gallery/classical-greek-portrait-tattoo.jpg',
    desc: 'Stunning black and grey realism capturing detailed classical expressions and smooth gradients.',
  },
  {
    id: 5,
    category: 'Blackwork',
    title: 'Mandala Sacred Alignment',
    img: '/images/gallery/mandala-dotwork-backwork-tattoo.jpg',
    desc: 'Bold blackwork mandala custom-fit to natural body anatomy with high contrast shading.',
  },
  {
    id: 6,
    category: 'Custom',
    title: 'Abstract Geometric Shading',
    img: '/images/gallery/abstract-linework-wrist-tattoo.jpg',
    desc: 'Contemporary custom abstract design blending sharp geometric blocks with organic structures.',
  },
  {
    id: 7,
    category: 'Sleeve',
    title: 'Symmetrical Mandala Sleeve',
    img: '/images/gallery/neo-geometric-forearm-sleeve-tattoo.jpg',
    desc: 'Detailed upper-arm sleeve featuring repeating geometric elements and rich textured dotwork.',
  },
  {
    id: 8,
    category: 'Minimal',
    title: 'Celestial Harmony',
    img: '/images/gallery/ornamental-floral-shoulder-tattoo.jpg',
    desc: 'A clean, minimalist tattoo combining celestial elements and delicate fine-line script.',
  },
  {
    id: 9,
    category: 'Blackwork',
    title: 'Dark Ornamental Mandala',
    img: '/images/gallery/fine-line-lotus-petal-tattoo.jpg',
    desc: 'Intricate ornamental mandala pattern utilizing heavy black saturation and stark contrast borders.',
  },
  {
    id: 10,
    category: 'Custom',
    title: 'Biomechanical Linework',
    img: '/images/gallery/neoclassical-bust-portrait-tattoo.jpg',
    desc: 'Custom futuristic linework engineered to follow muscular curves and anatomical structures.',
  },
  {
    id: 11,
    category: 'Minimal',
    title: 'Patience & Butterfly Script',
    img: '/images/gallery/butterfly-script-fineline-tattoo.webp',
    desc: 'A custom fine-line butterfly composition integrated with elegant cursive script and astronomical accents.',
  },
  {
    id: 12,
    category: 'Minimal',
    title: 'Fineline Dragonfly',
    img: '/images/gallery/fineline-dragonfly-minimal-tattoo.webp',
    desc: 'A highly delicate and clean fineline dragonfly tattoo demonstrating subtle micro-shading.',
  },
  {
    id: 13,
    category: 'Custom',
    title: 'Watercolor Pawprints',
    img: '/images/gallery/watercolor-pawprint-custom-tattoo.webp',
    desc: 'Vibrant custom watercolor splash tattoo featuring delicate paw prints along the collarbone.',
  },
  {
    id: 14,
    category: 'Custom',
    title: 'Abstract Liquid Butterfly',
    img: '/images/gallery/abstract-liquid-butterfly-tattoo.webp',
    desc: 'Contemporary abstract tattoo fusing organic butterfly wings with fluid dark ink splashes.',
  },
  {
    id: 15,
    category: 'Minimal',
    title: 'Botanical Self-Hug',
    img: '/images/gallery/botanical-self-hug-minimal-tattoo.webp',
    desc: 'Elegant and emotive single-line outline of a self-hug intertwined with leafy botanical branches.',
  },
  {
    id: 16,
    category: 'Blackwork',
    title: 'Swallows Shaded Flight',
    img: '/images/gallery/traditional-swallow-blackwork-tattoo.webp',
    desc: 'Symmetrical traditional shaded swallow tattoos positioned elegantly on the lower calves.',
  },
  {
    id: 17,
    category: 'Piercing',
    title: 'Double Helix Curated Piercing',
    img: '/images/piercing/double-helix-ear-piercing-calicut.png',
    desc: 'Clean curated double helix project utilizing luxury solid gold studs for a sophisticated ear stack.',
  },
  {
    id: 18,
    category: 'Piercing',
    title: 'Precision Septum Clicker',
    img: '/images/piercing/precision-septum-piercing-kerala.png',
    desc: 'Perfect symmetry septum piercing styled with a solid titanium seamless ring.',
  },
  {
    id: 19,
    category: 'Piercing',
    title: 'Curated Helix Placement',
    img: '/images/piercing/curated-tragus-conch-piercing-titanium.png',
    desc: 'Premium tragus and conch piercing combo featuring custom-selected internally threaded studs.',
  },
]


const categories = ['All', 'Sleeve', 'Portrait', 'Minimal', 'Blackwork', 'Custom', 'Piercing']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  )

  const openLightbox = (item) => {
    const index = galleryItems.findIndex((x) => x.id === item.id)
    setLightboxIndex(index)
    setSelectedItem(item)
  }

  const navigateLightbox = (direction) => {
    let newIndex = lightboxIndex + direction
    if (newIndex < 0) newIndex = galleryItems.length - 1
    if (newIndex >= galleryItems.length) newIndex = 0
    setLightboxIndex(newIndex)
    setSelectedItem(galleryItems[newIndex])
  }

  return (
    <section id="gallery" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
             bespoke masterpieces
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
            Immersive Gallery
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A45D] mx-auto mt-6"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-[0.2em] font-semibold pb-2 border-b-2 transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-[#C8A45D] text-neutral-900'
                  : 'border-transparent text-neutral-400 hover:text-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry-like Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                key={item.id}
                className="group cursor-pointer relative overflow-hidden bg-neutral-50 border border-neutral-100 shadow-sm"
                onClick={() => openLightbox(item)}
              >
                {/* Image Container with Hover Scale */}
                <div className="aspect-[3/4] w-full overflow-hidden relative">
                  <Image
                    src={item.img}
                    alt={`${item.title} - Custom Tattoo Art at Inkjector Tattoos Kozhikode Kerala`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Luxury Dark Overlay */}
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/40 transition-colors duration-500 flex items-center justify-center">
                    <motion.div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ZoomIn className="h-5 w-5 text-neutral-900" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Luxury Lightbox Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center lightbox-overlay backdrop-blur-lg p-4 overflow-y-auto">
            {/* Background Closer */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setSelectedItem(null)}
            ></div>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white border border-neutral-100 shadow-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 overflow-y-auto md:overflow-hidden max-h-[90vh] md:max-h-none z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-10 h-10 border border-neutral-200 hover:border-neutral-950 flex items-center justify-center text-neutral-900 z-20 bg-white hover:bg-neutral-50 transition-colors duration-300"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Image Section */}
              <div className="md:col-span-7 bg-neutral-950 flex items-center justify-center relative aspect-[4/3] md:aspect-auto md:min-h-[500px]">
                <Image
                  src={selectedItem.img}
                  alt={`${selectedItem.title} - Portrayed by Akhil Saju at Inkjector Tattoos Calicut`}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover max-h-[45vh] md:max-h-[80vh]"
                />

                {/* Left/Right Navigation Arrows on Image */}
                <button
                  onClick={() => navigateLightbox(-1)}
                  className="absolute left-4 w-10 h-10 rounded-full bg-white/85 hover:bg-white flex items-center justify-center text-neutral-950 shadow-md transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => navigateLightbox(1)}
                  className="absolute right-4 w-10 h-10 rounded-full bg-white/85 hover:bg-white flex items-center justify-center text-neutral-950 shadow-md transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Right Details Section */}
              <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between text-left bg-white">
                <div className="mt-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A45D] font-bold block mb-2">
                    {selectedItem.category} Portfolio
                  </span>
                  <h3 className="font-serif text-3xl font-light text-neutral-900 leading-tight mb-4">
                    {selectedItem.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-neutral-200 mb-6"></div>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-light mb-8">
                    {selectedItem.desc}
                  </p>
                </div>

                <div className="border-t border-neutral-100 pt-6">
                  <div className="flex justify-between items-center text-[10px] text-neutral-400 tracking-wider">
                    <span>ARTIST: AKHIL SAJU</span>
                    <span>STUDIO: INKJECTOR</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedItem(null)
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full text-center py-4 border border-[#C8A45D] text-xs uppercase tracking-[0.25em] font-semibold text-neutral-900 hover:bg-[#C8A45D] hover:text-white transition-colors duration-300 mt-6"
                  >
                    Inquire About This Design
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
