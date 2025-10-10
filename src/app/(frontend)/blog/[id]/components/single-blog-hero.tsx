import { Button } from '@/components/ui/button'
import { RiArrowLeftLongFill, RiHeart2Fill, RiHeart2Line, RiShare2Fill } from '@remixicon/react'
import React from 'react'
import { Header } from '../../../components/homepage/header'
import { Separator } from '@/components/ui/separator'

export const SingleBlogHero = () => {
  return (
    <div className="w-full h-[calc(100vh-200px)] bg-cover   bg-[url(/hero-abstract.jpg)] relative flex items-center flex-col justify-start text-white">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <Header />
      <div className="relative w-full max-w-screen-sm z-20 h-full flex flex-col items-center justify-center  space-y-4 px-4 text-white">
        <article>
          <h1 className="text-xl font-semibold">
            The blog tile withh be here . Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolorum, quaerat?
          </h1>
          <Separator className=" mt-2 bg-white/50" />
        </article>

        <article className="w-full flex justify-between text-sm text-white/80">
          <p>
            <span className="italic"> Published at:</span>{' '}
            <time dateTime="2023-01-01">January 1, 2023</time>
          </p>
          <p>
            <span className="italic"> Last updated at:</span>{' '}
            <time dateTime="2023-01-01">January 1, 2023</time>
          </p>
        </article>
        <article className="space-x-4">
          <Button className="rounded-xs dark:bg-white dark:text-background" variant={'secondary'}>
            <RiHeart2Line /> Like
        </Button>
          <Button variant={'outline'} className="rounded-xs">
            <RiShare2Fill /> Share
          </Button>
        </article>
      </div>
      <div className="relative z-10 py-5 flex gap-4">
        <Button variant={'link'} className="rounded-sm text-white">
          Back to blogs
        </Button>
      </div>
    </div>
  )
}
