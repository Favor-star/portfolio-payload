import { Button } from '@/components/ui/button'
import { RiArrowRightLongFill, RiExternalLinkFill } from '@remixicon/react'
import Image from 'next/image'

export const WorksSection = () => {
  return (
    <section className="w-full max-w-screen-xl  mx-auto my-10 px-4  flex flex-col">
      <h2 className="text-2xl font-semibold mb-4"> My works</h2>
      <article className="w-full aspect-video relative  border p-2 rounded-md overflow-hidden">
        <Image src={'/hero-abstract.jpg'} alt="Hero image" fill />
        <div className="absolute rounded-sm  bottom-2 left-2 right-2 flex justify-between bg-foreground/50 dark:bg-foreground/20 dark:border dark:border-border text-background dark:text-white px-5 py-4">
          <div>
            <h2 className="text-xl font-bold">Wildlife Conservation Travel</h2>
            <p className="text-sm">NextJS | PostgreSQL | Tailwind </p>
          </div>
          <div>
            <Button variant="ghost" size={'icon-lg'} className="bg-inherit rounded-xs">
              <RiArrowRightLongFill />
            </Button>
          </div>
        </div>
      </article>
      <article className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-5">
        <SingleWork />
        <SingleWork />
        <SingleWork />
      </article>
      <div className="mt-5 mx-auto space-x-4 inline-block">
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
const SingleWork = () => {
  return (
    <article className="w-full border border-foreground/30 rounded-md cursor-pointer bg-accent/30 overflow-hidden p-3 grid grid-cols-[1fr_auto] items-center gap-2">
      <div>
        <h2 className="text-lg font-semibold">SkillVault</h2>
        <p className="line-clamp-2 text-sm">
          Project aiming to revolutionize skill development, learning new skills and updating
          current existing skills.
        </p>
      </div>
      <Button variant={'outline'} size={'icon-lg'} className=" rounded-xs">
        <RiExternalLinkFill />
      </Button>
    </article>
  )
}
