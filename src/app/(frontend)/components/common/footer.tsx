import { Button } from '@/components/ui/button'
import React from 'react'
import { ChangeColorMode } from './change-color-mode'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="w-full bg-foreground dark:bg-background dark:border-t  text-background py-10 mt-10 px-4">
      <section className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <h2 className="text-2xl font-semibold mb-4">Favor</h2>
        <nav>
          <ul className="flex gap-3 md:gap-5  font-light flex-col md:flex-row">
            <li>
              <ChangeColorMode />
            </li>
            <li>
              <Link href={'/contact-me'} className="text-white">
                <Button variant={'link'} className="text-white">
                  Contact
                </Button>
              </Link>
            </li>
            <li>
              <Link href={'/blog'} className="text-white">
                <Button variant={'link'} className="text-white">
                  Blog
                </Button>
              </Link>
            </li>
            <li>
              <Link href={'/admin'} className="text-white">
                <Button variant={'link'} className="text-white">
                  Admin
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  )
}
