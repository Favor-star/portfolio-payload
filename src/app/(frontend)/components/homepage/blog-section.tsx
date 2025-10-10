import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'
import { Blog } from '@/payload-types'
const payload = await getPayload({ config })
export const BlogSection = async () => {
  const contents = await payload.find({
    collection: 'blogs',
    select: {
      shortDescription: true,
      blogTitle: true,
      category: true,
    },
  })
  return (
    <section className="flex flex-col w-full max-w-screen-xl px-4 mx-auto my-10">
      <h2 className="mb-4 text-2xl font-semibold"> Blog</h2>
      <article className="grid w-full grid-cols-1 gap-4 px-2 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {contents.docs.map((blog) => (
          <SingleBlog
            key={blog.id}
            title={blog.blogTitle}
            description={blog.shortDescription}
            category={blog.category}
          />
        ))}
      </article>
      <div className="mx-auto mt-5">
        <Button className="rounded-xs" variant={'default'} size={'lg'}>
          View All Posts
        </Button>
      </div>
    </section>
  )
}

const SingleBlog: React.FC<{ title: string; description: string; category: Blog['category'] }> = ({
  title,
  description,
  category,
}) => {
  return (
    <article className="w-full max-w-sm p-3 overflow-hidden border rounded-md cursor-pointer border-foreground/30 bg-accent/30">
      <div className="relative min-h-[200px] w-full overflow-hidden ">
        <Image src={'/hero-abstract.jpg'} alt="Hero image" fill />
        <p className="absolute inset-0 z-20 flex items-center justify-center w-full h-full p-4 text-xs text-white select-none">
          {title}
        </p>
      </div>
      <div className="mt-2">
        {/* @ts-expect-error - The typing of category is off */}
        <p className="my-2 text-sm font-light">{category[0].categoryName}</p>
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-sm line-clamp-2">{description}</p>
      </div>
    </article>
  )
}
