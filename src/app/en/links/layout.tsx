import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SpartaLog - All Links',
  description: 'All links for SpartaLog app. App Store, contact and more.',
  openGraph: {
    title: 'SpartaLog - All Links',
    description: 'All links for SpartaLog app. App Store, contact and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpartaLog - All Links',
    description: 'All links for SpartaLog app. App Store, contact and more.',
  },
}

export default function LinksEnLayout({ children }: { children: React.ReactNode }) {
  return children
}
