import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const BlogSection = () => {
  return (
    <section className="w-full max-w-screen-xl  mx-auto my-10 px-4  flex flex-col">
      <h2 className="text-2xl font-semibold mb-4"> Blog</h2>
      <article className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </article>
      <div className="mt-5 mx-auto">
        <Button className="rounded-xs" variant={'default'} size={'lg'}>
          View All Posts
        </Button>
      </div>
    </section>
  )
}

const SingleBlog = () => {
  return (
    <article className="w-full max-w-sm border border-foreground/30 rounded-md cursor-pointer bg-accent/30 overflow-hidden p-3">
      <div className="relative min-h-[200px] w-full overflow-hidden ">
        <Image src={'/hero-abstract.jpg'} alt="Hero image" fill />
      </div>
      <div className="mt-2">
        <p className="font-light text-sm my-2">TECH</p>
        <h2 className="font-medium text-lg"> The outbreak of the AI - the change in every thing</h2>
        <p className="text-sm line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis dolore corporis
          quidem animi nostrum impedit quis delectus corrupti assumenda.
        </p>
      </div>
    </article>
  )
}
