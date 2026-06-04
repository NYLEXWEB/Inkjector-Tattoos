import React from 'react'
import { ShieldAlert, Droplets, Award, Compass, Sparkles, Coffee } from 'lucide-react'

const features = [
  {
    icon: ShieldAlert,
    title: 'Sterile Equipment',
    desc: 'Medical-grade autoclaves and 100% single-use disposable needle cartridges. Your safety and hygiene are our absolute highest priority.',
  },
  {
    icon: Droplets,
    title: 'Premium Ink',
    desc: 'We use vegan, cruelty-free, organic inks that resist fading and hold crisp detail, ensuring your tattoo looks exceptional for years.',
  },
  {
    icon: Award,
    title: 'Experienced Artist',
    desc: 'Led by Akhil Saju with 8+ years of dedicated professional experience, handling complex anatomy, line weights, and shading structures.',
  },
  {
    icon: Compass,
    title: 'Custom Designs',
    desc: 'Every client receives a custom-crafted drawing created solely for their anatomy. We do not reuse concepts or templates.',
  },
  {
    icon: Coffee,
    title: 'Client Comfort',
    desc: 'A calm, premium private studio environment with ergonomic seating, refreshments, and gentle techniques to minimize pain and fatigue.',
  },
  {
    icon: Sparkles,
    title: 'Long Lasting Quality',
    desc: 'Crafted using precise needle configurations that lay ink smoothly in the perfect skin depth, yielding sharp healing and long-term vibrancy.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F7F7F5] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
             uncompromising excellence
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
            Why Choose Us
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A45D] mx-auto mt-6"></div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => {
            const IconComponent = feat.icon
            return (
              <div
                key={feat.title}
                className="bg-white p-10 border border-neutral-200/50 hover:border-neutral-900 transition-all duration-500 text-left flex flex-col justify-between group h-full shadow-sm hover:shadow-lg"
              >
                <div>
                  {/* Gold Icon Frame */}
                  <div className="w-12 h-12 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] mb-8 group-hover:bg-[#C8A45D] group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="font-serif text-2xl font-light text-neutral-900 mb-4">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>

                {/* Micro hover indicator */}
                <div className="w-6 h-[1.5px] bg-[#C8A45D] mt-8 group-hover:w-16 transition-all duration-500"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
