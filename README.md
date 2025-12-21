# Pasific Hitech Website

A professional, image-forward website for Pasific Hitech - Engineering Excellence in Steel Fabrication & Precision Cutting.

## Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Consistent Typography**: H1 (48px), H2 (34px), H3 (24px) across all pages
- **Animated Carousels**: Swiper-powered carousels on every main page with autoplay and pause-on-hover
- **6 Main Pages**:
  - Home: Hero carousel, service cards, why choose us, featured projects
  - Expertise: 16 detailed expertise sections with alternating layouts
  - Work: Filterable project gallery with lightbox
  - Equipments: Machine catalog with spec request functionality
  - Branches: India and Saudi Arabia offices with Google Maps
  - Contact: Full contact form with office information
- **Micro-animations**: Scroll-based animations, hover effects, transitions
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Accessibility**: Semantic HTML, keyboard navigation, alt text, ARIA labels

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Sticky navigation with dropdown
│   ├── Footer.tsx      # Footer with office contacts
│   ├── AnimatedCarousel.tsx  # Swiper carousel component
│   ├── Lightbox.tsx    # Image lightbox viewer
│   ├── ContactModal.tsx # Contact form modal
│   └── StickyQuoteCTA.tsx # Floating quote button
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Expertise.tsx
│   ├── Work.tsx
│   ├── Equipments.tsx
│   ├── Branches.tsx
│   └── Contact.tsx
├── data/
│   └── content.ts      # Centralized content data
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Customization

### Replace Placeholder Images

Replace the placeholder images in `public/images/` with actual company photos:

- `/images/hero/` - Hero carousel images (4 images)
- `/images/services/` - Service card images (6 images)
- `/images/expertise/` - Expertise section images (16+ images)
- `/images/projects/` - Project gallery images
- `/images/equipment/` - Equipment photos (10+ images)
- `/images/branches/` - Office location photos
- `/images/contact/` - Contact page carousel images

### Add Company Brochure

Place your company brochure PDF at `public/brochure.pdf`

### Update Content

Edit `src/data/content.ts` to update:
- Office contact information
- Service descriptions
- Expertise sections
- Equipment specifications
- Project data

### Integrate Contact Form Backend

The contact form is ready for backend integration. Update the `handleSubmit` function in:
- `src/components/ContactModal.tsx`
- `src/pages/Contact.tsx`

To send emails to the appropriate office based on user selection.

## Color Palette

- **Primary Blue**: `#0066e6`
- **Industrial Slate**: Shades from `#f8fafc` to `#0f172a`
- **Steel Accent**: Shades from `#f0f4f8` to `#102a43`

## Typography

- **Font**: Inter (Google Fonts)
- **H1**: 48px (3rem)
- **H2**: 34px (2.125rem)
- **H3**: 24px (1.5rem)
- **Body**: 16px (1rem)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Pasific Hitech. All rights reserved.

## Contact

- **India Office**: info@phitechgroup.com | +91 912 941 6070
- **Saudi Arabia Office**: info.ksa@phitechgroup.com | +966 56 172 7061
