import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import bgDiamond from '@/images/hero/main.jpg'
import { WhatsAppLogo } from './logo/Whatsapp'
import { InstagramSvg } from './logo/InstagramSvg'
import { generateWALink } from '@/util/util'

export function Hero() {
  return (
    <Container className="pb-20 text-center">
      <Image
        src={bgDiamond}
        alt=""
        className="absolute inset-0 h-full min-h-[750px] w-full object-cover"
        priority
      />

      <div className="relative rounded-lg bg-white/50 px-5 py-10 backdrop-blur-[5px] lg:bg-white/40 lg:backdrop-blur-sm">
        <h1 className="relative mx-auto max-w-4xl font-display text-3xl font-medium text-amber-950 lg:text-7xl">
          <span className="bg-gradient-to-b from-sky-950 to-sky-700 bg-clip-text tracking-widest text-transparent">
            BLUE MOON
          </span>
        </h1>
        <h2 className="relative mx-auto mt-6 max-w-2xl font-display text-xl font-semibold text-cyan-950 lg:text-3xl">
          Natural & Lab Grown Diamond
        </h2>
        <p className="relative mx-auto mt-6 hidden max-w-2xl text-sm tracking-tighter text-cyan-950 lg:block lg:text-lg">
          Realizing the jewelry of your dreams
        </p>
        <div className="relative flex flex-wrap justify-center gap-6 py-10">
          <Button
            href={generateWALink({ phone: '628176000823' })}
            color="white"
            target="_blank"
            rel="noopener"
          >
            <WhatsAppLogo className="w-6" />
            <span className="ml-3 font-bold">Contact Us</span>
          </Button>
          <Button
            href="https://instagram.com/blue.moon.id/"
            color="white"
            target="_blank"
            rel="noopener"
          >
            <InstagramSvg className="w-6" />
            <span className="ml-3 font-bold">Explore our IG</span>
          </Button>
        </div>
      </div>
    </Container>
  )
}
