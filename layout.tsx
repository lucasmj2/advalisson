import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Dr. Alison Vieira - Advogado Especialista em Direito Tributário e Trabalhista',
  description: 'Advocacia especializada em direito tributário, trabalhista e organização societária. Proteção patrimonial e planejamento jurídico em Sinop-MT.',
  keywords: 'advogado, direito tributário, direito trabalhista, organização societária, proteção patrimonial, Sinop-MT',
  authors: [{ name: 'Dr. Alison Vieira' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Dr. Alison Vieira - Advogado Especialista',
    description: 'Advocacia especializada em direito tributário, trabalhista e organização societária.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ff5a1f" />
      </head>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  )
}
