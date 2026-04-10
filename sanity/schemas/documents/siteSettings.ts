import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — prevent creating multiple docs
  // @ts-expect-error — Sanity v3 singleton pattern
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'siteName', title: 'Site name', type: 'string', initialValue: 'Elaine Hankinson Wedding Celebrant' }),
    defineField({ name: 'logoFirstName', title: 'Logo — first name', type: 'string', initialValue: 'Elaine' }),
    defineField({ name: 'logoLastName', title: 'Logo — last name', type: 'string', initialValue: 'Hankinson' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'Wedding Celebrant · West Yorkshire' }),
    defineField({ name: 'email', title: 'Contact email', type: 'string', initialValue: 'hello@elaineweddings.com' }),
    defineField({ name: 'footerCopy', title: 'Footer copyright text', type: 'string', initialValue: '© 2026 Elaine Hankinson · Wedding Celebrant · West Yorkshire' }),
    defineField({
      name: 'navItems',
      title: 'Navigation items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'href', title: 'Link (e.g. /ceremonies or /#about)', type: 'string' },
        ],
        preview: { select: { title: 'label', subtitle: 'href' } },
      }],
    }),
    defineField({
      name: 'promoBannerEnabled',
      title: 'Show promo banner?',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to show/hide the announcement banner at the top of every page',
    }),
    defineField({ name: 'promoBannerText', title: 'Promo banner text', type: 'text', rows: 2 }),
    defineField({ name: 'promoBannerCtaLabel', title: 'Promo banner button label', type: 'string' }),
    defineField({ name: 'promoBannerCtaHref', title: 'Promo banner button link', type: 'string' }),
    defineField({
      name: 'trainingBadgeImage',
      title: 'Training badge image (spinning QR / accreditation)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'trainingBadgeAlt', title: 'Training badge alt text', type: 'string', initialValue: 'Celebrant Training School accredited' }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
