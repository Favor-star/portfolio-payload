import { Button } from '@/components/ui/button'
import { RiArrowLeftLongFill } from '@remixicon/react'
import React from 'react'
import { Header } from '../../components/homepage/header'
import { Separator } from '@/components/ui/separator'
import { SearchInput } from './search-input'

export const BlogHero = () => {
  return (
    <div className="w-full h-[calc(100vh-200px)] bg-cover   bg-[url(/hero-abstract.jpg)] relative flex items-center flex-col justify-start text-white">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <Header />
      <div className="relative w-full max-w-screen-sm z-20 h-full flex flex-col items-center justify-center  space-y-4 px-4 text-white">
        <article>
          <h1 className="text-4xl font-bold">Blog</h1>
          <Separator className="my-4 bg-white/50" />
        </article>
        <article className="w-full">
          <SearchInput />
        </article>
      </div>
      <div className="relative z-10 py-5 flex gap-4">
        <Button variant={'outline'} size={'lg'} className="rounded-sm">
          <RiArrowLeftLongFill /> Back
        </Button>
      </div>
    </div>
  )
}
