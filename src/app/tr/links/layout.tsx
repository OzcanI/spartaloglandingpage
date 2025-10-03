import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SpartaLog - Tüm Linkler',
  description: 'SpartaLog uygulamasına ait tüm linkler. App Store, iletişim ve daha fazlası.',
  openGraph: {
    title: 'SpartaLog - Tüm Linkler',
    description: 'SpartaLog uygulamasına ait tüm linkler. App Store, iletişim ve daha fazlası.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpartaLog - Tüm Linkler',
    description: 'SpartaLog uygulamasına ait tüm linkler. App Store, iletişim ve daha fazlası.',
  },
}

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return children
}
