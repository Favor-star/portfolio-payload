import { Button } from '@/components/ui/button'
import { RiArrowRightLongFill } from '@remixicon/react'
import React from 'react'

export const BlogContents = () => {
  return (
    <section className="w-full flex items-start mx-auto max-w-screen-xl px-4 mt-5 gap-4">
      <section className="w-full flex-1">
        <h2 className="text-2xl font-semibold mb-4"> Trending stories</h2>
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="mb-4" key={index + ''}>
            <SingleBlogPost />
          </div>
        ))}
        <div className="mx-auto w-full text-center">
          <Button className="rounded-xs mx-auto " variant={'outline'} size={'lg'}>
            Load more
          </Button>
        </div>
      </section>
      <section className="flex-1 max-w-xs text-end border-e border-foreground/30 pe-4 mt-10">
        <h2 className="text-lg font-semibold mb-4"> Filter</h2>
        <div className="w-full mb-4">
          <span className="text-sm text-muted-foreground">Status</span>
          <div className="flex flex-row justify-end flex-wrap gap-3 mt-2">
            {['Most liked', 'Newest', 'Oldest', 'Trending'].map((status, index) => (
              <span
                key={index + ''}
                className="text-sm cursor-pointer hover:underline underline-offset-2 transition-all duration-200"
              >
                {status}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-sm text-muted-foreground">Category</span>
          <div className="flex flex-row justify-end flex-wrap gap-3 mt-2">
            {['Tech', 'Lifestyle', 'Business', 'Health', 'Travel', 'Education', 'Science'].map(
              (category, index) => (
                <span
                  key={index + ''}
                  className="text-sm cursor-pointer hover:underline underline-offset-2 transition-all duration-200"
                >
                  {category}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

const SingleBlogPost = () => {
  return (
    <section className="w-full p-2 rounded-md bg-accent/40 border border-foreground/30">
      <h2 className="text-lg font-semibold line-clamp-1">
        Blog title will go here. The rise of growth title.
      </h2>
      <div className="grid grid-cols-[1fr_auto] gap-4 my-2 items-center">
        <p className="text-sm line-clamp-2 min-h-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis dolore corporis
          quidem animi nostrum impedit quis delectus corrupti assumenda.
        </p>
        <Button variant={'outline'} size={'icon-lg'} className=" mt-2 rounded-xs">
          <RiArrowRightLongFill />
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          {['Tech', 'Lifestyle', 'Business', 'Health', 'Travel'].map((category, index) => (
            <span
              key={index + ''}
              className="text-xs flex items-center text-muted-foreground uppercase py-0 px-1  border-s border-s-foreground/30 last:border-e last:border-e-foreground/30"
            >
              {category}
            </span>
          ))}
        </div>
        <span className="text-sm text-muted-foreground">Jan 1, 2024</span>
      </div>
    </section>
  )
}
