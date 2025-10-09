import React from 'react'
import { RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react'
import { Header } from '../../components/homepage/header'
import { Button } from '@/components/ui/button'
import { TooltipComp } from '../../components/common/tooltip-component'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
export const ContactMeHero = () => {
  const encodedSubject = encodeURIComponent("Let's Connect")
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-cover   bg-[url(/hero-abstract.jpg)] relative flex items-center flex-col justify-start text-white">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <Header />
      <div className="relative w-full max-w-screen-sm z-20 h-full flex flex-col items-center justify-center  space-y-4 px-4 text-white">
        <article className="w-full">
          <p className="text-muted-foreground">My email:</p>
          <Link
            href={`mailto:favoureliab@gmail.com?subject=${encodedSubject}`}
            className="text-xl font-medium border-b border-b-transparent hover:border-b-border w-fit  hover:underline-offset-2 transition-all duration-200 block max-w-full"
          >
            favoureliab@gmail.com
          </Link>
        </article>
        <article className="w-full gap-2 grid grid-cols-[1fr_auto_1fr] items-center text-sm text-muted-foreground">
          <Separator orientation="horizontal" className="bg-white/50" />
          <p className="text-white/70">or</p>
          <Separator orientation="horizontal" className="bg-white/50" />
          <div />
        </article>
        <article className="w-full">
          <Button
            className="rounded-xs dark:bg-white dark:text-background"
            variant={'secondary'}
            size={'lg'}
          >
            Contact Me directly
          </Button>
        </article>
      </div>
      <div className="relative z-10 py-5 flex gap-4">
        <TooltipComp trigger={<RiGithubFill strokeWidth={1.5} />} content="Check my GitHub" />
        <TooltipComp
          trigger={<RiLinkedinBoxFill strokeWidth={1.5} />}
          content="Check my LinkedIn"
        />
      </div>
    </div>
  )
}
