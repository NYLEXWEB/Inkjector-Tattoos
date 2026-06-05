import React from 'react'
import Image from 'next/image'

const studioSections = [
  {
    num: '01',
    name: 'Zen Waiting Area',
    img: '/images/studio/waiting.png',
    desc: 'Inspired by Japanese minimalism, our reception space features white concrete, natural oak textures, and warm ambient light to establish a peaceful state of mind before your session.',
  },
  {
    num: '02',
    name: 'Clinical Workstation',
    img: '/images/studio/workstation.png',
    desc: 'An ultra-sterile environment equipped with custom ergonomic leather tables, focused shadowless studio lamps, and surgical-grade clean surfaces.',
  },
  {
    num: '03',
    name: 'State-of-the-Art Equipment',
    img: '/images/studio/equipment.png',
    desc: 'Featuring precision rotary machines from Cheyenne and Bishop, paired with custom-tapered disposable needles to guarantee exact line weight control and comfortable application.',
  },
  {
    num: '04',
    name: 'Triple-Cycle Hygiene Setup',
    img: '/images/studio/hygiene.png',
    desc: 'Operating under rigid medical hygiene standards. All barriers are replaced per session, equipment undergoes heat autoclaving, and we use certified organic sterile solutions.',
  },
]

export default function StudioExperience() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-left mb-20 max-w-xl">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
             sanctuary of creativity
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
            The Studio Experience
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A45D] mt-6"></div>
        </div>

        {/* Studio Sections Editorial Stack */}
        <div className="space-y-24 md:space-y-32">
          {studioSections.map((sect, index) => (
            <div
              key={sect.num}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-7 relative overflow-hidden group border border-neutral-100 shadow-xl ${
                  index % 2 === 1 ? 'lg:order-last' : ''
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-50 relative w-full">
                  <Image
                    src={sect.img}
                    alt={`${sect.name} - Safe Tattoo Studio Kozhikode Calicut`}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  {/* Floating Number Overlay */}
                  <div className="absolute bottom-6 right-6 font-serif text-4xl text-white/50 select-none">
                    {sect.num}
                  </div>
                </div>
              </div>

              {/* Text Description Column */}
              <div className="lg:col-span-5 text-left space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-bold block">
                  {sect.num} / THE ATELIER
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-light text-neutral-900 leading-tight">
                  {sect.name}
                </h3>
                <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-light">
                  {sect.desc}
                </p>
                <div className="w-8 h-[1px] bg-neutral-200 mt-6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
