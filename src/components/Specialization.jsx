import React from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const specialties = [
  {
    num: '01',
    title: 'Blackwork',
    desc: 'Bespoke designs utilizing deep black ink, solid geometry, intricate dot shading, and custom high-contrast line structures.',
  },
  {
    num: '02',
    title: 'Realism',
    desc: 'Hyper-realistic portraiture and organic textures translated beautifully on skin with natural depth and smooth gradients.',
  },
  {
    num: '03',
    title: 'Minimal Tattoos',
    desc: 'Fine-line botanical branches, geometric symbols, and delicate single-needle art that feel highly artistic and weightless.',
  },
  {
    num: '04',
    title: 'Custom Design',
    desc: 'One-off original concepts hand-drawn from scratch to complement your unique anatomy, personality, and life narrative.',
  },
  {
    num: '05',
    title: 'Cover-Up Tattoos',
    desc: 'Expertly engineered coverups that seamlessly integrate, mask, or transform existing ink into clean, premium art pieces.',
  },
  {
    num: '06',
    title: 'Sleeve Tattoos',
    desc: 'Large-scale cohesive artwork spanning full limbs, engineered with precise anatomical flow and thematic continuity.',
  },
]

export default function Specialization() {
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
              className="bg-white p-10 md:p-12 hover:bg-neutral-50/50 transition-all duration-500 relative group overflow-hidden flex flex-col justify-between aspect-[4/3] text-left cursor-default"
            >
              {/* Gold Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C8A45D] transition-all duration-500 group-hover:w-full"></div>

              {/* Number and Icon Row */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-serif text-3xl font-light text-neutral-300 group-hover:text-[#C8A45D] transition-colors duration-300">
                  {spec.num}
                </span>
                <div className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:border-[#C8A45D] group-hover:text-[#C8A45D] transition-all duration-300">
                  <Plus className="h-4 w-4 transform group-hover:rotate-90 transition-transform duration-300" />
                </div>
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
    </section>
  )
}
