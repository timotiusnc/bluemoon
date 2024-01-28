import { getSheet } from '@/lib/spreadsheet/get'

export type BluemoonProduct = {
  id: string
  name: string
  price: number
  type: string
  carat: number
  size: number
  clarity: string
  color: string
  images: string[]
  videos: string[]
  description: string
  release_timestamp: number
  release_datetime: Date
}

export async function getProducts(): Promise<BluemoonProduct[] | undefined> {
  const products = await getSheet('products')
  return products?.slice(1).map((product) => ({
    id: product[0],
    name: product[1],
    price: product[2],
    type: product[3],
    carat: product[4],
    size: product[5],
    clarity: product[6],
    color: product[7],
    images: product[8]
      ? JSON.parse(product[8]).map((url: string) => getGDriveUrl(url))
      : [],
    videos: product[9] ? JSON.parse(product[9]) : [],
    description: product[10],
    release_timestamp: product[11],
    release_datetime: new Date(Number.parseInt(product[11])),
  }))
}

export async function getProduct(
  id: string,
): Promise<BluemoonProduct | undefined> {
  const products = await getProducts()
  return products?.find((product) => product.id === id)
}

export function getGDriveUrl(url: string) {
  return `https://drive.google.com/thumbnail?id=${getGDriveID(url)}&sz=w500`
}

function getGDriveID(url: string) {
  // input: https://drive.google.com/file/d/abcdef/view?usp=sharing
  // output: abcdef
  const match = url.match(/\/d\/(.*)\//)
  return match ? match[1] : undefined
}
