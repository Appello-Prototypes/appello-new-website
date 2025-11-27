# Appello Website

A modern, clean homepage for Appello - purpose-built software for ICI trade contractors.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment

This project is configured for Vercel deployment. Simply connect your GitHub repository to Vercel, and it will automatically deploy on every push to main.

## Project Structure

```
app/
  ├── layout.tsx      # Root layout with metadata
  ├── page.tsx        # Homepage
  └── globals.css     # Global styles

components/
  ├── Header.tsx      # Navigation header
  ├── Hero.tsx        # Hero section with email capture
  ├── SocialProofBar.tsx
  ├── VideoSection.tsx
  ├── ValueProp.tsx
  ├── FeaturesGrid.tsx
  ├── MetricsSection.tsx
  ├── Testimonials.tsx
  ├── Integrations.tsx
  ├── CTASection.tsx
  ├── Footer.tsx
  ├── Button.tsx      # Reusable button component
  ├── Card.tsx        # Reusable card component
  └── Section.tsx     # Reusable section wrapper
```

## Key Features

- ✅ Clean, modern design
- ✅ Fully responsive (mobile-first)
- ✅ SEO optimized with proper meta tags
- ✅ All template content removed
- ✅ Real testimonials and accurate messaging
- ✅ HubSpot demo booking integration

## Next Steps

1. Replace placeholder dashboard screenshot in Hero component with actual Appello screenshot
2. Add more customer testimonials as they become available
3. Connect email forms to actual email service (HubSpot, etc.)
4. Add analytics tracking
5. Optimize images and assets

