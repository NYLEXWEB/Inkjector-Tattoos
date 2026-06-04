import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const textReviews = [
  {
    author: 'Rohan Sharma',
    role: 'Product Designer',
    text: 'Akhil Saju is an absolute genius. I requested a complex geometric design spanning my forearm. The precision of the lines and dotwork is outstanding. The studio environment is comparable to a premium design agency. Truly a ₹50,000+ level experience!',
    stars: 5,
    date: '2 weeks ago'
  },
  {
    author: 'Priya Nair',
    role: 'Art Director',
    text: 'Absolutely blown away by the level of professionalism. The private studio is hygienic, calm, and feels like a luxury gallery. My fine-line botanical tattoo healed perfectly. I highly recommend Akhil for custom creative work.',
    stars: 5,
    date: '1 month ago'
  },
  {
    author: 'Vikram Sen',
    role: 'Architect',
    text: 'As an architect, I am very picky about grid lines and geometry. Akhil Saju exceeded my expectations. He spent over an hour adjusting the placement stencil on my arm to guarantee anatomical harmony. Absolutely flawless.',
    stars: 5,
    date: '3 months ago'
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#F7F7F5] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="text-left max-w-xl">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
              Google Reviews
            </h2>
          </div>
          
          <div className="text-left">
            <a
              href="https://share.google/OH39vw4gjruKqMr0n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-neutral-200 hover:border-neutral-900 text-neutral-900 rounded-full text-xs uppercase tracking-[0.15em] font-bold shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Official Google Vector Logo */}
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span>Write a Google Review</span>
              <span className="text-[#C8A45D] font-bold transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {textReviews.map((rev, index) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md p-10 border border-neutral-200/50 flex flex-col justify-between items-start text-left relative"
            >
              <Quote className="absolute top-8 right-8 h-8 w-8 text-[#C8A45D]/10 pointer-events-none" />
              
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-[#C8A45D]">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed font-light mb-8 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-6 w-full flex justify-between items-center">
                <div>
                  <h4 className="font-serif text-lg font-medium text-neutral-900 leading-none mb-1">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                    {rev.role}
                  </span>
                </div>
                <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                  {rev.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
