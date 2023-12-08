import Image from 'next/image'
import { Header } from '@/components/Header'
import bgHero from '@/images/hero/love.png'
import engagement from '@/images/pages/love/engagement.png'
import wedding from '@/images/pages/love/wedding.png'
import { Container } from '@/components/Container'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

export default function LoveEngagement() {
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
                Love & Engagement
              </span>
            </h1>
          </div>
        </div>
        <section
          id="features"
          aria-label="Features for running your books"
          className="relative overflow-hidden bg-slate-50 py-10"
        >
          <Container>
            <div className="flex justify-center gap-8 lg:gap-14">
              <BlurContainer url="/" image={engagement} title="Engagement" />
              <BlurContainer url="/" image={wedding} title="Wedding" />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

function BlurContainer({
  url,
  image,
  title,
}: {
  url: string
  image: string | StaticImport
  title: string
}) {
  return (
    <Link href={url} target="_blank" rel="noopener">
      <div className="flex flex-col gap-4 font-display">
        <div className="relative flex min-h-[150px] min-w-[150px] items-center justify-center rounded-lg px-3 py-1 shadow-md hover:shadow-xl lg:min-h-[500px] lg:min-w-[500px]">
          <Image
            alt="Flower"
            src={image}
            className="absolute inset-0 rounded-lg"
          />
          <div className="absolute inset-0 min-h-full min-w-full rounded-lg bg-black/30 hover:bg-black/40"></div>
          <div className="relative text-lg font-bold leading-3 text-white lg:text-2xl">
            {title}
          </div>
        </div>
      </div>
    </Link>
  )
}
