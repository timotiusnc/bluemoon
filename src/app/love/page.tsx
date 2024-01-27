import Image from 'next/image'
import { Header } from '@/components/Header'
import bgHero1 from '@/images/pages/love/fig2.jpeg'
import bgHero2 from '@/images/pages/love/fig7.jpeg'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { type Metadata } from 'next'
import { Button } from '@/components/Button'
import { Commitment } from '@/components/Commitment'

export const metadata: Metadata = {
  title: 'Love & Engagement',
}

export default function LoveEngagement() {
  return (
    <>
      <Header />
      <main>
        <Container className="pb-10">
          <div className="flex items-center justify-around py-10 lg:flex-row">
            <div className="max-w-lg text-center font-display lg:text-left">
              <h1 className="mb-5 text-2xl font-medium lg:text-3xl">
                Only the finest materials & craftsmanship, designed to dazzle as
                a symbol of your love story.
              </h1>
              <p className="leading-relaxed">
                Discover our stunning collection of engagement rings and find
                the perfect one you’ll say YES to.
              </p>
            </div>
            <Image
              src={bgHero1}
              alt=""
              className="hidden max-h-[500px] max-w-xl rounded-lg object-cover shadow-xl lg:block"
              priority
            />
          </div>

          <div className="hidden items-center justify-around py-10 lg:flex">
            <Image
              src={bgHero2}
              alt=""
              className="hidden max-h-[500px] max-w-xl rounded-lg object-cover shadow-xl lg:block"
            />
            <div className="max-w-lg text-center font-display lg:text-left">
              <h1 className="mb-5 text-2xl font-medium lg:text-3xl">
                A promise of forever, encapsulated in a jewelry.
              </h1>
              <p className="leading-relaxed">
                Celebrate your Once In A Blue Moon moment And tie the knot with
                the wedding band of your dreams.
              </p>
            </div>
          </div>
        </Container>

        <div className="bg-gold-200 flex flex-col items-center gap-8 px-20 py-10 text-center font-display">
          <div className="flex flex-col">
            <span className="text-lg">
              Discover the endless possibilities to create the perfect pair of
              rings that tells your love story
            </span>
            <span className="font-semibold">
              Customize your wedding bands with us
            </span>
          </div>
          <Button href="/custom" color="gold" className="max-w-max px-10">
            <span className="ml-3 font-bold">Start Now</span>
          </Button>
        </div>
        <Commitment />
      </main>
      <Footer />
    </>
  )
}
