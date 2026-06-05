import React from 'react'
import Image from 'next/image'
import { Heart, MessageCircle } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'

const instaPosts = [
  { img: '/images/gallery/custom-geometric-tattoo-kozhikode.png', likes: '342', comments: '18', alt: 'Custom Geometric Tattoo Kozhikode by Akhil Saju' },
  { img: '/images/gallery/minimal.png', likes: '512', comments: '34', alt: 'Minimalist Line Tattoo Calicut' },
  { img: '/images/gallery/realistic-forearm-tattoo-calicut.png', likes: '289', comments: '12', alt: 'Realistic Forearm Tattoo Calicut at Inkjector Tattoos' },
  { img: '/images/gallery/ornamental-floral-shoulder-tattoo.png', likes: '423', comments: '22', alt: 'Ornamental Floral Shoulder Tattoo Kerala' },
  { img: '/images/process/tattoo_final.png', likes: '671', comments: '45', alt: 'Master Artist Akhil Saju completing a custom tattoo design' },
]

export default function InstagramShowcase() {
  // Duplicate list to achieve a seamless scrolling effect
  const doublePosts = [...instaPosts, ...instaPosts]

  return (
    <section className="py-24 bg-[#111111] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
          INSTAGRAM FEED
        </span>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-50 leading-tight">
          Visual Dialogue
        </h2>
        <div className="w-12 h-[1px] bg-[#C8A45D] mx-auto mt-6"></div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex w-full overflow-hidden relative select-none">
        {/* Marquee Track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {doublePosts.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/inkjectortattoos"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[300px] h-[300px] inline-block shrink-0 overflow-hidden group mx-4 border border-neutral-800"
            >
              {/* Image */}
              <Image
                src={post.img}
                alt={post.alt}
                fill
                sizes="300px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover Details Overlay */}
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                <FaInstagram className="h-6 w-6 text-[#C8A45D]" />
                <div className="flex gap-6 text-sm font-semibold">
                  <div className="flex items-center gap-1.5 text-white">
                    <Heart className="h-4 w-4 fill-current text-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white">
                    <MessageCircle className="h-4 w-4 fill-current text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <span className="text-[10px] tracking-widest text-[#C8A45D] font-medium uppercase mt-2">
                  @inkjectortattoos
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CSS Animation injection in React for marquee scrolling */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <a
          href="https://www.instagram.com/inkjectortattoos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border border-[#C8A45D] bg-transparent text-xs uppercase tracking-[0.25em] font-semibold text-white hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
        >
          Follow @inkjectortattoos
        </a>
      </div>
    </section>
  )
}
