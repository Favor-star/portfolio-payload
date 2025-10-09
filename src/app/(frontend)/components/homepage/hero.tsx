import React from 'react'
import { Header } from './header'
import { Button } from '@/components/ui/button'
import { RiLinkedinBoxFill, RiGithubFill } from '@remixicon/react'
import { TooltipComp } from '../common/tooltip-component'

export const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-cover   bg-[url(/hero-abstract.jpg)] relative flex items-center flex-col justify-start text-white">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <Header />
      <div className="relative z-20 h-full flex flex-col items-center justify-center max-w-lg  space-y-4 px-4 text-white">
        <h1 className="text-4xl font-medium text-center ">
          This is Favor Eliab. A frontend web developer
        </h1>
        <p className="text-base w-full text-center  text-white/80">
          Welcome to my website. This is a place where I share my thoughts and projects. Feel free
          to explore and connect with me!
        </p>
        <div className="space-x-4 flex">
          <Button
            className="rounded-xs dark:bg-white dark:text-background"
            variant={'secondary'}
            size={'lg'}
          >
            Contact Me
          </Button>
          <Button size={'lg'} variant={'outline'} className="rounded-xs">
            View Projects
          </Button>
        </div>
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
