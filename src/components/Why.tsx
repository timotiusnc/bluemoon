import Image from 'next/image'

import why from '@/images/pages/home/why.jpg'
import Link from 'next/link'

export function Why() {
  return (
    <section id="customize" aria-label="Customize with us">
      <Link href="/custom">
        <Image
          src={why}
          alt="Why we're here"
          className="max-h-[350px] min-h-[200px] object-cover"
        />
      </Link>
    </section>
  )
}
