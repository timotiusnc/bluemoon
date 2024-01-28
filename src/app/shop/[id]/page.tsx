import { ResolvingMetadata, type Metadata } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { BluemoonProduct, getProduct } from '@/app/shop/products'
import { Button } from '@/components/Button'
import { formatCurrency, generateWALink } from '@/util/util'
import PreviewImages from './PreviewImage'

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const product = await getProduct(params.id)
  const previousImages = (await parent).openGraph?.images || []

  if (!product)
    return {
      title: 'Product not found',
      openGraph: {
        images: [...previousImages],
      },
    }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.images[0], ...previousImages],
    },
  }
}

export default async function Product({ params }: Props) {
  const product = await getProduct(params.id)
  if (!product) return <div>Product not found</div>

  return (
    <>
      <Header />
      <main>
        <Container className="flex flex-col gap-4 lg:flex-row">
          <PreviewImages product={product} />
          <ProductCard product={product} />
        </Container>
      </main>
      <Footer />
    </>
  )
}

function ProductCard({ product }: { product: BluemoonProduct }) {
  return (
    <div className="flex basis-1/2 flex-col gap-4">
      <div className="font-display text-3xl">{product.name}</div>
      <div className="font-bold text-pink-500">{product.type}</div>
      <div className="text-sm">{product.description}</div>
      <div className="text-xl font-bold">
        Starting from {formatCurrency(product.price)}
      </div>
      <hr />
      <div className="text-sm">Product Information</div>
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">
        <ProductInfo title="Carat" value={product.carat} />
        <ProductInfo title="Clarity" value={product.clarity} />
        <ProductInfo title="Size" value={product.size} />
        <ProductInfo title="Color" value={product.color} />
      </div>
      <div className="flex">
        <Button
          href={generateWALink({
            phone: '628176000823',
            text: `Hey I want to inquire about ${product.name} (https://bluemoonid.vercel.app/shop/${product.id})`,
          })}
          color="gold"
          className="basis-full lg:basis-1/2"
          target="_blank"
          rel="noopener"
        >
          <span className="px-8 font-bold">Inquiry</span>
        </Button>
      </div>
    </div>
  )
}

function ProductInfo({
  title,
  value,
}: {
  title: string
  value: string | number
}) {
  return (
    <div className="flex flex-grow basis-1/3 text-sm">
      <div className="basis-1/3 border-b border-l border-t border-slate-300 bg-gold-200 p-2 text-center font-semibold text-red-800">
        {title}
      </div>
      <div className="basis-2/3 border-b border-r border-t border-slate-300 p-2 text-center">
        {value}
      </div>
    </div>
  )
}
