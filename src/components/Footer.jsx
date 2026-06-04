import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-white text-neutral-900 pt-20 pb-12 border-t border-neutral-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-100">
          
          {/* Column 1: Logo & Philosophy */}
          <div className="lg:col-span-5 text-left space-y-6">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Inkjector Tattoos Logo"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col items-center pt-0.5">
                <div className="flex items-center font-serif text-[14px] tracking-[0.25em] uppercase leading-none font-semibold">
                  <span className="text-neutral-900">Inkjector</span>
                  <span className="text-[#C8A45D] ml-1.5">Tattoos</span>
                </div>
                <div className="flex items-center justify-center w-full gap-1.5 mt-1.5 pointer-events-none">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#C8A45D]/40 to-[#C8A45D]/40"></div>
                  <span className="text-[6px] text-[#C8A45D] leading-none">✦</span>
                  <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#C8A45D]/40 to-[#C8A45D]/40"></div>
                </div>
              </div>
            </a>
            <p className="text-neutral-500 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Bespoke private tattoo studio based in India, dedicated to the curation of highly sophisticated, anatomically-mapped custom tattoos. Led by Akhil Saju.
            </p>
          </div>

          {/* Column 2: Studio Specialties */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-light font-sans">
              <li className="hover:text-neutral-900 transition-colors cursor-pointer">Blackwork Geometry</li>
              <li className="hover:text-neutral-900 transition-colors cursor-pointer">Precision Realism</li>
              <li className="hover:text-neutral-900 transition-colors cursor-pointer">Fine-Line Botanicals</li>
              <li className="hover:text-neutral-900 transition-colors cursor-pointer">Anatomical Sleevwork</li>
              <li className="hover:text-neutral-900 transition-colors cursor-pointer">Premium Cover-Ups</li>
            </ul>
          </div>

          {/* Column 3: Atelier Navigation */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold">
              Atelier
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-light font-sans">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-neutral-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#artist" onClick={(e) => handleNavClick(e, '#artist')} className="hover:text-neutral-900 transition-colors">
                  Artist Profile
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-neutral-900 transition-colors">
                  Portfolio Gallery
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:text-neutral-900 transition-colors">
                  Tattoo Process
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleNavClick(e, '#reviews')} className="hover:text-neutral-900 transition-colors">
                  Client Reviews
                </a>
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
                <a href="tel:8086612111">8086612111</a>
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
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-neutral-900 transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-neutral-900 transition-colors">
              TERMS OF SERVICE
            </a>
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
