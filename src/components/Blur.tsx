import Image from 'next/image'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export function BlurContainer({
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
        <div className="relative flex min-h-[150px] min-w-[150px] items-center justify-center rounded-lg px-3 py-1 shadow-md hover:shadow-xl lg:min-h-[350px] lg:min-w-[350px]">
          <Image
            alt={alt}
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
