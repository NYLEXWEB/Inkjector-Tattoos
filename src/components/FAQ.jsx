import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const faqs = [
  {
    value: 'item-1',
    q: 'Does it hurt? How do you manage pain?',
    a: 'Pain is subjective, but most clients describe it as a light scratching sensation. We prioritize your comfort by using gentle needle techniques, choosing comfortable body placements, pacing sessions to your endurance, and providing a highly relaxed environment with refreshments.'
  },
  {
    value: 'item-2',
    q: 'How do you calculate tattoo pricing?',
    a: 'Pricing depends on the overall size, design complexity, and anatomical placement of the tattoo. Because every piece is custom-designed from scratch, we offer a transparent, flat-rate quote during the design approval stage so you know exactly what to expect before we begin.'
  },
  {
    value: 'item-3',
    q: 'What is your booking and consultation process?',
    a: 'Booking begins with our online inquiry form or a direct message. We arrange a 30-minute consultation (in-person or virtual) to review ideas and take measurements. A booking deposit is required to lock in your tattoo session slot and allow Akhil to begin drawing your design.'
  },
  {
    value: 'item-4',
    q: 'How do I care for my new tattoo?',
    a: 'We apply a medical-grade transparent protective film (second-skin) immediately after your session, which you leave on for 3-5 days. Once removed, you will wash it gently with mild soap and apply our custom organic aftercare ointment. We provide a full kit and checklist to ensure smooth healing.'
  },
  {
    value: 'item-5',
    q: 'Can you cover up or restore old tattoos?',
    a: 'Yes. We specialize in custom cover-ups. Akhil analyzes the dark values of your existing tattoo and constructs a new, larger composition—usually incorporating blackwork, solid geometry, or detailed shading—to fully mask the old ink while creating a beautiful new piece.'
  }
]

export default function FAQ() {
  return (
    <section className="py-24 bg-[#F7F7F5] relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
             common inquiries
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A45D] mx-auto mt-6"></div>
        </div>

        {/* Accordion Component */}
        <div className="bg-white p-6 md:p-12 border border-neutral-200/50 shadow-sm text-left">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="border-b border-neutral-100 py-2 last:border-b-0">
                <AccordionTrigger className="font-serif text-lg md:text-xl text-neutral-900 hover:text-[#C8A45D] hover:no-underline transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-light pt-2 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  )
}
