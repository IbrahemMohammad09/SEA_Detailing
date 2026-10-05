# SEA Detailing

A React website for presenting car and home-furniture cleaning services. The site introduces the business, showcases its services and portfolio, and provides a booking flow for service requests.

## Features
- Home page with service, about, portfolio, and customer review sections.
- Service booking page and successful-submission page.
- Responsive layouts and image-led service presentation.
- Progressive Web App support through Vite PWA tooling.
- Redux Toolkit state setup and Firebase integration dependencies.

## Tech stack
- React 19 and Vite
- React Router 7
- Tailwind CSS, Framer Motion, and Swiper
- Redux Toolkit and Firebase

## Getting started
```bash
git clone https://github.com/IbrahemMohammad09/SEA_Detailing.git
cd SEA_Detailing
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts
- `npm run dev` — start the development server.
- `npm run build` — build the production assets.
- `npm run preview` — preview the production build.
- `npm run lint` — run ESLint.

## Configuration
Review `src/constant/Api.js` and the Firebase setup before using booking or data features. Add secrets and environment-specific values through local environment configuration; do not commit credentials.

## Project structure
- `src/pages/` — home, booking, success, and error pages.
- `src/sections/` — service, portfolio, contact, and about sections.
- `src/components/` — navigation, footer, and shared UI.
- `src/redux/` — store and authentication state.

## License
No license is specified. Contact the repository owner before reuse or redistribution.
