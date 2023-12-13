import Image from 'next/image'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export function SquareList({
  url,
  image,
  title,
  alt,
}: {
  url: string
  image: string | StaticImport
  title: string
  alt: string
}) {
  return (
    <Link href={url}>
      <div className="flex flex-col gap-4 font-display">
        <div className="relative flex min-h-[150px] min-w-[150px] items-center justify-center rounded-lg px-3 py-1 shadow-md hover:shadow-xl lg:min-h-[300px] lg:min-w-[300px]">
          <Image
            alt={alt}
            src={image}
            className="absolute inset-0 h-[150px] rounded-lg object-cover lg:h-[300px]"
          />
          <div className="absolute inset-0 min-h-full min-w-full rounded-lg hover:bg-white/30"></div>
        </div>
      </div>
    </Link>
  )
}
