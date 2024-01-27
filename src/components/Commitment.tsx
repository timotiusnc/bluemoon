import Image, { StaticImageData } from 'next/image'

import c1 from '@/images/commitment/quality.png'
import c2 from '@/images/commitment/heritage.png'
import c3 from '@/images/commitment/transparency.png'
import c4 from '@/images/commitment/exceptional.png'

const commitments = [
  {
    img: c1,
    title: 'QUALITY OVER EVERYTHING',
    desc: 'Best craftsmanship in the market',
  },
  {
    img: c2,
    title: 'HERITAGE & LEGACY',
    desc: 'Made from rich foundation of expertise ',
  },
  {
    img: c3,
    title: 'TRANSPARENCY',
    desc: 'Giving clients clear and concise informations',
  },
  {
    img: c4,
    title: 'EXCEPTIONAL SERVICE',
    desc: 'Commitment to always give the extra miles',
  },
]

export function Commitment() {
  return (
    <section className="bg-bm-500 flex justify-around gap-4 px-20 py-10 font-display text-white">
      {commitments.map((commitment, id) => (
        <CommitmentCard key={id} {...commitment} />
      ))}
    </section>
  )
}

function CommitmentCard({
  img,
  title,
  desc,
}: {
  img: StaticImageData
  title: string
  desc: string
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={img} alt={title} width={100} height={100} />
      <h3 className="text-lg">{title}</h3>
      <p className="max-w-[200px] text-center text-sm">{desc}</p>
    </div>
  )
}
