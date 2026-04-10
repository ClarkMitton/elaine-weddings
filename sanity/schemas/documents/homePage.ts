import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  // @ts-expect-error — Sanity v3 singleton pattern
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'intro', title: 'Intro & What I Do' },
    { name: 'fit', title: 'Perfect Fit' },
    { name: 'about', title: 'About' },
    { name: 'faqs', title: 'FAQs' },
    { name: 'cta', title: 'Call to Action' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // Hero
    defineField({ name: 'heroEyebrow', title: 'Eyebrow text', type: 'string', group: 'hero', initialValue: 'Wedding Celebrant · West Yorkshire' }),
    defineField({ name: 'heroTitle', title: 'Main headline', type: 'string', group: 'hero', initialValue: 'Making your ceremony the highlight of your day.' }),
    defineField({ name: 'heroSubtitle', title: 'Subtitle paragraph', type: 'text', rows: 3, group: 'hero' }),
    defineField({ name: 'heroPrimaryCtaLabel', title: 'Primary button label', type: 'string', group: 'hero', initialValue: 'Start Planning' }),
    defineField({ name: 'heroPrimaryCtaHref', title: 'Primary button link', type: 'string', group: 'hero', initialValue: '/contact' }),
    defineField({ name: 'heroGhostCtaLabel', title: 'Ghost button label', type: 'string', group: 'hero', initialValue: 'Meet Elaine' }),
    defineField({ name: 'heroGhostCtaHref', title: 'Ghost button link', type: 'string', group: 'hero', initialValue: '/why-choose-me' }),
    defineField({ name: 'heroLocationNote', title: 'Location note', type: 'string', group: 'hero', initialValue: 'Based in West Yorkshire · Happy to travel' }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true }, group: 'hero' }),
    defineField({ name: 'heroImageAlt', title: 'Hero image description (accessibility)', type: 'string', group: 'hero' }),

    // Intro strip
    defineField({ name: 'introStripText', title: 'Intro strip text (italic pull-quote)', type: 'text', rows: 3, group: 'intro' }),

    // What I Do
    defineField({ name: 'whatIDoTitle', title: '"What I Do" heading', type: 'string', group: 'intro' }),
    defineField({
      name: 'whatIdoParagraphs',
      title: '"What I Do" paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      group: 'intro',
    }),

    // Pull-quote testimonial strip on home
    defineField({ name: 'homeTestimonialQuote', title: 'Home page pull-quote', type: 'text', rows: 3, group: 'intro' }),
    defineField({ name: 'homeTestimonialCite', title: 'Pull-quote attribution', type: 'string', group: 'intro' }),

    // Quote strip
    defineField({ name: 'quoteStripText', title: 'Decorative quote strip text', type: 'text', rows: 2, group: 'intro' }),
    defineField({ name: 'quoteStripCite', title: 'Quote strip attribution', type: 'string', group: 'intro' }),

    // Perfect Fit
    defineField({ name: 'perfectFitLabel', title: 'Section label', type: 'string', group: 'fit', initialValue: 'Is This You?' }),
    defineField({ name: 'perfectFitTitle', title: 'Section heading', type: 'string', group: 'fit' }),
    defineField({
      name: 'perfectFitCards',
      title: 'Fit cards',
      type: 'array',
      of: [{ type: 'fitCard' }],
      group: 'fit',
    }),

    // About
    defineField({ name: 'aboutLabel', title: 'Section label', type: 'string', group: 'about', initialValue: 'About Elaine' }),
    defineField({ name: 'aboutTitle', title: 'About heading', type: 'string', group: 'about', initialValue: "Hi, I'm Elaine." }),
    defineField({ name: 'aboutPhoto', title: 'Photo of Elaine', type: 'image', options: { hotspot: true }, group: 'about' }),
    defineField({ name: 'aboutPhotoAlt', title: 'Photo description (accessibility)', type: 'string', group: 'about' }),
    defineField({
      name: 'aboutParagraphs',
      title: 'About paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      group: 'about',
    }),
    defineField({
      name: 'aboutDetails',
      title: 'Credential badges',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' },
        ],
        preview: { select: { title: 'label', subtitle: 'value' } },
      }],
      group: 'about',
    }),

    // FAQs
    defineField({ name: 'faqsTitle', title: 'FAQs heading', type: 'string', group: 'faqs', initialValue: 'Frequently Asked Questions' }),
    defineField({
      name: 'faqs',
      title: 'FAQ items',
      type: 'array',
      of: [{ type: 'faqItem' }],
      group: 'faqs',
    }),

    // CTA
    defineField({ name: 'ctaSectionLabel', title: 'CTA section label', type: 'string', group: 'cta', initialValue: "Let's Talk" }),
    defineField({ name: 'ctaTitle', title: 'CTA heading', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaBody', title: 'CTA body text', type: 'text', rows: 2, group: 'cta' }),
    defineField({ name: 'ctaButtonLabel', title: 'CTA button label', type: 'string', group: 'cta', initialValue: 'Get in Touch' }),
    defineField({ name: 'ctaButtonHref', title: 'CTA button link', type: 'string', group: 'cta', initialValue: '/contact' }),

    // SEO
    defineField({ name: 'seoTitle', title: 'Page title (browser tab)', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'Meta description', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Home Page' }) },
})
