import { CollectionConfig } from 'payload'
import type { Tab } from 'payload'
export const Cars: CollectionConfig = {
  slug: 'cars',
  fields: [
    {
      name: 'brandOption',
      type: 'select',
      options: ['Benz', 'Mazda'],
    },
    {
      name: 'brand',
      type: 'text',
      required: true,
    },
    {
      name: 'madeIn',
      type: 'number',
    },
    {
      type: 'tabs',
      tabs: [
        { name: 'Filed 1', fields: [{ name: 'favor', type: 'text' }] },
        { name: 'Filed 2', fields: [{ name: 'eliab', type: 'text' }] },
      ],
    },
  ],
}
