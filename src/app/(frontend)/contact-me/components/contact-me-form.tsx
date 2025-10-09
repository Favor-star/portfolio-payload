import React from 'react'
import { CustomInput } from '../../components/common/custom-input'
import { SelectService } from './select-service'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export const ContactMeForm = () => {
  return (
    <section className="w-full max-w-screen-sm  mx-auto my-10 px-4  flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <p className="mb-6 text-muted-foreground">
        Don't hesitate to contact me! Whatever your inquiry, I'm here to help. I respond within 24
        hours.
      </p>
      <form className="w-full flex flex-col gap-4">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
          <CustomInput label="First Name *" placeholder="e.g: John" />
          <CustomInput label="Surname" placeholder="e.g: Doe" />
        </div>
        <CustomInput label="Email" placeholder="e.g: john@example.com" />
        <CustomInput
          label="Phone Number"
          type="tel"
          inputMode="numeric"
          placeholder="e.g: +234 567 8901"
        />
        <fieldset className="w-full mt-2  space-y-1">
          <label htmlFor="custom-input " className="text-muted-foreground block">
            Service
          </label>
          <SelectService />
        </fieldset>
        <fieldset className="w-full mt-2 grid grid-cols-1  space-y-1">
          <label htmlFor="custom-input " className="text-muted-foreground block">
            Message *
          </label>
          <Textarea
            className="w-full max-w-full resize-y block"
            placeholder="Text your message here ..."
          />
        </fieldset>
        <Button className="rounded-sm mt-3 w-full h-auto py-4" variant={'default'} size={'lg'}>
          Submit
        </Button>
      </form>
    </section>
  )
}
