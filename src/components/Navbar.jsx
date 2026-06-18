"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Aftercare', href: '/aftercare' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
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

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`w-full max-w-6xl rounded-full border border-neutral-200/50 bg-white transition-all duration-500 pointer-events-auto shadow-md ${
          isScrolled ? 'py-2.5 px-4 sm:px-8 shadow-lg border-neutral-300/40 bg-white' : 'py-3 px-4 sm:px-10'
        }`}
      >
        <div className="flex items-center justify-between">
          
          <Link href="/" className="flex flex-col items-center gap-1 group">
            <Image
              src="/logo.png"
              alt="Inkjector Tattoos Logo"
              width={32}
              height={32}
              priority
              loading="eager"
              style={{ width: 'auto' }}
              className="h-6 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col items-center">
              <div className="flex items-center font-serif text-[11px] sm:text-[13px] tracking-[0.15em] sm:tracking-[0.2em] leading-none font-bold">
                <span className="text-neutral-900">Inkjector</span>
                <span className="text-[#C8A45D] ml-1">Tattoos</span>
              </div>
              <div className="flex items-center justify-center w-full gap-1 mt-0.5 sm:mt-1 pointer-events-none">
                <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent via-[#C8A45D]/40 to-[#C8A45D]/40"></div>
                <span className="text-[4px] sm:text-[5px] text-[#C8A45D] leading-none">✦</span>
                <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent via-[#C8A45D]/40 to-[#C8A45D]/40"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-800 hover:text-[#C8A45D] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A45D] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side: CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-neutral-950 text-[10px] uppercase tracking-[0.2em] font-semibold text-white hover:bg-[#C8A45D] transition-all duration-300"
            >
              Book Session
            </Link>

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
                  <Image
                    src="/logo.png"
                    alt="Inkjector Tattoos Logo"
                    width={40}
                    height={40}
                    priority
                    loading="eager"
                    style={{ width: 'auto' }}
                    className="h-10 w-auto object-contain self-start"
                  />
                  <div className="flex flex-col gap-6">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-sm uppercase tracking-[0.2em] font-semibold text-neutral-900 hover:text-[#C8A45D] transition-colors block"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.45, delay: navItems.length * 0.04 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3.5 bg-neutral-950 text-white text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-[#C8A45D] transition-colors rounded-full"
                  >
                    Book Session
                  </Link>
                  <div className="text-[10px] text-neutral-400 tracking-wider text-center">
                    +91 80866 12111 | inkjectortattoos@gmail.com
                  </div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  )
}
