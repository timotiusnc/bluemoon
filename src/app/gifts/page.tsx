import Image from 'next/image'
import { Header } from '@/components/Header'
import bgHero from '@/images/hero/gifts.jpg'
import earrings from '@/images/pages/gifts/earrings.jpg'
import necklace from '@/images/pages/gifts/necklace.jpg'
import rings from '@/images/pages/gifts/rings.jpg'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { type Metadata } from 'next'
import { BlurContainer } from '@/components/Blur'

export const metadata: Metadata = {
  title: 'Gifts for Her',
}

export default function Gifts() {
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
                Gifts for Her
              </span>
            </h1>
          </div>
        </div>
        <section className="relative overflow-hidden bg-slate-50 py-20">
          <Container>
            <div className="flex flex-wrap justify-center gap-8">
              <BlurContainer
                url="#"
                image={earrings}
                title="Earrings"
                alt="Earrings illustration"
              />
              <BlurContainer
                url="#"
                image={necklace}
                title="Necklace"
                alt="Necklace illustration"
              />
              <BlurContainer
                url="#"
                image={rings}
                title="Rings"
                alt="Rings illustration"
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
