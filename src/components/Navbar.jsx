import React, { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Artist', href: '#artist' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`w-full max-w-6xl rounded-full border border-neutral-200/50 bg-white transition-all duration-500 pointer-events-auto shadow-md ${
          isScrolled ? 'py-3 px-8 shadow-lg border-neutral-300/40 bg-white' : 'py-4 px-10'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Image & Styled Typography */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Inkjector Tattoos Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col items-center pt-0.5">
              <div className="flex items-center font-serif text-[13px] tracking-[0.25em] uppercase leading-none font-semibold">
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-800 hover:text-[#C8A45D] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A45D] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side: CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-neutral-950 text-[10px] uppercase tracking-[0.2em] font-semibold text-white hover:bg-[#C8A45D] transition-all duration-300"
            >
              Book Session
            </a>

            {/* Mobile Navigation Drawer */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-9 w-9 rounded-full hover:bg-neutral-50 text-neutral-900 border border-neutral-200"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-8 flex flex-col justify-between bg-white border-l border-neutral-100">
                <div className="flex flex-col gap-8 mt-12">
                  <img
                    src="/logo.png"
                    alt="Inkjector Tattoos Logo"
                    className="h-10 w-auto object-contain self-start"
                  />
                  <div className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="text-sm uppercase tracking-[0.2em] font-semibold text-neutral-900 hover:text-[#C8A45D] transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full text-center py-4 bg-neutral-950 text-white text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#C8A45D] transition-colors"
                  >
                    Book Session
                  </a>
                  <div className="text-[10px] text-neutral-400 tracking-wider text-center">
                    8086612111 | inkjectortattoos@gmail.com
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  )
}
