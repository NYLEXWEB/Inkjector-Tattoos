"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white text-neutral-900 pt-20 pb-12 border-t border-neutral-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-100">
          
          {/* Column 1: Logo & Philosophy */}
          <div className="lg:col-span-5 text-left space-y-6">
            <Link href="/" className="flex flex-col items-center gap-2 group w-fit">
              <Image
                src="/logo.png"
                alt="Inkjector Tattoos Logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col items-center pt-0.5">
                <div className="flex items-center font-serif text-[12px] tracking-[0.2em] uppercase leading-none font-semibold">
                  <span className="text-neutral-900">Inkjector</span>
                  <span className="text-[#C8A45D] ml-1">Tattoos</span>
                </div>
                <div className="flex items-center justify-center w-full gap-1 mt-1 pointer-events-none">
                  <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-[#C8A45D]/40 to-[#C8A45D]/40"></div>
                  <span className="text-[5px] text-[#C8A45D] leading-none">✦</span>
                  <div className="h-[1px] w-8 bg-gradient-to-l from-transparent via-[#C8A45D]/40 to-[#C8A45D]/40"></div>
                </div>
              </div>
            </Link>
            <p className="text-neutral-500 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Bespoke private tattoo studio based in Kozhikode, Kerala, dedicated to the curation of highly sophisticated, anatomically-mapped custom tattoos. Led by Akhil Saju.
            </p>
          </div>

          {/* Column 2: Studio Specialties */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-light font-sans">
              <li className="hover:text-neutral-900 transition-colors">Blackwork Geometry</li>
              <li className="hover:text-neutral-900 transition-colors">Precision Realism</li>
              <li className="hover:text-neutral-900 transition-colors">Fine-Line Botanicals</li>
              <li className="hover:text-neutral-900 transition-colors">Anatomical Sleevwork</li>
              <li className="hover:text-neutral-900 transition-colors">Premium Cover-Ups</li>
            </ul>
          </div>

          {/* Column 3: Atelier Navigation */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold">
              Atelier
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-light font-sans">
              <li>
                <Link href="/" className="hover:text-neutral-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-neutral-900 transition-colors">
                  Artist Profile
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-neutral-900 transition-colors">
                  Tattoo Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-neutral-900 transition-colors">
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link href="/aftercare" className="hover:text-neutral-900 transition-colors">
                  Aftercare Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-neutral-900 transition-colors">
                  Tattoo Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold">
              Inquiries
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-light font-sans">
              <li className="hover:text-neutral-900 transition-colors">
                <a href="tel:8086612111">+91 80866 12111</a>
              </li>
              <li className="hover:text-neutral-900 transition-colors">
                <a href="mailto:inkjectortattoos@gmail.com">inkjectortattoos@gmail.com</a>
              </li>
              <li className="hover:text-neutral-900 transition-colors">
                <a href="https://www.instagram.com/inkjectortattoos" target="_blank" rel="noopener noreferrer">
                  Instagram: @inkjectortattoos
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-[10px] text-neutral-400 tracking-wider">
            &copy; {new Date().getFullYear()} INKJECTOR TATTOOS. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex gap-8 text-[10px] text-neutral-400 tracking-wider font-sans">
            <Link href="/" className="hover:text-neutral-900 transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/" className="hover:text-neutral-900 transition-colors">
              TERMS OF SERVICE
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-neutral-200 hover:border-neutral-900 hover:text-[#C8A45D] flex items-center justify-center transition-colors bg-white shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
