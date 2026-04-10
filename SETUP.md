# Elaine Hankinson Wedding Celebrant — Setup & Deployment Guide

## Overview

This is a Next.js 14 website with Sanity.io CMS. Elaine can edit all content at `/studio` after setup.

---

## Step 1: Create a Sanity Account & Project

1. Go to **https://sanity.io** and create a free account
2. Click **"Create new project"** → give it a name like "Elaine Weddings"
3. Choose **"Clean project with no predefined schemas"** when asked
4. Note down your **Project ID** (shown in the dashboard — looks like `abc123de`)
5. The dataset name is `production` (default)

---

## Step 2: Configure Environment Variables

Open the file `.env.local` in this project folder and replace the placeholder values:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here   ← replace with your Project ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=your-read-token-here            ← see below
```

**To get your Read Token:**
1. Go to https://sanity.io/manage → select your project
2. Click **API** → **Tokens** → **Add API Token**
3. Name it "Read Token", choose **"Viewer"** permissions
4. Copy the token and paste it into `.env.local`

---

## Step 3: Add CORS Origins to Sanity

1. In https://sanity.io/manage → your project → **API** → **CORS Origins**
2. Add these origins (one at a time):
   - `http://localhost:3000` (for local development)
   - `https://elaineweddings.com` (for production — add after deploying)
   - `https://www.elaineweddings.com` (for production www)
3. Check **"Allow credentials"** for each one

---

## Step 4: Run Locally to Test

```bash
npm run dev
```

Open http://localhost:3000 — you'll see the site with placeholder content.

---

## Step 5: Add Content in Sanity Studio

Open http://localhost:3000/studio in your browser.

Log in with your Sanity account. You'll see a menu on the left with:

- **⚙️ Site Settings** — Set the navigation, email, footer text, promo banner
- **🏠 Home Page** — Hero photo, about section, FAQs, all home page text
- **💍 Ceremonies Page** — All ceremony types and rituals
- **💰 Packages & Prices** — Package names, prices, what's included
- **📋 Simple Steps Page** — The 6-step process
- **⭐ Why Choose Me Page** — All 6 reasons
- **💬 Testimonials Page** — Featured testimonial, add/remove testimonials
- **✉️ Contact Page** — Form config, hero text

**Start with Site Settings** (set the nav links and email), then fill in each page.

**To add photos:** Click any image field and upload from your computer. Sanity handles hosting and optimisation automatically.

---

## Step 6: Set Up the Contact Form (Formspree)

1. Go to **https://formspree.io** and create a free account with `hello@elaineweddings.com`
2. Create a new form
3. Copy the endpoint URL (format: `https://formspree.io/f/xxxxxxxx`)
4. In Sanity Studio → **✉️ Contact Page** → paste the URL into **"Formspree form endpoint URL"**
5. In Formspree dashboard: enable spam filtering and reCAPTCHA

---

## Step 7: Deploy to Vercel

1. Push this project to GitHub (create a new repository at github.com)
2. Go to **https://vercel.com** and sign up with your GitHub account
3. Click **"Add New Project"** → import your GitHub repository
4. Under **Environment Variables**, add the same values from your `.env.local`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `SANITY_API_READ_TOKEN`
5. Click **Deploy**

---

## Step 8: Connect the Domain

1. In Vercel → your project → **Settings** → **Domains**
2. Add `elaineweddings.com` and `www.elaineweddings.com`
3. Vercel will show you DNS records to add at your domain registrar
4. Add those DNS records (usually takes a few minutes to an hour)
5. Once live, go back to Sanity → API → CORS Origins and add the production URLs (Step 3)

---

## After Going Live

**Elaine's editing URL:** `https://elaineweddings.com/studio`

She can bookmark this and log in with her Sanity account to:
- Edit any text on any page
- Change prices
- Add/remove testimonials
- Upload new photos
- Update the contact form settings
- Toggle the promo banner on/off

Content changes appear on the live site **within 1 hour** automatically (ISR). For instant updates, redeploy from Vercel.

---

## Uploading the Existing Photos

The photos from the WeTransfer download should be uploaded via Sanity Studio:

1. Open Studio → **🏠 Home Page**
2. Find **"Hero image"** → click Upload → select your best photo of Elaine
3. Find **"Photo of Elaine"** (About section) → upload another photo
4. Go to **⚙️ Site Settings** → find **"Training badge image"** → upload `elaine_weddings_qr.png`

---

## Local Development

```bash
npm run dev          # Start development server at localhost:3000
npm run build        # Build for production
npm run lint         # Check for code issues
```

---

## Need Help?

If you get stuck at any step, the most common issues are:
1. **CORS errors in Studio** → re-check Step 3, make sure your URL is in the allowed origins
2. **Images not showing** → make sure `cdn.sanity.io` is in `next.config.mjs` (it already is)
3. **Contact form not sending** → double-check the Formspree endpoint URL is saved in Studio
