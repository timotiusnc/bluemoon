'use client'

import { BluemoonProduct } from '@/app/shop/products'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

export default function PreviewImages({
  product,
}: {
  product: BluemoonProduct
}) {
  const [selectedImg, setSelectedImg] = useState(product.images[0])

  return (
    <div className="flex basis-1/2 flex-col-reverse items-center justify-center gap-4 lg:flex-row lg:items-start">
      <div className="flex flex-row gap-4 lg:flex-col">
        {product.images.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={product.name}
            className={clsx(
              'cursor-pointer rounded-lg border-2 border-red-300 object-cover shadow',
              image === selectedImg ? 'border-2' : 'border-0',
            )}
            width={50}
            height={50}
            onClick={() => setSelectedImg(image)}
          />
        ))}
      </div>

      <div className="w-[250px] lg:w-[400px]">
        <Image
          src={selectedImg}
          alt={product.name}
          className="rounded-lg object-cover shadow-xl"
          width={450}
          height={450}
        />
      </div>
    </div>
  )
}
