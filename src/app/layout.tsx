import { Inter, Marcellus } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Blue Moon',
    default: 'Blue Moon - Natural & Lab Grown Diamond',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const marcellus = Marcellus({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marcellus',
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        marcellus.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
