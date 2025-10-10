import payload, { type SanitizedConfig } from 'payload'

export const script = async (config: SanitizedConfig) => {
  await payload.init({ config })
  await payload.create({
    collection: 'works',
    data: {
      workTitle: 'Project Alpha',
      workDescription: 'A cutting-edge project that revolutionizes technology.',
      isTopWork: true,
      workLinks: [
        {
          workLabel: 'GitHub',
          workUrl: 'https://github.com/user/project-alpha',
        },
        {
          workLabel: 'Live Demo',
          workUrl: 'https://user.github.io/project-alpha',
        },
      ],
    },
  })
  await payload.create({
    collection: 'users',
    data: {
      email: 'user@example.com',
      password: '123',
    },
  })
  await payload.create({
    collection: 'services',
    data: {
      title: 'Web Development',
      description: 'We build responsive and modern websites.',
      links: [
        {
          label: 'Learn More',
          url: 'https://example.com/web-development',
        },
      ],
    },
  })
  await payload.updateGlobal({
    slug: 'home-hero',
    data: {
      title: 'Welcome to My Portfolio',
      description: 'Showcasing my projects and services.',
      buttonsLabel: [{ label: 'View Projects' }, { label: 'Contact Me' }],
    },
  })
  payload.logger.info('Successfully seeded!')
  process.exit(0)
}
