import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Tattoos Created' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '★', label: 'Google Rating' },
]

export default function TrustBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="bg-white border-y border-neutral-100 py-12 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center ${
                idx !== stats.length - 1 ? 'md:border-r border-neutral-100' : ''
              }`}
            >
              <div className="font-serif text-4xl md:text-6xl font-light text-neutral-900 mb-2 flex items-baseline justify-center">
                <Counter target={stat.value} inView={inView} />
                <span className="text-[#C8A45D] font-light ml-0.5">{stat.suffix}</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ target, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = target
    if (start === end) return

    const duration = 2000 // 2 seconds animation
    const incrementTime = Math.max(Math.floor(duration / end), 20)
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime))
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      } else {
        setCount(start)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [inView, target])

  return <span>{count}</span>
}
