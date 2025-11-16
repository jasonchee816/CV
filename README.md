# Jason Chee - CV

A modern, interactive CV built with React, TypeScript, and Material-UI.

## Features

- 🎨 Modern UI with Material-UI components
- 🌓 Dark/Light theme toggle
- 📱 Responsive design (desktop and mobile)
- 🖱️ Draggable modals on desktop
- 📋 Bottom sheet modals on mobile
- ✨ Smooth animations and transitions
- 🎯 TypeScript for type safety

## Technology Stack

- **React 18.2.0**
- **TypeScript 4.9.5**
- **Material-UI (MUI) 5.14.20**
- **react-draggable** for draggable modals

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
yarn install
# or
npm install
```

### Development

```bash
# Start development server
yarn start
# or
npm start
```

The app will open at `http://localhost:3000`

### Build

```bash
# Build for production
yarn build
# or
npm run build
```

## Deployment

This project is configured for GitHub Pages deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Enable GitHub Pages in repository settings (Settings → Pages → Source: GitHub Actions)
3. Push to `main` branch - deployment happens automatically!

## Project Structure

```
src/
├── components/
│   ├── sections/          # Section content components
│   ├── ContentSection.tsx
│   ├── DraggablePaper.tsx
│   ├── ProfileModal.tsx
│   ├── ProfileSection.tsx
│   ├── SectionAccordion.tsx
│   └── ThemeToggle.tsx
├── images/                # Image assets
├── App.tsx               # Main app component
├── index.tsx             # Entry point
└── index.css             # Global styles
```

## License

Private project - All rights reserved
