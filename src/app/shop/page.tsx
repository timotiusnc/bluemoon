import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { type Metadata } from 'next'
import { BluemoonProduct, getProducts } from './products'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { formatCurrency } from '@/util/util'

export const metadata: Metadata = {
  title: 'Bluemoon Shop',
}

export default async function Shop() {
  const products: BluemoonProduct[] | undefined = await getProducts()
  return (
    <>
      <Header />
      <main>
        <Container className="flex flex-wrap justify-center gap-16">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      </main>
      <Footer />
    </>
  )
}

function ProductCard({ product }: { product: BluemoonProduct }) {
  return (
    <Link href={`/shop/${product.id}`}>
      <div className="items-left flex w-[250px] flex-col font-display">
        <Image
          src={product.images[0]}
          alt={product.name}
          className="rounded-lg shadow-xl hover:shadow-2xl"
          width={250}
          height={250}
        />
        <div className="mt-4 text-lg">{product.name}</div>
        <div className="text-sm">{formatCurrency(product.price)}</div>
      </div>
    </Link>
  )
}

// Otherwise, the shop page will be cached forever
export const revalidate = 0
