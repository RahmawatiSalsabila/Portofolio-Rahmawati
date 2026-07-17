import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Salsabila Rahmawati — Software Engineer & IS Education Student',
  description:
    'Portfolio of Salsabila Rahmawati, a Software Engineer and Information Systems Education student crafting elegant, human-centered digital products with a passion for technology and education.',
  generator: 'v0.app',
  keywords: [
    'Software Engineer',
    'Information Systems Education',
    'Web Developer',
    'Laravel',
    'Portfolio',
    'Frontend Developer',
  ],
  openGraph: {
    title: 'Salsabila Rahmawati — Software Engineer & IS Education Student',
    description:
      'Crafting elegant, human-centered digital products at the intersection of technology and education.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f6f3ee',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
