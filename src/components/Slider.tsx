'use client'

import Image from 'next/image'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'

import slider1 from '@/images/pages/home/sliders/slider1.jpg'
import slider2 from '@/images/pages/home/sliders/slider2.jpg'
import slider3 from '@/images/pages/home/sliders/slider3.jpg'
import { useEffect, useState } from 'react'

export function Slider() {
  const [current, setCurrent] = useState(1)
  useEffect(() => {
    if (current === 4) setCurrent(1)
    const selected = document.querySelector(
      `#slider${current > 3 ? 1 : current}`,
    )
    selected?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [current])

  return (
    <div className="relative pb-10">
      <div className="flex snap-x snap-mandatory overflow-hidden">
        <CarouselImg src={slider1} alt="Slider 1" id="slider1" />
        <CarouselImg src={slider2} alt="Slider 2" id="slider2" />
        <CarouselImg src={slider3} alt="Slider 3" id="slider3" />
      </div>
      <button
        className="absolute left-10 top-1/2 -translate-y-1/2 text-slate-400"
        onClick={() => {
          setCurrent((cur) => cur - 1)
        }}
      >
        <ChevronLeftCircle size={48} />
      </button>
      <button
        className="absolute right-10 top-1/2 -translate-y-1/2 text-slate-400"
        onClick={() => {
          setCurrent((cur) => cur + 1)
        }}
      >
        <ChevronRightCircle size={48} />
      </button>
    </div>
  )
}

function CarouselImg({ src, alt, id }: { src: any; alt: string; id: string }) {
  return (
    <div className="flex min-w-full snap-center" id={id}>
      <Image
        src={src}
        alt={alt}
        className="h-[500px] min-w-full object-cover"
        priority
      />
    </div>
  )
}
