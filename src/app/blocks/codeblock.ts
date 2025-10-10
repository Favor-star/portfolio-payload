// src/blocks/CodeBlock/config.ts

import { Block } from 'payload'

export const CodeBlock: Block = {
  slug: 'codeBlock',
  interfaceName: 'CodeBlock',
  fields: [
    {
      name: 'language',
      type: 'select',
      options: [
        { label: 'TypeScript', value: 'typescript' },
        { label: 'JavaScript', value: 'javascript' },
        { label: 'HTML', value: 'html' },
        { label: 'CSS', value: 'css' },
        { label: 'Python', value: 'python' },
        // Add more languages as needed
      ],
      defaultValue: 'typescript',
      required: true,
    },
    {
      name: 'code',
      type: 'code', // This is Payload's built-in code field type
      required: true,
      admin: {
        language: 'typescript', // Default language for the editor in the admin panel
      },
    },
  ],
}
