import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import {
  faqItem, ceremonyType, ritual, packageItem, processStep,
  reasonCard, testimonialObj, fitCard,
  siteSettings, homePage, ceremoniesPage, packagesPage,
  stepsPage, whyChooseMePage, contactPage, testimonialsPage,
} from './schemas'

const singletonTypes = new Set([
  'siteSettings', 'homePage', 'ceremoniesPage', 'packagesPage',
  'stepsPage', 'whyChooseMePage', 'contactPage', 'testimonialsPage',
])

const singletonListItem = (S: any, typeName: string, title: string) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))

export default defineConfig({
  name: 'elaine-weddings',
  title: 'Elaine Weddings',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            singletonListItem(S, 'siteSettings', '⚙️ Site Settings'),
            S.divider(),
            singletonListItem(S, 'homePage', '🏠 Home Page'),
            singletonListItem(S, 'ceremoniesPage', '💍 Ceremonies Page'),
            singletonListItem(S, 'packagesPage', '💰 Packages & Prices'),
            singletonListItem(S, 'stepsPage', '📋 Simple Steps Page'),
            singletonListItem(S, 'whyChooseMePage', '⭐ Why Choose Me Page'),
            singletonListItem(S, 'testimonialsPage', '💬 Testimonials Page'),
            singletonListItem(S, 'contactPage', '✉️ Contact Page'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [
      // Objects
      faqItem, ceremonyType, ritual, packageItem, processStep,
      reasonCard, testimonialObj, fitCard,
      // Documents
      siteSettings, homePage, ceremoniesPage, packagesPage,
      stepsPage, whyChooseMePage, contactPage, testimonialsPage,
    ],
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
})
