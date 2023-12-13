import { Inter, Marcellus } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Blue Moon',
    default: 'Blue Moon - Natural & Lab Grown Diamond',
  },
  openGraph: {
    images: [
      {
        url: 'https://bluemoonid.vercel.app/opengraph-image.jpg',
        type: 'image/jpeg',
        width: 1024,
        height: 1024,
      },
    ],
  },
  description:
    'Natural and lab-grown diamond. Realizing the jewelry of your dreams. Talk to us about your dream piece!',
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
