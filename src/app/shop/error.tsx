'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <>
      <Header />
      {error.message}
      <Footer />
    </>
  )
}
