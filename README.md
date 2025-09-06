# Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, services, work experience, and provides a way to get in touch with me. The website is built with **Next.js**, styled with **Tailwind CSS**, and enhanced with **shadcn/ui** for UI components and **Framer Motion** for animations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)

## Features

- 🏠 **Home Page**: Introduction and brief information about myself.
- 💼 **Services Page**: A list of services I offer.
- 🧳 **Work Experience Page**: Displaying my professional work experience.
- 📞 **Contact Page**: A form to get in touch with me.
- 🎨 **Responsive Design**: Fully responsive and optimized for mobile, tablet, and desktop screens.
- 🖼️ **Framer Motion Animations**: Smooth, interactive animations for an enhanced user experience.
- 🎯 **SEO Friendly**: Optimized for search engines using Next.js's built-in SEO features.

## Technologies Used

- **[Next.js](https://nextjs.org/)**: React framework for server-side rendering and static site generation.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for custom styling.
- **[shadcn/ui](https://ui.shadcn.dev/)**: Pre-built, accessible, and customizable UI components based on Radix UI.
- **[Framer Motion](https://www.framer.com/motion/)**: Library for creating animations and transitions.
- **[React Hook Form](https://react-hook-form.com/)**: For handling form submissions in the contact page.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly-typed JavaScript for better code reliability and maintainability.

## Project Structure

The project follows a simple file structure for a Next.js application:

```bash
.
├── app/                  # Next.js App Directory (using App Router)
│   ├── layout.tsx        # Main layout for the application
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── work/             # Work Experience page
│   └── contact/          # Contact Me page
│   └── resume/           # resume page
├── components/           # Reusable components
├── public/               # Static assets (images, etc.)
├── README.md             # Project documentation
├── tailwind.config.js    # TailwindCSS configuration file
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## installation

1. **Clone the front-end repository**

```bash
git clone https://github.com/MahdiPourkeshavarz/portfolio-nextjs.git
```

2. **Navigate to the project directory**

```bash
cd portfolio-nextjs
```

3. **Install dependencies**

```bash
npm install
```

4. **setup for Emailjs**

User Feedback: Displays clear success or error messages directly in the UI after a form submission attempt, enhancing the user experience.

Configuration
To enable the contact form, you must create an EmailJS account and configure your environment variables.

Create a .env.local file in the root of the project.

Add the following variables to the file, replacing the placeholder values with your actual credentials from your EmailJS dashboard.

# .env.local - EmailJS Credentials

NEXT_PUBLIC_EMAILJS_SERVICE_ID="YOUR_SERVICE_ID_HERE"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="YOUR_TEMPLATE_ID_HERE"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="YOUR_PUBLIC_KEY_HERE"

Important: After creating or modifying the .env.local file, you must restart the development server for the changes to be applied.

## Running the Project

51. run on the development server

```bash
npm run dev
```

6. open the website on the browser
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
