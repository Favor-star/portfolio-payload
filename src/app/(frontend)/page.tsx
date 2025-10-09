import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'
import { Hero } from './components/homepage/hero'
import { Service } from './components/homepage/services'
import { BlogSection } from './components/homepage/blog-section'
import { WorksSection } from './components/homepage/works-section'
import { Footer } from './components/common/footer'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  return (
    <section className="w-full">
      <Hero />
      <Service />
      <WorksSection />
      <BlogSection />
    </section>
  )
}
