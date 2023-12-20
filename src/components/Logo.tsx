import Image from 'next/image'
import logo from '@/images/logos/bluemoon.png'

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className="flex flex-row items-center gap-2 self-center lg:flex-col lg:gap-0"
      {...props}
    >
      <Image
        src={logo}
        alt=""
        className="h-auto w-24 object-cover lg:w-56"
        priority
      />
      {/* <div className="font-display">BLUE MOON</div>
      <div className="font-display text-xs">JEWELLERY</div> */}
    </div>
  )
}
