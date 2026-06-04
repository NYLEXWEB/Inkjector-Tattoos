import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, PenTool, CheckCircle2, Award, HeartHandshake } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Private Consultation',
    icon: MessageSquare,
    desc: 'Meet with Akhil Saju to discuss your tattoo idea, size, placement, and reference materials. We analyze your style and body anatomy to formulate the core concept.',
    note: 'Duration: 30-45 minutes'
  },
  {
    num: '02',
    title: 'Concept Design',
    icon: PenTool,
    desc: 'Akhil designs a fully custom geometric, realism, or blackwork sketch from scratch. No templates or stock images are used; the art is built purely for you.',
    note: 'Timeline: 3-5 days post-consultation'
  },
  {
    num: '03',
    title: 'Review & Approval',
    icon: CheckCircle2,
    desc: 'We review the sketch together in the studio or via email. We refine the size, placement, and minor details until it perfectly aligns with your expectations.',
    note: 'Unlimited alignment tweaks'
  },
  {
    num: '04',
    title: 'Tattoo Session',
    icon: Award,
    desc: 'The art is transferred to your skin and tattooed using clinical-grade sterile equipment, high-contrast blackwork inks, and clean techniques for comfort.',
    note: 'Sterile, single-use cartidges'
  },
  {
    num: '05',
    title: 'Dermal Aftercare',
    icon: HeartHandshake,
    desc: 'We apply premium protective dermal shield films and provide a detailed aftercare kit. We check in with you during the healing process to ensure perfect results.',
    note: 'Includes custom healing cream'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
             THE ATELIER PROTOCOL
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
            The Tattoo Process
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A45D] mx-auto mt-6"></div>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-neutral-100 pl-8 md:pl-16 space-y-16 text-left">
          
          {/* Animated vertical progress bar overlay */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-neutral-200"></div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Bullet Node */}
                <div className="absolute top-1.5 left-[-2.25rem] md:left-[-4.5rem] w-8 h-8 rounded-full bg-white border border-[#C8A45D] flex items-center justify-center text-[#C8A45D] group-hover:bg-[#C8A45D] group-hover:text-white transition-all duration-300 z-10">
                  <Icon className="h-3.5 w-3.5" />
                </div>

                {/* Content Block */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  
                  {/* Step Number & Title */}
                  <div className="md:col-span-4">
                    <span className="font-serif text-xs text-[#C8A45D] block mb-1">
                      STEP {step.num}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-neutral-900 leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description & Metadata */}
                  <div className="md:col-span-8 space-y-3">
                    <p className="text-neutral-500 text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                    <div className="inline-block bg-neutral-50 border border-neutral-200/60 px-3 py-1 text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                      {step.note}
                    </div>
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
