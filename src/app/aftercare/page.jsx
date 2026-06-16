import React from 'react'
import ClientLayout from '@/components/ClientLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsapp from '@/components/FloatingWhatsapp'
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema'
import AftercareTracker from '@/components/AftercareTracker'

export const metadata = {
  title: 'Tattoo Aftercare Guide | How to Heal a New Tattoo Calicut',
  description: 'Detailed professional aftercare instructions from Inkjector Tattoos Kozhikode. Learn how to wash, protect, and heal your new tattoo successfully using second-skin film.',
  keywords: [
    'tattoo aftercare guide',
    'tattoo healing process',
    'how to take care of a new tattoo',
    'second skin tattoo healing',
    'safe tattoo healing Kozhikode'
  ],
  alternates: {
    canonical: 'https://www.inkjectortattoos.com/aftercare',
  },
}

export default function AftercarePage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Aftercare', url: '/aftercare' }
  ]

  return (
    <ClientLayout>
      <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#C8A45D]/30 selection:text-neutral-900">
        <Navbar />
        <BreadcrumbSchema items={breadcrumbItems} />
        
        <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C8A45D] uppercase block mb-3">
              Essential Healing Protocols
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
              Tattoo Aftercare &amp; Healing Guide
            </h1>
            <div className="w-12 h-[1px] bg-[#C8A45D] mx-auto mt-6"></div>
          </div>

          <div className="prose prose-neutral max-w-none space-y-12 text-left">
            <p className="text-lg text-neutral-600 font-light leading-relaxed font-sans">
              The lifespan and vibrancy of your bespoke body ornamentation depend heavily on how it is cared for during the first critical weeks. A masterfully applied tattoo is only fifty percent of the equation—the remaining fifty percent lies in strict adherence to scientific aftercare.
            </p>

            {/* Interactive Tracker Widget */}
            <AftercareTracker />

            {/* Phase 1 */}
            <div className="space-y-4 border-t border-neutral-100 pt-8">
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-bold font-sans">Phase 01 // The Second-Skin Shield</span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900">Medical Barrier Protection</h2>
              <p className="text-neutral-500 text-sm font-light leading-relaxed font-sans">
                Immediately after your session at <strong className="font-medium text-neutral-800">Inkjector Tattoos Kozhikode</strong>, we apply a sterile, medical-grade polyurethane protective film (often referred to as second-skin). This barrier is waterproof, breathable, and shields the raw skin from bacteria and friction.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
                <li><strong>Duration:</strong> Keep this film on for <strong>3 to 5 days</strong>, as advised by Akhil Saju depending on design density.</li>
                <li><strong>Fluid Accumulation:</strong> It is completely normal for bodily fluids, plasma, and excess ink to gather under the film. This is your body's natural healing plasma and aids recovery.</li>
                <li><strong>If the film leaks or peeling exposes the tattoo:</strong> Remove the film immediately and transition to standard washing aftercare.</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="space-y-4 border-t border-neutral-100 pt-8">
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-bold font-sans">Phase 02 // Safe Removal &amp; First Wash</span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900">Gentle Cleaning Procedure</h2>
              <p className="text-neutral-500 text-sm font-light leading-relaxed font-sans">
                When removing the film, do so under lukewarm running water to ease the adhesive. Peel slowly and gently—never rip it off quickly.
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-neutral-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
                <li><strong>Wash:</strong> Use your clean hands and a mild, fragrance-free, antibacterial liquid soap. Do not use scrubbers, washcloths, or loofahs.</li>
                <li><strong>Cleanse:</strong> Gently wash away any built-up plasma, blood, or ointment. Rinse thoroughly with cool water.</li>
                <li><strong>Dry:</strong> Gently pat the area dry with a fresh, clean paper towel. Do not rub. Let it air-dry completely for 15 minutes.</li>
              </ol>
            </div>

            {/* Phase 3 */}
            <div className="space-y-4 border-t border-neutral-100 pt-8">
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-bold font-sans">Phase 03 // Moisturizing &amp; Nourishment</span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900">Hydration and Custom Ointment</h2>
              <p className="text-neutral-500 text-sm font-light leading-relaxed font-sans">
                Keeping the tattoo slightly hydrated prevents heavy scabbing and cracking, allowing the layers of skin to settle.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
                <li><strong>Ointment Application:</strong> Apply a very thin layer of custom organic aftercare ointment or a recommended fragrance-free lotion (such as Aveeno or Cetaphil).</li>
                <li><strong>Avoid Over-Moisturizing:</strong> The tattoo should have a slight sheen, not a thick, wet layer. Excess moisture blocks oxygen and encourages bacterial growth.</li>
                <li><strong>Frequency:</strong> Moisturize <strong>2 to 3 times daily</strong> for up to 3 weeks until the skin is fully regenerated.</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="space-y-4 border-t border-neutral-100 pt-8">
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-bold font-sans">Phase 04 // What to Strictly Avoid</span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900">Critical Restrictions (First 14 Days)</h2>
              <p className="text-neutral-500 text-sm font-light leading-relaxed font-sans">
                Failure to avoid the following can lead to color fading, ink blowout, or serious skin infections:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-neutral-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
                <li><strong className="text-neutral-800">No Scratching or Picking:</strong> The tattoo will peel like a sunburn and itch. Let the dead skin shed naturally. Picking pulls ink out of the dermis.</li>
                <li><strong className="text-neutral-800">No Soaking (Water Submersion):</strong> Avoid swimming pools, beaches, saunas, hot tubs, and baths. Normal showers are perfectly fine.</li>
                <li><strong className="text-neutral-800">No Direct Sun Exposure:</strong> UV rays break down tattoo pigments rapidly. Keep the tattoo shaded. After 3 weeks of healing, apply SPF 50+ sunscreen.</li>
                <li><strong className="text-neutral-800">No Tight Clothing:</strong> Wear loose, breathable cotton clothing to prevent friction and sweat buildup.</li>
              </ul>
            </div>

            {/* Checklist Box */}
            <div className="bg-[#F7F7F5] border border-neutral-200 p-8 rounded-sm text-left space-y-4 mt-12">
              <h3 className="font-serif text-xl font-medium text-neutral-900">At-a-Glance Healing Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-neutral-600 font-sans leading-relaxed">
                <div>
                  <span className="text-xs font-semibold text-green-700 uppercase block mb-1">Do's:</span>
                  <ul className="list-inside list-decimal space-y-1">
                    <li>Keep second skin on for 3-5 days.</li>
                    <li>Wash gently with mild soap.</li>
                    <li>Pat dry with a clean paper towel.</li>
                    <li>Apply a micro-thin layer of lotion.</li>
                    <li>Drink water to stay hydrated.</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xs font-semibold text-red-700 uppercase block mb-1">Don'ts:</span>
                  <ul className="list-inside list-decimal space-y-1">
                    <li>Do not pick, scratch, or peel scabs.</li>
                    <li>Do not swim or submerge in water.</li>
                    <li>Do not expose to direct sunlight.</li>
                    <li>Do not use petroleum jelly (Vaseline).</li>
                    <li>Do not let others touch your healing ink.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <FloatingWhatsapp />
      </div>
    </ClientLayout>
  )
}
