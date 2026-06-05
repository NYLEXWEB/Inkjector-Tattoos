import React, { useState } from 'react'
import { Phone, Mail, Instagram, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    idea: '',
    budget: '',
    date: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking Inquiry Submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', idea: '', budget: '', date: '' })
    }, 6000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute right-0 top-1/4 w-[35rem] h-[35rem] bg-neutral-50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Editorial Contact Details */}
          <div className="lg:col-span-5 text-left space-y-12">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-4">
                SECURE YOUR SESSION
              </span>
              <h2 className="font-serif text-5xl md:text-7xl font-light text-neutral-900 leading-none mb-6">
                Begin Your<br/>Journey
              </h2>
              <div className="w-16 h-[2px] bg-[#C8A45D] mb-8"></div>
              
              <p className="font-serif text-lg md:text-xl italic text-neutral-700 font-light leading-relaxed mb-6">
                "Bespoke ink is the ultimate signature of identity. Each line is drawn to align with your personal anatomy."
              </p>
              
              <p className="text-neutral-550 text-sm font-light leading-relaxed">
                Consultations are held by appointment only in our private clinical atelier. Fill out our signature inquiry form to request a concept review with master artist Akhil Saju.
              </p>
            </div>

            {/* Direct Details Grid */}
            <div className="space-y-4 pt-4">
              <a
                href="tel:8086612111"
                className="flex items-center justify-between p-5 border border-neutral-100 hover:border-neutral-900 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 border border-neutral-200 flex items-center justify-center text-[#C8A45D] shrink-0 group-hover:border-[#C8A45D] group-hover:bg-[#C8A45D] group-hover:text-white transition-all duration-300">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[8px] uppercase tracking-widest text-neutral-400 block font-semibold">CALL / WHATSAPP</span>
                    <span className="text-sm font-medium text-neutral-800 tracking-wider">8086612111</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-neutral-300 group-hover:text-[#C8A45D] group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <a
                href="mailto:inkjectortattoos@gmail.com"
                className="flex items-center justify-between p-5 border border-neutral-100 hover:border-neutral-900 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 border border-neutral-200 flex items-center justify-center text-[#C8A45D] shrink-0 group-hover:border-[#C8A45D] group-hover:bg-[#C8A45D] group-hover:text-white transition-all duration-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[8px] uppercase tracking-widest text-neutral-400 block font-semibold">EMAIL ENQUIRIES</span>
                    <span className="text-sm font-medium text-neutral-800 tracking-wider">inkjectortattoos@gmail.com</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-neutral-300 group-hover:text-[#C8A45D] group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <a
                href="https://www.instagram.com/inkjectortattoos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 border border-neutral-100 hover:border-neutral-900 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 border border-neutral-200 flex items-center justify-center text-[#C8A45D] shrink-0 group-hover:border-[#C8A45D] group-hover:bg-[#C8A45D] group-hover:text-white transition-all duration-300">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[8px] uppercase tracking-widest text-neutral-400 block font-semibold">INSTAGRAM</span>
                    <span className="text-sm font-medium text-neutral-800 tracking-wider">@inkjectortattoos</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-neutral-300 group-hover:text-[#C8A45D] group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>

            {/* Timings */}
            <div className="pt-6 border-t border-neutral-100 flex items-center gap-4 text-xs text-neutral-400 font-light font-sans">
              <Clock className="h-4 w-4 text-[#C8A45D] shrink-0" />
              <span>Studio Hours: Tuesday – Sunday, 11:00 AM – 8:00 PM</span>
            </div>
          </div>

          {/* Right Column: Premium White Booking Form */}
          <div className="lg:col-span-7 bg-[#F7F7F5] p-6 sm:p-8 md:p-14 border border-neutral-200/60 shadow-lg relative overflow-hidden rounded-sm text-left">
            {/* Elegant Background Grid for Form */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

            <h3 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-2 relative z-10">
              Session Inquiry
            </h3>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold mb-10 pb-4 border-b border-neutral-250/60 relative z-10">
              Handcrafted Tattoo Concept Request
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-6 relative z-10"
              >
                <div className="w-16 h-16 rounded-full border border-[#C8A45D] text-[#C8A45D] flex items-center justify-center mx-auto text-2xl font-light">
                  ✓
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-3xl font-light text-neutral-900">Concept Logged</h4>
                  <p className="text-xs uppercase tracking-widest text-[#C8A45D]">Akhil Saju Atelier</p>
                </div>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed font-sans">
                  Your creative concept has been filed. Akhil Saju will personally analyze your request and reach out on WhatsApp/phone within 24-48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-2 font-sans">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Kabir Mehta"
                      required
                      className="w-full bg-transparent border-b border-neutral-250 focus:border-[#C8A45D] rounded-none py-3 text-sm focus:ring-0 outline-none text-neutral-900 transition-colors duration-300 placeholder-neutral-400 font-sans"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-2 font-sans">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 80866 12111"
                      required
                      className="w-full bg-transparent border-b border-neutral-250 focus:border-[#C8A45D] rounded-none py-3 text-sm focus:ring-0 outline-none text-neutral-900 transition-colors duration-300 placeholder-neutral-400 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-2 font-sans">
                    Tattoo Concept & Bodily Placement
                  </label>
                  <textarea
                    name="idea"
                    value={formData.idea}
                    onChange={handleChange}
                    placeholder="Describe your design (geometric, realism, text), approximate sizing, and intended placement (forearm, neck, sleeve)."
                    required
                    className="w-full bg-transparent border-b border-neutral-250 focus:border-[#C8A45D] rounded-none py-3 text-sm focus:ring-0 outline-none text-neutral-900 min-h-[100px] resize-y transition-colors duration-300 placeholder-neutral-400 font-sans leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-2 font-sans">
                      Expected Budget (INR)
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. ₹15,000 - ₹20,000"
                      className="w-full bg-transparent border-b border-neutral-250 focus:border-[#C8A45D] rounded-none py-3 text-sm focus:ring-0 outline-none text-neutral-900 transition-colors duration-300 placeholder-neutral-400 font-sans"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-2 font-sans">
                      Target Appointment Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-neutral-250 focus:border-[#C8A45D] rounded-none py-3 text-sm focus:ring-0 outline-none text-neutral-400 focus:text-neutral-900 transition-colors duration-300 font-sans [color-scheme:light]"
                    />
                  </div>
                </div>

                {/* Submit button with high contrast white layout */}
                <button
                  type="submit"
                  className="w-full py-4 bg-neutral-950 hover:bg-[#C8A45D] text-white hover:text-white text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 flex items-center justify-center gap-2 group rounded-none"
                >
                  <span>Submit Inquiry Concept</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
