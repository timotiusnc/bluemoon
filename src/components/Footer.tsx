import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { InstagramSvg } from './logo/InstagramSvg'
import { FacebookSvg } from './logo/FacebookSvg'
import { TwitterSvg } from './logo/TwitterSvg'

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center gap-8 py-16 font-display lg:flex-row lg:items-start">
          <div className="flex-1 self-center">
            <Logo />
          </div>
          <nav
            className="flex w-[200px] flex-col items-center lg:items-start"
            aria-label="quick links"
          >
            <span className="px-2 pb-4 text-base">Story of Blue Moon</span>
            <NavLink href="/#features">Why We&apos;re Here</NavLink>
            <NavLink href="/#faq">FAQs</NavLink>
          </nav>
          <nav
            className="flex w-[200px] flex-col items-center lg:items-start"
            aria-label="quick links"
          >
            <span className="pb-4 text-base">Follow Us</span>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com/blue.moon.id/"
                target="_blank"
                rel="noopener"
              >
                <InstagramSvg className="w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61550742867135"
                target="_blank"
                rel="noopener"
              >
                <FacebookSvg className="w-6" />
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Blue Moon. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
