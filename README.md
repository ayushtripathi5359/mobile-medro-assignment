🧠 Upskillway Landing Page

A modern, responsive landing page built using React, Tailwind CSS, and Vite — designed to showcase Upskillway’s online programs, business solutions, and learning features.

This project emphasizes modular component design, scalable architecture, and smooth user experience with consistent branding and accessibility in mind.

🚀 Tech Stack
Tool	Purpose
React 19	UI library for building modular, reusable components.
Vite	Fast build tool and development server optimized for modern React apps.
Tailwind CSS 4	Utility-first CSS framework for styling and responsive design.
Lucide React	Lightweight, customizable icon library for consistent UI icons.
ESLint	Enforces code quality and style guidelines.
PostCSS + Autoprefixer	Ensures CSS compatibility across browsers.
📦 Libraries Used
**1. React**

Used for building modular UI components like Navbar, Hero Section, FAQ, etc.
Each section is encapsulated into its own component for reusability and clarity.

2. Vite

Chosen for its blazing-fast dev server, HMR (Hot Module Reloading), and optimized builds.
It allows quick previews and smooth local development.

3. Tailwind CSS

Used for all layout, spacing, and typography utilities — ensuring full responsiveness across breakpoints with minimal CSS overhead.
Also used for advanced design patterns like gradients, hover effects, and custom shapes.

4. Lucide React

Used for vector-based, scalable icons such as ArrowRight, Star, CheckCircle2, etc.
These icons maintain a consistent aesthetic and performance advantage over image-based icons.

5. Autoprefixer

Automatically adds browser-specific prefixes during build, ensuring CSS compatibility on multiple devices and browsers.

6. ESLint + React Refresh Plugin

Maintains clean, bug-free, and consistent code while supporting fast live reloads during development.

🧩 Design / Architecture Choices
1. Component-Based Architecture

The app is split into reusable UI components stored in the /components folder.
Each component is self-contained, making maintenance and scaling straightforward.

This modular approach ensures each section can evolve independently (new props, new designs) without breaking others.

2. Tailwind-First Styling

All styling is done via Tailwind utility classes for speed, responsiveness, and maintainability.

No external CSS files are used.

Consistent design tokens (e.g., color palette, typography) maintain brand identity.

Dynamic hover, gradient, and rounded effects are implemented using Tailwind’s utility API.

3. Responsive Design

All sections are fully responsive using Tailwind breakpoints (sm, md, lg, xl).
Layout gracefully adjusts across mobile, tablet, and desktop views — achieved through responsive grid and flexbox utilities.

Add API-driven program listings.

Integrate analytics and lead form tracking.

Support dark mode using Tailwind’s theme configuration.
