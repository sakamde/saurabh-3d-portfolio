# Saurabh Kamde - 3D Portfolio

A modern, interactive 3D portfolio website built with React, Three.js, and Tailwind CSS.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for Three.js
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Scene.tsx         # 3D scene component
│   │   └── Reveal.tsx        # Animation component
│   ├── data/
│   │   └── resume.ts         # Resume/portfolio data
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── styles.css            # Global styles
├── package.json              # Dependencies
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind configuration
└── index.html                # HTML template
```

## Features

- Interactive 3D background using Three.js
- Smooth scroll animations with Framer Motion
- Fully responsive design
- Dark theme with cyan accents
- Professional portfolio sections
  - Hero section
  - About
  - Experience
  - Projects
  - Skills
  - Education & Certifications
  - Contact

## Customization

All portfolio content is managed in `src/data/resume.ts`. Edit this file to update:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Certifications
- Achievements

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect the settings and deploy

## License

© 2024 Saurabh Kamde. All rights reserved.
