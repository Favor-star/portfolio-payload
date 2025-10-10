import { CollectionConfig } from 'payload'

export const Works: CollectionConfig = {
  slug: 'works',
  fields: [
    {
      name: 'workTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'workDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'isTopWork',
      type: 'checkbox',
      label: 'Make this main work?',
      required: true,
      defaultValue: false,
    },
    {
      name: 'workLinks',
      type: 'array',
      fields: [
        {
          name: 'workLabel',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'workUrl',
          type: 'text',
          required: true,
          validate: (value: unknown) =>
            /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/.test(String(value)) ||
            'Invalid URL format',
        },
      ],
    },
  ],
}
