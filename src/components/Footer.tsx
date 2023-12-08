import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { InstagramSvg } from './logo/InstagramSvg'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col py-16">
          <Logo />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/#features">Features</NavLink>
              <NavLink href="/#testimonials">Testimonials</NavLink>
              <NavLink href="/#faq">FAQs</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://instagram.com/flowerstory_co"
              target="_blank"
              rel="noopener"
              className="group"
              aria-label="TaxPal on Twitter"
            >
              <InstagramSvg className="h-6 w-6 fill-slate-500" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Blue Moon. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
