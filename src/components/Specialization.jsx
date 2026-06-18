"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import Image from 'next/image'
import { Dialog, DialogContent } from './ui/dialog'

const specialties = [
  {
    num: '01',
    title: 'Portrait',
    desc: 'Detailed, lifelike portraiture capturing human expressions, classical busts, and realistic details with rich gradients.',
    img: '/images/gallery/custom-realism-portrait-tattoo.jpg',
  },
  {
    num: '02',
    title: 'Realism',
    desc: 'Hyper-realistic portraiture and organic textures translated beautifully on skin with natural depth and smooth gradients.',
    img: '/images/gallery/hyper-realistic-custom-tattoo.jpg',
  },
  {
    num: '03',
    title: 'Minimal Tattoos',
    desc: 'Fine-line botanical branches, geometric symbols, and delicate single-needle art that feel highly artistic and weightless.',
    img: '/images/gallery/fineline-dragonfly-minimal-tattoo.webp',
  },
  {
    num: '04',
    title: 'Colour Tattoo',
    desc: 'Vibrant and expressive designs utilizing custom color palettes, smooth blending, and saturated ink to bring art to life.',
    img: '/images/about/vibrant-color-blend-tattoo.jpg',
  },
  {
    num: '05',
    title: 'Miniature',
    desc: 'Tiny, highly detailed micro-designs, small fine-line symbols, and delicate minimalist art with clean execution.',
    img: '/images/about/miniature-detailed-micro-tattoo.webp',
  },
  {
    num: '06',
    title: 'Sleeve Tattoos',
    desc: 'Large-scale cohesive artwork spanning full limbs, engineered with precise anatomical flow and thematic continuity.',
    img: '/images/gallery/neo-geometric-forearm-sleeve-tattoo.jpg',
  },
]

export default function Specialization() {
  const [selectedSpec, setSelectedSpec] = useState(null)

  return (
    <section className="py-24 bg-white border-b border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="text-left max-w-xl">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
              OUR ABILITIES
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
              Artistic Specializations
            </h2>
          </div>
          <div className="text-left md:text-right max-w-md">
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Every design is conceptualized from scratch. We specialize in mapping intricate motifs that blend anatomical harmony with luxury editorial artwork.
            </p>
          </div>
        </div>

        {/* Specialization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-neutral-100 border border-neutral-100">
          {specialties.map((spec) => (
            <div
              key={spec.num}
              onClick={() => setSelectedSpec(spec)}
              className="bg-white p-8 sm:p-10 md:p-12 hover:bg-neutral-50/50 transition-all duration-500 relative group overflow-hidden flex flex-col justify-between aspect-auto lg:aspect-[4/3] text-left cursor-pointer"
            >
              {/* Gold Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C8A45D] transition-all duration-500 group-hover:w-full"></div>

              {/* Number and Icon Row */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-serif text-3xl font-light text-neutral-300 group-hover:text-[#C8A45D] transition-colors duration-300">
                  {spec.num}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedSpec(spec)
                  }}
                  className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:border-[#C8A45D] group-hover:text-[#C8A45D] transition-all duration-300 focus:outline-none"
                >
                  <Plus className="h-4 w-4 transform group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Text Blocks */}
              <div>
                <h3 className="font-serif text-2xl font-light text-neutral-900 mb-3 group-hover:text-[#C8A45D] transition-colors duration-300">
                  {spec.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  {spec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specialty Popup Dialog */}
      <Dialog open={!!selectedSpec} onOpenChange={(open) => !open && setSelectedSpec(null)}>
        <DialogContent 
          showCloseButton={false}
          className="w-[calc(100%-2rem)] max-w-md md:max-w-2xl lg:max-w-3xl p-0 overflow-y-auto md:overflow-hidden max-h-[90vh] bg-white border border-neutral-100 shadow-2xl rounded-xl"
        >
          {selectedSpec && (
            <div className="relative grid grid-cols-1 md:grid-cols-12">
              {/* Custom Circular Close Button with White Background */}
              <button
                onClick={() => setSelectedSpec(null)}
                className="absolute top-4 right-4 z-50 w-9 h-9 rounded-full bg-white hover:bg-neutral-50 shadow-md flex items-center justify-center text-neutral-900 border border-neutral-200/50 hover:border-neutral-300 transition-all duration-300 focus:outline-none"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Image Column */}
              <div className="md:col-span-6 relative aspect-square md:aspect-auto md:min-h-[400px] bg-neutral-100">
                <Image
                  src={selectedSpec.img}
                  alt={`${selectedSpec.title} - Inkjector Tattoos Specialization`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Content Column */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between text-left bg-white">
                <div className="space-y-4 pt-4 md:pt-6">
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block">
                    {selectedSpec.num} // SPECIALIZATION
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 leading-tight">
                    {selectedSpec.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-[#C8A45D]"></div>
                  <p className="text-neutral-500 text-sm leading-relaxed font-light font-sans">
                    {selectedSpec.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-neutral-100 mt-6 sm:mt-8">
                  <button
                    onClick={() => {
                      setSelectedSpec(null)
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full text-center py-3.5 border border-[#C8A45D] text-xs uppercase tracking-[0.25em] font-semibold text-neutral-900 hover:bg-[#C8A45D] hover:text-white transition-colors duration-300"
                  >
                    Inquire About {selectedSpec.title}
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
