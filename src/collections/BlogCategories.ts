import { CollectionConfig } from "payload";

export const BlogCategories: CollectionConfig = {
  slug: 'blog-categories',
  fields: [
    {
      name: 'categoryName',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
