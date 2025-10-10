import { Button } from '@/components/ui/button'
import { RiArrowRightLongFill, RiExternalLinkFill } from '@remixicon/react'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })
export const WorksSection = async () => {
  const contents = await payload.find({
    collection: 'works',
  })
  const topWork = contents.docs.find((work) => work.isTopWork) ?? contents.docs[0]
  const otherWorks = contents.docs.filter((work) => work.id !== topWork.id)
  return (
    <section className="flex flex-col w-full max-w-screen-xl px-4 mx-auto my-10">
      <h2 className="mb-4 text-2xl font-semibold"> My works</h2>
      <article className="relative w-full p-2 overflow-hidden border rounded-md aspect-video">
        <Image src={'/hero-abstract.jpg'} alt="Hero image" fill />
        <p className="absolute inset-0 z-20 items-center justify-center hidden w-full h-full p-4 text-sm text-white select-none md:flex">
          {topWork.workTitle}
        </p>
        <div className="absolute flex justify-between px-5 py-4 rounded-sm bottom-2 left-2 right-2 bg-foreground/50 dark:bg-foreground/20 dark:border dark:border-border text-background dark:text-white">
          <div>
            <h2 className="text-xl font-bold">{topWork.workTitle}</h2>
            <p className="text-sm">{topWork.workDescription}</p>
          </div>
          <div>
            <Button variant="ghost" size={'icon-lg'} className="bg-inherit rounded-xs">
              <RiArrowRightLongFill />
            </Button>
          </div>
        </div>
      </article>
      <article className="grid w-full grid-cols-1 gap-4 mx-auto mt-5 md:grid-cols-2 lg:grid-cols-3">
        {otherWorks.map(({ id, workTitle, workDescription }) => (
          <SingleWork key={id} title={workTitle} description={workDescription} />
        ))}
      </article>
      <div className="inline-block mx-auto mt-5 space-x-4">
        <Button className="rounded-xs" variant={'default'} size={'lg'}>
          Get in touch
        </Button>
        <Button className="rounded-xs" variant={'outline'} size={'lg'}>
          Load More
        </Button>
      </div>
    </section>
  )
}
const SingleWork: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <article className="w-full border border-foreground/30 rounded-md cursor-pointer bg-accent/30 overflow-hidden p-3 grid grid-cols-[1fr_auto] items-center gap-2">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm line-clamp-2">{description}</p>
      </div>
      <Button variant={'outline'} size={'icon-lg'} className=" rounded-xs">
        <RiExternalLinkFill />
      </Button>
    </article>
  )
}
