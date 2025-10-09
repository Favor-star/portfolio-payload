import { Button } from '@/components/ui/button'
import { RiArrowRightLongFill } from '@remixicon/react'
import React from 'react'

export const Service = () => {
  return (
    <section className="w-full max-w-screen-xl  mx-auto my-10 px-4  flex flex-col gap-0">
      <h2 className="text-2xl font-semibold mb-4"> Services offered</h2>
      {Array(4)
        .fill(0)
        .map((_, idx) => (
          <ServiceCard key={idx + 'inx'} />
        ))}
      <div className="mt-5 mx-auto space-x-4 inline-block">
        <Button className="rounded-xs" variant={'default'} size={'lg'}>
          Let's Talk
        </Button>
        <Button className="rounded-xs" variant={'outline'} size={'lg'}>
          Load More
        </Button>
      </div>
    </section>
  )
}

const ServiceCard = () => {
  return (
    <article className="w-full  flex flex-row justify-between items-center py-2 border-t border-t-foreground/30 hover:bg-accent/30 px-2">
      <hgroup className="w-full">
        <h2 className="text-lg font-semibold">Web Development</h2>
        <p>We build responsive and modern websites.</p>
      </hgroup>
      <Button variant="ghost" size={'icon-lg'} className="bg-inherit rounded-xs">
        <RiArrowRightLongFill />
      </Button>
    </article>
  )
}
