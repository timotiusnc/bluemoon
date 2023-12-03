import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { WhatsAppLogo } from './logo/Whatsapp'
import { generateWALink } from '@/util/util'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get your dream jewellery today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Discover elegance with Blue Moon. Shop now and elevate your style
            with our exquisite collection.
          </p>
          <Button
            href={generateWALink({ phone: '628176000823' })}
            color="white"
            target="_blank"
            rel="noopener"
            className="mt-10"
          >
            <WhatsAppLogo className="w-6" />
            <span className="ml-3 font-bold">Contact Us</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}
