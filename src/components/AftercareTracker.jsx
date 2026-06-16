"use client"

import React, { useState, useEffect } from 'react'
import { Calendar, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react'

const PHASES = [
  {
    id: 1,
    name: "Phase 1: Second-Skin Shield",
    daysRange: "Days 1 to 3",
    tagline: "Medical-grade barrier protection is active. Do not touch or peel yet.",
    checklist: [
      "Keep the second-skin film completely sealed and intact.",
      "Avoid submerging in water (showers are fine, but do not soak the area).",
      "Observe fluid accumulation (plasma, excess ink) — this is normal and aids healing.",
      "If the film leaks or peeling exposes the ink, transition to Phase 2 immediately."
    ]
  },
  {
    id: 2,
    name: "Phase 2: Safe Removal & Cleaning",
    daysRange: "Days 4 to 5",
    tagline: "Time to remove the shield and wash the tattoo for the first time.",
    checklist: [
      "Wash hands thoroughly with mild, fragrance-free antibacterial soap first.",
      "Peel the film off slowly under running, lukewarm water (do not rip it off quickly).",
      "Lather and wash away all plasma, blood, and ointment residue using clean fingers.",
      "Pat dry gently with a fresh, clean paper towel (do not rub or scrub).",
      "Let air dry for 15 minutes, then apply a micro-thin layer of fragrance-free lotion."
    ]
  },
  {
    id: 3,
    name: "Phase 3: Moisturizing & Healing",
    daysRange: "Days 6 to 14",
    tagline: "The skin will start flaking and itching. Moisture and gentle care are key.",
    checklist: [
      "Apply a very thin layer of fragrance-free lotion 2-3 times daily (skin should sheen, not be wet).",
      "Do NOT scratch, pick, or peel the flaking skin (let it shed naturally).",
      "Wear loose, breathable cotton clothing to prevent friction.",
      "Strictly avoid swimming, hot tubs, saunas, and direct sun exposure."
    ]
  },
  {
    id: 4,
    name: "Phase 4: Flaking & Sun Protection",
    daysRange: "Days 15 to 30",
    tagline: "New skin is forming. Protect it from fading.",
    checklist: [
      "Continue applying a light moisturizer once or twice daily.",
      "Avoid picking at any remaining stubborn scabs.",
      "Apply SPF 50+ sunscreen whenever the tattoo is exposed to direct sunlight.",
      "Avoid abrasive scrubbing or scrubbing sponges during showers."
    ]
  },
  {
    id: 5,
    name: "Phase 5: Long-Term Enrichment",
    daysRange: "Day 30+",
    tagline: "Your masterpiece is healed! Maintain its lifelong vibrancy.",
    checklist: [
      "Apply sunscreen whenever outdoors (UV radiation is the #1 cause of ink fading).",
      "Keep your body and skin hydrated by drinking plenty of water.",
      "Reach out to Akhil Saju if you need any free color touch-up checks."
    ]
  }
]

export default function AftercareTracker() {
  const [tattooDate, setTattooDate] = useState('')
  const [daysElapsed, setDaysElapsed] = useState(null)
  const [activePhase, setActivePhase] = useState(null)
  const [checkedItems, setCheckedItems] = useState({})

  // Load saved date from localStorage on mount
  useEffect(() => {
    const savedDate = localStorage.getItem('inkjector_tattoo_date')
    if (savedDate) {
      setTattooDate(savedDate)
    }
  }, [])

  // Calculate phase when date changes
  useEffect(() => {
    if (!tattooDate) {
      setDaysElapsed(null)
      setActivePhase(null)
      return
    }

    // Save date
    localStorage.setItem('inkjector_tattoo_date', tattooDate)

    const tDate = new Date(tattooDate)
    tDate.setHours(0, 0, 0, 0)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const diffTime = today.getTime() - tDate.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    // Set days elapsed (clamped to 0 minimum for future dates)
    const elapsed = Math.max(0, diffDays + 1) // Day 1 is the day of tattoo
    setDaysElapsed(elapsed)

    // Find active phase
    let phase = PHASES[0]
    if (elapsed >= 1 && elapsed <= 3) {
      phase = PHASES[0]
    } else if (elapsed >= 4 && elapsed <= 5) {
      phase = PHASES[1]
    } else if (elapsed >= 6 && elapsed <= 14) {
      phase = PHASES[2]
    } else if (elapsed >= 15 && elapsed <= 30) {
      phase = PHASES[3]
    } else if (elapsed > 30) {
      phase = PHASES[4]
    }
    setActivePhase(phase)

    // Load checked items from localStorage
    const savedChecked = localStorage.getItem(`inkjector_checklist_${tattooDate}_${phase.id}`)
    if (savedChecked) {
      setCheckedItems(JSON.parse(savedChecked))
    } else {
      setCheckedItems({})
    }
  }, [tattooDate])

  const handleCheckboxChange = (index) => {
    if (!activePhase) return
    const updated = {
      ...checkedItems,
      [index]: !checkedItems[index]
    }
    setCheckedItems(updated)
    localStorage.setItem(`inkjector_checklist_${tattooDate}_${activePhase.id}`, JSON.stringify(updated))
  }

  const handleClear = () => {
    localStorage.removeItem('inkjector_tattoo_date')
    setTattooDate('')
    setDaysElapsed(null)
    setActivePhase(null)
    setCheckedItems({})
  }

  const getProgressPercentage = () => {
    if (!activePhase) return 0
    const total = activePhase.checklist.length
    let checkedCount = 0
    for (let i = 0; i < total; i++) {
      if (checkedItems[i] === true) {
        checkedCount++
      }
    }
    return Math.round((checkedCount / total) * 100)
  }

  return (
    <div className="bg-[#F7F7F5] border border-neutral-200 p-6 md:p-10 rounded-sm text-left max-w-3xl mx-auto my-12 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="h-5 w-5 text-[#C8A45D]" />
        <h3 className="font-serif text-2xl font-light text-neutral-900">Interactive Healing Planner</h3>
      </div>

      <p className="text-neutral-500 font-light text-xs sm:text-sm leading-relaxed mb-8">
        Enter the date you got your tattoo below. We will calculate exactly which healing stage you are in and give you an interactive checklist for today.
      </p>

      {/* Input controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-end mb-8 bg-white border border-neutral-200 p-5 rounded-sm">
        <div className="flex-1 w-full space-y-2">
          <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 font-semibold block">
            Select Tattoo Date
          </label>
          <div className="relative flex items-center">
            <Calendar className="absolute left-3.5 h-4 w-4 text-neutral-400 pointer-events-none" />
            <input
              type="date"
              value={tattooDate}
              onChange={(e) => setTattooDate(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-neutral-200 focus:border-[#C8A45D] outline-none text-xs rounded-sm font-sans font-light text-neutral-700"
            />
          </div>
        </div>

        {tattooDate && (
          <button
            onClick={handleClear}
            className="w-full sm:w-auto py-3 px-5 border border-neutral-200 hover:border-neutral-800 text-neutral-500 hover:text-neutral-900 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all h-[42px]"
          >
            Reset
          </button>
        )}
      </div>

      {tattooDate && activePhase && (
        <div className="space-y-6 animate-fade-in bg-white border border-neutral-200 p-6 md:p-8 rounded-sm">
          
          {/* Header Stats */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#C8A45D] font-bold">
                Tattoo Age: Day {daysElapsed}
              </div>
              <h4 className="font-serif text-lg md:text-xl font-medium text-neutral-900 mt-1">
                {activePhase.name}
              </h4>
              <p className="text-[11px] text-[#C8A45D] font-sans font-medium mt-1 uppercase tracking-wider">
                Active Period: {activePhase.daysRange}
              </p>
            </div>
            
            <div className="flex flex-col items-end flex-shrink-0">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Phase Progress</span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-neutral-800">{getProgressPercentage()}%</span>
                <div className="w-24 bg-neutral-100 h-2 rounded-full overflow-hidden border border-neutral-200">
                  <div
                    className="bg-green-600 h-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-neutral-50 border border-neutral-200/50 rounded-sm">
            <Info className="h-4 w-4 text-[#C8A45D] flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
              {activePhase.tagline}
            </p>
          </div>

          {/* Interactive Checklist */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 font-semibold block mb-2">
              Your Daily Checklist
            </span>
            <div className="space-y-2.5">
              {activePhase.checklist.map((item, index) => {
                const isChecked = !!checkedItems[index]
                return (
                  <button
                    key={index}
                    onClick={() => handleCheckboxChange(index)}
                    className={`w-full text-left p-3.5 border rounded-sm transition-all duration-200 flex items-start gap-3.5 group ${
                      isChecked
                        ? 'border-green-200 bg-green-50/20 text-neutral-400'
                        : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-700'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      <CheckCircle2
                        className={`h-4 w-4 transition-colors ${
                          isChecked ? 'text-green-600 fill-green-50' : 'text-neutral-300 group-hover:text-neutral-500'
                        }`}
                      />
                    </div>
                    <span className={`text-xs font-light leading-relaxed ${isChecked ? 'line-through text-neutral-400' : 'text-neutral-700'}`}>
                      {item}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

        </div>
      )}

      {!tattooDate && (
        <div className="text-center py-8 border border-dashed border-neutral-300 bg-white rounded-sm">
          <Info className="h-6 w-6 text-neutral-300 mx-auto mb-2" />
          <p className="text-neutral-400 text-xs font-light">
            Enter your tattoo date above to activate your custom tracker.
          </p>
        </div>
      )}
    </div>
  )
}
