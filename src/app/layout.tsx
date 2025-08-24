import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'SpartaLog - AI Destekli Fitness Takip Uygulaması',
  description: 'SpartaLog ile antrenmanlarınızı AI teknolojisi ile analiz edin, ilerlemenizi takip edin ve hedeflerinize ulaşın.',
  keywords: 'fitness, antrenman, AI, yapay zeka, spor, takip, uygulama',
  authors: [{ name: 'SpartaLog Team' }],
  openGraph: {
    title: 'SpartaLog - AI Destekli Fitness Takip',
    description: 'AI teknolojisi ile güçlendirilmiş fitness takip uygulaması',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpartaLog - AI Destekli Fitness Takip',
    description: 'AI teknolojisi ile güçlendirilmiş fitness takip uygulaması',
  },
  robots: 'index, follow',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
