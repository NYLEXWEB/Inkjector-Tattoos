import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalShowcase() {
  const containerRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    // Only run horizontal scroll animation on screens larger than 768px (MD breakpoint)
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    let ctx

    if (mediaQuery.matches) {
      ctx = gsap.context(() => {
        const pinSections = gsap.utils.toArray('.horizontal-panel')
        const scrollTween = gsap.to(containerRef.current, {
          x: () => -(containerRef.current.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
          },
        })
      }, triggerRef)
    }

    return () => {
      if (ctx) ctx.revert()
    }
  }, [])

  return (
    <div ref={triggerRef} className="overflow-hidden bg-[#111111] text-white">
      {/* Container that slides horizontally */}
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row md:w-[300vw] min-h-screen relative"
      >
        {/* PANEL 1: Editorial Introduction */}
        <div className="horizontal-panel w-full md:w-[100vw] min-h-screen md:h-screen shrink-0 flex items-center justify-center py-24 px-6 md:py-0 md:px-24 bg-[#111111] border-r border-neutral-800/50">
          <div className="max-w-4xl text-left">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-6">
              THE TRANSFORMATION
            </span>
            <h2 className="font-serif text-5xl md:text-8xl font-light leading-[1.1] mb-8 text-neutral-50">
              From Sketch <br />
              <span className="italic text-[#C8A45D]">To Skin.</span>
            </h2>
            <p className="text-neutral-400 text-sm md:text-lg max-w-2xl font-light leading-relaxed">
              We believe a tattoo is a collaborative masterpiece. Explore the journey of a single geometric concept, starting as a handcrafted ink sketch on archival paper and culminating as a bespoke blackwork piece tailored perfectly to human anatomy.
            </p>
            <div className="mt-12 flex items-center gap-4 text-xs tracking-widest uppercase text-neutral-500">
              <span className="w-8 h-[1px] bg-[#C8A45D]"></span>
              <span>SCROLL DOWN TO INITIATE STORY</span>
            </div>
          </div>
        </div>

        {/* PANEL 2: The Before (Sketch) */}
        <div className="horizontal-panel w-full md:w-[100vw] min-h-screen md:h-screen shrink-0 flex items-center justify-center py-24 px-6 md:py-0 md:px-20 bg-[#151515] border-r border-neutral-800/50">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Sketch Image */}
            <div className="relative aspect-[4/5] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl p-4">
              <div className="absolute top-8 left-8 z-10 px-3 py-1 bg-neutral-950/80 backdrop-blur border border-neutral-700 text-[10px] uppercase tracking-widest text-[#C8A45D]">
                STAGE 01: THE CONCEPT
              </div>
              <img
                src="/images/process/sketch.png"
                alt="Original Hand Drawn Sketch"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="text-left space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-semibold">
                01 / THE ARCHIVAL SKETCH
              </span>
              <h3 className="font-serif text-3xl md:text-5xl font-light text-neutral-100 leading-tight">
                Architectural Precision on Paper
              </h3>
              <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
                Before ink touches skin, it is carefully constructed on paper. Akhil Saju designs each geometric layout by analyzing the client's muscle flows and bone structures. This ensures that the tattoo doesn't just sit on the body, but actively moves with it.
              </p>
              <ul className="space-y-3 text-xs text-neutral-400 pt-4">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8A45D]"></span> Custom grid mapping for muscle flow
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8A45D]"></span> Archival pens on heavy-grain paper
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8A45D]"></span> Client review and placement approval
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PANEL 3: The After (Final Tattoo) */}
        <div className="horizontal-panel w-full md:w-[100vw] min-h-screen md:h-screen shrink-0 flex items-center justify-center py-24 px-6 md:py-0 md:px-20 bg-[#111111]">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Finished Tattoo Image */}
            <div className="relative aspect-[4/5] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl p-4">
              <div className="absolute top-8 left-8 z-10 px-3 py-1 bg-neutral-950/80 backdrop-blur border border-neutral-700 text-[10px] uppercase tracking-widest text-[#C8A45D]">
                STAGE 02: THE EXECUTION
              </div>
              <img
                src="/images/process/tattoo_final.png"
                alt="Final Completed Tattoo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="text-left space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-semibold">
                02 / THE INKED MASTERPIECE
              </span>
              <h3 className="font-serif text-3xl md:text-5xl font-light text-neutral-100 leading-tight">
                Anatomical Harmony in Ink
              </h3>
              <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
                The final render is executed with precision-grade machines and premium medical inks. Deep solid blacks and fine dotwork shading come together, presenting a stunning contract that highlights the skin's natural curvature.
              </p>
              <ul className="space-y-3 text-xs text-neutral-400 pt-4">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8A45D]"></span> Surgical-grade sterile application
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8A45D]"></span> Rich contrast and longevity-focused shading
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8A45D]"></span> Dermal-shield post-care integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
