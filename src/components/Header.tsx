'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

const links = [
  { url: '/love', title: 'Love & Engangement' },
  { url: '/custom', title: 'Customize Your Forever' },
  { url: '/lab', title: 'Lab Grown Diamonds' },
  { url: '/story', title: 'Story of Blue Moon' },
]

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {links.map(({ url, title }) => (
              <MobileNavLink key={url} href={url}>
                {title}
              </MobileNavLink>
            ))}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="z-50 py-5">
      <Container className="flex flex-row items-center lg:flex-col">
        <Link
          href="/"
          aria-label="Blue Moon Jewellery"
          className="hidden lg:block"
        >
          <Logo />
        </Link>
        <nav className="relative mt-5 flex flex-1 items-center justify-around">
          <Link
            href="/"
            aria-label="Blue Moon Jewellery"
            className="block lg:hidden"
          >
            <Logo />
          </Link>
          <div className="md:gap-x-12">
            <div className="hidden rounded-lg bg-white/40 p-2 backdrop-blur-sm md:flex md:gap-x-6">
              {links.map(({ url, title }) => (
                <NavLink key={url} href={url}>
                  {title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </nav>
      </Container>
    </header>
  )
}
