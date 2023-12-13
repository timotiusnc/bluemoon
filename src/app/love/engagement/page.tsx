import Image from 'next/image'
import { Header } from '@/components/Header'
import bgHero from '@/images/pages/love/engagement.jpg'
import ring1 from '@/images/screenshots/rings/ring-1.jpg'
import ring2 from '@/images/screenshots/rings/ring-2.jpg'
import ring3 from '@/images/screenshots/rings/ring-3.jpg'
import ring4 from '@/images/screenshots/rings/ring-4.jpg'
import ring5 from '@/images/screenshots/rings/ring-5.jpg'
import ring6 from '@/images/screenshots/rings/ring-6.jpg'
import ring7 from '@/images/screenshots/rings/ring-7.jpg'
import ring8 from '@/images/screenshots/rings/ring-8.jpg'
import ring9 from '@/images/screenshots/rings/ring-9.jpg'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { type Metadata } from 'next'
import { Button } from '@/components/Button'
import { SquareList } from '@/components/SquareList'

export const metadata: Metadata = {
  title: 'Engagement',
}

const rings = [
  { img: ring1, title: 'Earring 1' },
  { img: ring2, title: 'Earring 2' },
  { img: ring3, title: 'Earring 3' },
  { img: ring4, title: 'Earring 4' },
  { img: ring5, title: 'Earring 5' },
  { img: ring6, title: 'Earring 6' },
  { img: ring7, title: 'Earring 7' },
  { img: ring8, title: 'Earring 8' },
  { img: ring9, title: 'Earring 9' },
]

export default function Engagement() {
  return (
    <>
      <Header />
      <main className="">
        <div className="flex min-h-[250px] items-center justify-around p-10 lg:min-h-[500px]">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="mb-5 font-display text-2xl font-medium text-amber-950 lg:text-5xl">
              <span className="bg-gradient-to-b from-sky-950 to-sky-700 bg-clip-text tracking-widest text-transparent">
                Engagement Rings
              </span>
            </h1>
            <p className="leading-relaxed">
              Discover the Perfect Symbol of Your Love: Explore Our Exquisite
              Collection of Engagement Rings.
            </p>
          </div>
          <Image
            src={bgHero}
            alt=""
            className="hidden max-h-[500px] max-w-xl rounded-lg object-cover shadow-xl lg:block"
            priority
          />
        </div>
        <section className="flex flex-col items-center gap-8 overflow-hidden bg-sky-200 py-12">
          <div className="max-w-xl px-8 text-center">
            <p className="leading-loose">
              Transform your vision into reality with Blue Moon&apos;s bespoke
              jewelry service. Collaborate with our expert artisans to create
              unique, personalized pieces that reflect your individual style and
              story
            </p>
          </div>
          <Button href="/custom" color="blue">
            Customize Your Forever
          </Button>
        </section>
        <section className="relative overflow-hidden bg-slate-50 py-20">
          <Container>
            <div className="flex flex-wrap justify-center gap-8">
              {rings.map((ring, i) => (
                <SquareList
                  key={i}
                  url="#"
                  image={ring.img}
                  title={ring.title}
                  alt={ring.title}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
