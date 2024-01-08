import { CallToAction } from '@/components/CallToAction'
import { CustomizeWithUs } from '@/components/Customize'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Slider } from '@/components/Slider'
import { Testimonials } from '@/components/Testimonials'
import { Why } from '@/components/Why'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <CustomizeWithUs />
        <Why />
      </main>
      <Footer />
    </>
  )
}
