import React from 'react'
import { BlogHero } from './components/blog-hero'
import { BlogContents } from './components/blog-contents'

function BlogPage() {
  return (
    <section className="w-full">
      <BlogHero />
      <BlogContents />
    </section>
  )
}

export default BlogPage
