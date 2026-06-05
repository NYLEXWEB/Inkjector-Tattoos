import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.inkjectortattoos.com'),
  title: {
    default: 'Inkjector Tattoos | Premium Tattoo Studio in Kozhikode Kerala',
    template: '%s | Inkjector Tattoos'
  },
  description: 'Inkjector Tattoos is a high-end luxury tattoo studio led by master artist Akhil Saju in Kozhikode (Calicut), Kerala. We specialize in custom-tailored realism, geometric blackwork, fine-line, and safe cover-up tattoos in a clinical, zen-like private atelier.',
  keywords: [
    'tattoo studio kozhikode',
    'best tattoo studio kozhikode',
    'tattoo artist kozhikode',
    'best tattoo artist kerala',
    'custom tattoo kerala',
    'realistic tattoo kerala',
    'portrait tattoo kozhikode',
    'professional tattoo studio kerala',
    'inkjector tattoos',
    'tattoo shop kozhikode',
    'premium tattoo studio kerala',
    'custom tattoo design kerala',
    'cover up tattoo kozhikode',
    'black and grey tattoo kerala',
    'color tattoo kerala',
    'tattoo consultation kozhikode',
    'best tattoo shop kerala',
    'professional tattoo services kerala',
    'certified tattoo artist kerala',
    'hygienic tattoo studio kerala'
  ],
  authors: [{ name: 'Akhil Saju', url: 'https://www.inkjectortattoos.com' }],
  creator: 'Akhil Saju',
  publisher: 'Inkjector Tattoos',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Inkjector Tattoos | Premium Tattoo Studio in Kozhikode Kerala',
    description: 'Bespoke private tattoo studio led by master artist Akhil Saju. We specialize in custom-tailored blackwork, realism, and fine-line tattoos in a clinical, zen-like private atelier in Kozhikode, Kerala.',
    url: 'https://www.inkjectortattoos.com',
    siteName: 'Inkjector Tattoos',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.inkjectortattoos.com/hero-section.png',
        width: 1200,
        height: 630,
        alt: 'Inkjector Tattoos Studio Kozhikode Kerala'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inkjector Tattoos | Premium Tattoo Studio in Kozhikode Kerala',
    description: 'Bespoke private tattoo studio led by master artist Akhil Saju in Kozhikode, Kerala.',
    images: ['https://www.inkjectortattoos.com/hero-section.png']
  },
  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Kozhikode',
    'geo.position': '11.261685;75.877028',
    'ICBM': '11.261685, 75.877028'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C8A45D'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#C8A45D]/30 selection:text-neutral-900">
        {children}
      </body>
    </html>
  )
}
