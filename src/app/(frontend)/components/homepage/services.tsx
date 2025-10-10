import { Button } from '@/components/ui/button'
import { RiArrowRightLongFill } from '@remixicon/react'
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export const Service = async () => {
  const contents = await payload.find({
    collection: 'services',
  })
  return (
    <section className="w-full max-w-screen-xl  mx-auto my-10 px-4  flex flex-col gap-0">
      <h2 className="text-2xl font-semibold mb-4"> Services offered</h2>
      {contents.docs.map(({ id, title, description }) => (
        <ServiceCard key={id} title={title} description={description} />
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

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <article className="w-full  flex flex-row justify-between items-center py-2 border-t border-t-foreground/30 hover:bg-accent/30 px-2 last:border-b last:border-b-foreground/30">
      <hgroup className="w-full">
        <h2 className="text-lg font-semibold" title={title}>
          {title}
        </h2>
        <p className="line-clamp-1 " title={description}>
          {description}
        </p>
      </hgroup>
      <Button variant="ghost" size={'icon-lg'} className="bg-inherit rounded-xs">
        <RiArrowRightLongFill />
      </Button>
    </article>
  )
}
