### Developed by Nexbern Technologies
### www.nexbern.com


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

