import React from 'react'
import { Button } from '@/components/ui/button'
import { RiSearchLine } from '@remixicon/react'
import { TooltipComp } from '../common/tooltip-component'
import Link from 'next/link'
export const Header = () => {
  return (
    <header className="w-full relative">
      {/* backdrop-blur-xs backdrop-saturate-50 bg-[#111928]/75 border-b border-b-white/30 */}
      <hgroup className="w-full max-w-screen-xl  flex justify-between py-4 pb-3 px-4 mx-auto border-b border-b-white/20">
        <Link href={'/'}>
          <h1 className="text-lg">Favor</h1>
        </Link>
        <nav>
          <ul className="flex gap-1 text-sm font-light">
            <li>
              <Link href={'/contact-me'}>
                <Button variant={'link'} className="text-white">
                  Contact
                </Button>
              </Link>
            </li>
            <li>
              <Link href={'/blog'}>
                <Button variant={'link'} className="text-white">
                  Blog
                </Button>
              </Link>
            </li>
            <TooltipComp
              trigger={
                <Button
                  variant={'ghost'}
                  className="rounded-full bg-inherit text-white hover:bg-inherit hover:text-background"
                >
                  <RiSearchLine />
                </Button>
              }
              content="Search blog posts"
            />
          </ul>
        </nav>
      </hgroup>
    </header>
  )
}
