import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim - SpartaLog',
  description: 'SpartaLog ile iletişime geçin. Sorularınız ve önerileriniz için bizimle iletişime geçin.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
