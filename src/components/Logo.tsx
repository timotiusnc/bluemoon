import Image from 'next/image'
import logo from '@/images/logos/bluemoon-logo.png'

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <Image
        src={logo}
        alt=""
        className="h-auto w-24 object-cover lg:w-40"
        priority
      />
    </div>
  )
}
