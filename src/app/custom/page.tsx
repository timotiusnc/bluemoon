import Image from 'next/image'
import { Header } from '@/components/Header'
import bgHero from '@/images/hero/customize.jpg'
import { Container } from '@/components/Container'
import { WhatsAppLogo } from '@/components/logo/Whatsapp'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { Mail } from 'lucide-react'
import { type Metadata } from 'next'
import { generateWALink } from '@/util/util'

export const metadata: Metadata = {
  title: 'Customize your forever',
}

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
                Customize Your Forever
              </span>
            </h1>
          </div>
        </div>
        <section className="relative overflow-hidden bg-slate-50 py-20">
          <Container>
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-3xl">Contact Us</h2>
              <div className="">
                Give us a heads up if you want to customize your diamonds
              </div>
              <div className="flex justify-center gap-8 lg:gap-14">
                <Button
                  href="mailto:contact@bluemoon.co.id"
                  target="_blank"
                  rel="noopener"
                >
                  <Mail />
                  <span className="ml-3 font-bold">Email Us</span>
                </Button>
                <Button
                  href={generateWALink({ phone: '628176000823' })}
                  color="blue"
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsAppLogo className="w-6" />
                  <span className="ml-3 font-bold">WhatsApp Us</span>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
