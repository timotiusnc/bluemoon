import Image from 'next/image'
import { Header } from '@/components/Header'
import bgHero from '@/images/pages/custom/hero.webp'
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
        <div className="relative min-h-[300px] pb-10 text-center lg:min-h-[400px]">
          <Image
            src={bgHero}
            alt=""
            className="absolute h-full w-full object-cover"
            priority
          />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-lg bg-white/40 px-5 py-10 font-display backdrop-blur-sm">
            <h1 className="text-3xl text-slate-800 lg:text-6xl">
              Customize Your Forever
            </h1>
            <div className="hidden text-lg text-slate-800 lg:block">
              Here at Blue Moon, we are dedicated to turn everyone&apos;s
              jewelry dreams into reality.
              <br />
              With our finest craftsmanship, the possibilities are limitless.
              <br />
              We are here to make your dreams come true.
            </div>
            <Button href="/custom" color="gold" className="max-w-max px-10">
              <span className="ml-3 font-bold">Start Now</span>
            </Button>
          </div>
        </div>

        <section className="relative overflow-hidden bg-slate-50 py-10">
          <Container>
            <div className="flex flex-col items-center gap-8 font-display">
              <h2 className="text-3xl">Need Help?</h2>
              <div>It would be our pleasure to assist you</div>
              <div className="flex justify-center gap-8 lg:gap-14">
                <Button
                  href="mailto:contact@bluemoon.co.id"
                  target="_blank"
                  rel="noopener"
                >
                  <Mail />
                  <span className="ml-3 font-bold">Email</span>
                </Button>
                <Button
                  href={generateWALink({ phone: '628176000823' })}
                  color="blue"
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsAppLogo className="w-6" />
                  <span className="ml-3 font-bold">WhatsApp</span>
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
