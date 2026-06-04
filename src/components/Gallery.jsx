import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent } from './ui/dialog'

const galleryItems = [
  {
    id: 1,
    category: 'Sleeve',
    title: 'The Sacred Geometry Sleeve',
    img: '/images/gallery/sleeve.png',
    desc: 'Bespoke full-arm sacred geometry sleeve with detailed mandala nodes, dot shading, and custom anatomical flow.',
  },
  {
    id: 2,
    category: 'Minimal',
    title: 'Botanical Harmony',
    img: '/images/gallery/minimal.png',
    desc: 'Fine-line botanical illustration on the wrist, featuring elegant organic stems and subtle leaves.',
  },
  {
    id: 3,
    category: 'Portrait',
    title: 'Classical Hellenistic Portrait',
    img: '/images/gallery/portrait.png',
    desc: 'High-realism black and grey shading capturing the timeless proportions of classical Greek sculpture.',
  },
  {
    id: 4,
    category: 'Blackwork',
    title: 'The Mandala Alignment',
    img: '/images/process/tattoo_final.png',
    desc: 'Complex geometric mandala aligned to the body, utilizing dense black inks and high contrast patterns.',
  },
  {
    id: 5,
    category: 'Custom',
    title: 'Abstract Flowing Linework',
    img: '/images/gallery/custom.png',
    desc: 'Minimalist custom flow lines mapped to anatomy, embodying fluid energy and luxury design lines.',
  },
]

const categories = ['All', 'Sleeve', 'Portrait', 'Minimal', 'Blackwork', 'Custom']

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
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Luxury Dark Overlay */}
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/40 transition-colors duration-500 flex items-center justify-center">
                    <motion.div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ZoomIn className="h-5 w-5 text-neutral-900" />
                    </motion.div>
                  </div>
                </div>

                {/* Text Description Card */}
                <div className="p-6 bg-white border-t border-neutral-100 text-left">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#C8A45D] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-light text-neutral-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Luxury Lightbox Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center lightbox-overlay backdrop-blur-lg p-4">
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
              className="relative bg-white border border-neutral-100 shadow-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-10 h-10 border border-neutral-200 hover:border-neutral-950 flex items-center justify-center text-neutral-900 z-20 bg-white hover:bg-neutral-50 transition-colors duration-300"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Image Section */}
              <div className="md:col-span-7 bg-neutral-950 flex items-center justify-center relative aspect-[4/5] md:aspect-auto md:min-h-[500px]">
                <img
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover max-h-[80vh]"
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
