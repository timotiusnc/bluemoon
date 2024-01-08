import Image from 'next/image'

import { Container } from '@/components/Container'
import customize from '@/images/pages/home/customize.jpeg'
import { Button } from './Button'

export function CustomizeWithUs() {
  return (
    <section
      id="customize"
      aria-label="Customize with us"
      className="bg-sky-100 py-32"
    >
      <Container className="flex flex-col items-center gap-16 lg:flex-row">
        <Image
          src={customize}
          alt="Customize with us"
          className="bg-go max-h-[300px] max-w-[300px] flex-shrink rounded-lg object-cover shadow-2xl lg:max-w-[600px]"
        />
        <div className="flex flex-1 flex-col gap-4 font-display">
          <h2 className="text-3xl">Customize with us.</h2>
          <p>
            Discover the endless possibilities to create the perfect pair of
            rings that tells your love story.{' '}
          </p>
          <Button href="/custom" color="gold" className="max-w-max px-10">
            <span className="ml-3 font-bold">Start Now</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}
