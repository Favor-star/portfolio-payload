import React from 'react'
import { ContactMeHero } from './components/contact-me-hero'
import { ContactMeForm } from './components/contact-me-form'

function ContactMe() {
  return (
    <section className="w-full">
      <ContactMeHero />
      <ContactMeForm />
    </section>
  )
}

export default ContactMe
