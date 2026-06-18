import React from 'react'

export default function JsonLd({ type = 'all' }) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.inkjectortattoos.com/#website",
    "url": "https://www.inkjectortattoos.com",
    "name": "Inkjector Tattoos",
    "description": "Premium Private Tattoo Studio & Atelier in Kozhikode, Kerala",
    "publisher": {
      "@id": "https://www.inkjectortattoos.com/#organization"
    },
    "inLanguage": "en-US"
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.inkjectortattoos.com/#organization",
    "name": "Inkjector Tattoos",
    "url": "https://www.inkjectortattoos.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.inkjectortattoos.com/logo.png",
      "width": "512",
      "height": "512"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-80866-12111",
      "contactType": "reservations",
      "areaServed": "IN",
      "availableLanguage": ["en", "ml"]
    },
    "sameAs": [
      "https://www.instagram.com/inkjectortattoos",
      "https://www.facebook.com/inkjectortattoos"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "@id": "https://www.inkjectortattoos.com/#localbusiness",
    "name": "Inkjector Tattoos",
    "image": [
      "https://www.inkjectortattoos.com/images/gallery/sacred-geometry-sleeve-tattoo-kerala.jpg",
      "https://www.inkjectortattoos.com/images/gallery/classical-greek-portrait-tattoo.jpg",
      "https://www.inkjectortattoos.com/images/gallery/neo-geometric-forearm-sleeve-tattoo.jpg"
    ],
    "url": "https://www.inkjectortattoos.com",
    "telephone": "+918086612111",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Medical College, Cherukulathoor",
      "addressLocality": "Kozhikode",
      "addressRegion": "Kerala",
      "postalCode": "673008",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.261685,
      "longitude": 75.877028
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "20:00"
      }
    ],
    "hasMap": "https://maps.google.com/?q=Inkjector+Tattoos+Cherukulathoor+Kozhikode",
    "sameAs": [
      "https://www.instagram.com/inkjectortattoos"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does getting a tattoo hurt? How do you manage pain at Inkjector Tattoos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pain is subjective, but most clients describe it as a light scratching sensation. We prioritize your comfort by using gentle needle techniques, choosing comfortable body placements, pacing sessions to your endurance, and providing a highly relaxed environment with refreshments."
        }
      },
      {
        "@type": "Question",
        "name": "How is tattoo pricing calculated in Kozhikode, Kerala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tattoo pricing depends on overall size, design complexity, and anatomical placement. Since every tattoo at Inkjector Tattoos Calicut is custom-designed from scratch, we offer a transparent, flat-rate quote during design approval so you know exactly what to expect."
        }
      },
      {
        "@type": "Question",
        "name": "What is the tattoo booking and consultation process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking begins with our online inquiry form or a direct message. We arrange a 30-minute consultation (in-person or virtual) to review ideas and take measurements. A booking deposit is required to lock in your tattoo session slot and allow Akhil to begin drawing your design."
        }
      },
      {
        "@type": "Question",
        "name": "How do I care for my new tattoo? What is the aftercare process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We apply a medical-grade transparent protective film (second-skin) immediately after your session, which you leave on for 3-5 days. Once removed, wash it gently with mild soap and apply our custom organic aftercare ointment. We provide a full kit and checklist to ensure smooth healing."
        }
      },
      {
        "@type": "Question",
        "name": "Can you cover up or restore old tattoos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in custom cover-ups. artist Akhil Saju analyzes the dark values of your existing tattoo and constructs a new, larger composition—usually incorporating blackwork, solid geometry, or detailed shading—to fully mask the old ink while creating a beautiful new piece."
        }
      }
    ]
  }

  let schemasToInject = []
  if (type === 'all') {
    schemasToInject = [websiteSchema, organizationSchema, localBusinessSchema, faqSchema]
  } else if (type === 'website') {
    schemasToInject = [websiteSchema]
  } else if (type === 'organization') {
    schemasToInject = [organizationSchema]
  } else if (type === 'local') {
    schemasToInject = [localBusinessSchema]
  } else if (type === 'faq') {
    schemasToInject = [faqSchema]
  }

  return (
    <>
      {schemasToInject.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
