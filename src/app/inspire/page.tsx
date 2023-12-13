import Image from 'next/image'
import { Header } from '@/components/Header'
import bgHero from '@/images/hero/inspire.jpg'
import engagement from '@/images/pages/love/engagement.jpg'
import wedding from '@/images/pages/love/wedding.jpg'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { BlurContainer } from '@/components/Blur'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Inspired',
}

export default function LabGrown() {
  return (
    <>
      <Header />
      <main className="">
        <div className="relative min-h-[250px] pb-20 text-center lg:min-h-[500px]">
          <Image
            src={bgHero}
            alt=""
            className="absolute h-full w-full object-cover"
            priority
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/50 px-5 py-10 backdrop-blur-[5px] lg:bg-white/40 lg:backdrop-blur-sm">
            <h1 className="mx-auto max-w-4xl font-display text-3xl font-medium text-amber-950 lg:text-7xl">
              <span className="bg-gradient-to-b from-sky-950 to-sky-700 bg-clip-text tracking-widest text-transparent">
                Get Inspired
              </span>
            </h1>
          </div>
        </div>
        <section className="relative overflow-hidden bg-slate-50 py-20">
          <Container>
            <div className="flex justify-center gap-8 lg:gap-14">
              <BlurContainer
                url="/"
                image={engagement}
                title="Engagement"
                alt="Engagement illustration"
              />
              <BlurContainer
                url="/"
                image={wedding}
                title="Wedding"
                alt="Wedding illustration"
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
