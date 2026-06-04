import './globals.css'

export const metadata = {
  title: 'Inkjector Tattoos | Custom Premium Tattoo Studio by Akhil Saju',
  description: 'Inkjector Tattoos is a high-end luxury tattoo studio led by master artist Akhil Saju with 8+ years of professional experience. We specialize in custom-tailored blackwork, realism, and fine-line tattoos in a clinical, zen-like private atelier.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
