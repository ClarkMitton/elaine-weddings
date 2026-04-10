export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteName, logoFirstName, logoLastName, tagline, email, footerCopy,
  navItems, promoBannerEnabled, promoBannerText, promoBannerCtaLabel, promoBannerCtaHref,
  trainingBadgeImage, trainingBadgeAlt
}`

export const homePageQuery = `*[_type == "homePage"][0] {
  heroEyebrow, heroTitle, heroSubtitle, heroPrimaryCtaLabel, heroPrimaryCtaHref,
  heroGhostCtaLabel, heroGhostCtaHref, heroLocationNote, heroImage, heroImageAlt,
  introStripText,
  whatIDoTitle, whatIdoParagraphs,
  homeTestimonialQuote, homeTestimonialCite,
  quoteStripText, quoteStripCite,
  perfectFitLabel, perfectFitTitle, perfectFitCards,
  aboutLabel, aboutTitle, aboutPhoto, aboutPhotoAlt, aboutParagraphs, aboutDetails,
  faqsTitle, faqs,
  ctaSectionLabel, ctaTitle, ctaBody, ctaButtonLabel, ctaButtonHref,
  seoTitle, seoDescription
}`

export const ceremoniesPageQuery = `*[_type == "ceremoniesPage"][0] {
  heroLabel, heroTitle, heroSubtitle,
  ceremonyTypesLabel, ceremonyTypesTitle, ceremonyTypes,
  ritualsLabel, ritualsTitle, ritualsSubtitle, rituals, ritualsNote,
  ctaSectionLabel, ctaTitle, ctaBody, ctaButtonLabel, ctaButtonHref,
  seoTitle, seoDescription
}`

export const packagesPageQuery = `*[_type == "packagesPage"][0] {
  heroLabel, heroTitle, heroSubtitle,
  packages,
  extrasLabel, extrasTitle, extrasSubtitle, featuredExtras, secondaryExtras,
  hostQuote,
  ctaSectionLabel, ctaTitle, ctaBody, ctaButtonLabel, ctaButtonHref,
  seoTitle, seoDescription
}`

export const stepsPageQuery = `*[_type == "stepsPage"][0] {
  heroLabel, heroTitle, heroSubtitle,
  stepsIntroText, steps, closingQuote,
  ctaSectionLabel, ctaTitle, ctaBody, ctaButtonLabel, ctaButtonHref,
  seoTitle, seoDescription
}`

export const whyChooseMePageQuery = `*[_type == "whyChooseMePage"][0] {
  heroLabel, heroTitle, heroIntro,
  reasons,
  resultStripLabel, resultStripQuote,
  ctaSectionLabel, ctaTitle, ctaBody, ctaButtonLabel, ctaButtonHref,
  seoTitle, seoDescription
}`

export const testimonialsPageQuery = `*[_type == "testimonialsPage"][0] {
  heroLabel, heroTitle, heroSubtitle,
  featuredTestimonial,
  testimonials,
  ctaSectionLabel, ctaTitle, ctaBody, ctaButtonLabel, ctaButtonHref,
  seoTitle, seoDescription
}`

export const contactPageQuery = `*[_type == "contactPage"][0] {
  heroLabel, heroTitle, heroSubtitle,
  formspreeEndpoint, formSuccessMessage, altContactText,
  seoTitle, seoDescription
}`
