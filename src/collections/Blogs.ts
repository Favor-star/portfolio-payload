import { CodeBlock } from '@/app/blocks/codeblock'
import { BlocksFeature, InlineCodeFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  fields: [
    {
      name: 'blogTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      hasMany: true,
      relationTo: 'blog-categories',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'blogContent',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          InlineCodeFeature(), // Enables inline code formatting
          // You can also add custom block features for multi-line code blocks
          BlocksFeature({
            blocks: [CodeBlock],
          }),
        ],
      }),
    },
  ],
}
