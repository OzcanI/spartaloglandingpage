import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - SpartaLog',
  description: 'Get in touch with SpartaLog. Contact us for questions and suggestions.',
}

export default function ContactEnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
