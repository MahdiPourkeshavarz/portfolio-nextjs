"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";

import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper/types";

const projects = [
  {
    num: "01",
    category: "full-stack",
    title: "DishDash - Geo-Social Food App (Frontend)",
    description:
      "Engineered a dynamic and responsive Progressive Web App (PWA) using Next.js, TypeScript, and Tailwind CSS. Architected a robust client-side application featuring an interactive map UI with React-Leaflet, live POI data from OpenStreetMap, and dynamic post clustering. Managed global state with Zustand and implemented efficient server-state caching and synchronization with TanStack Query. The app includes a complete authentication flow using NextAuth.js, with a custom, Zod-validated modal for both credentials and Google OAuth.",
    techs: [
      { name: "Next.js" },
      { name: "React-Leaflet" },
      { name: "Zustand" },
      { name: "Tailwind CSS" },
      { name: "TanStack Query" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/dishdash.png",
    live: "#",
    github: "https://github.com/MahdiPourkeshavarz/dishdash",
  },
  {
    num: "02",
    category: "back-end",
    title: "DishDash API",
    description:
      "Developed a secure, scalable, and modular backend API using NestJS and TypeScript. Designed a complete JWT-based authentication system with Passport.js and secure password hashing. Architected distinct, feature-based modules for managing users, posts, image uploads, and social interactions (wishlists, likes). Utilized TypeORM with a MongoDB Atlas database for data persistence and created a full suite of RESTful endpoints with DTO-based validation.",
    techs: [
      { name: "NestJS" },
      { name: "TypeScript" },
      { name: "MongoDB" },
      { name: "TypeORM" },
      { name: "Passport.js" },
      { name: "JWT" },
    ],
    image: "/assets/work/dishdash.png",
    live: "#",
    github: "https://github.com/MahdiPourkeshavarz/dishdash-api",
  },
  {
    num: "03",
    category: "front-end",
    title: "GadgetHub (Frontend)",
    description:
      "Built a complete e-commerce storefront with React and TypeScript, featuring product Browse, a shopping cart, and a user profile section. Integrated an administrative panel for managing products and orders. Utilized TanStack Query for efficient data fetching and caching from a custom backend API.",
    techs: [
      { name: "React" },
      { name: "React Router" },
      { name: "TanStack Query" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/react-gadgethub.png",
    live: "#",
    github: "https://github.com/MahdiPourkeshavarz/react-ts-final-project",
  },
  {
    num: "04",
    category: "back-end",
    title: "GadgetHub API",
    description:
      "Engineered the backend for a full-featured e-commerce platform using NestJS, TypeScript, and Mongoose with a MongoDB database. Developed a comprehensive RESTful API with endpoints for secure user authentication (JWT), complete CRUD operations for products, order processing, and dedicated routes for an administrative panel. Ensured data integrity and request validation using DTOs and NestJS Pipes.",
    techs: [
      { name: "NestJS" },
      { name: "TypeScript" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "JWT" },
    ],
    image: "/assets/work/react-gadgethub.png",
    live: "#",
    github: "https://github.com/MahdiPourkeshavarz/nestjs-ecommerce",
  },
  {
    num: "05",
    category: "front-end",
    title: "Test Quiz",
    description:
      "A React/TypeScript application for users to take tests and view their results in their profiles, featuring a clean user interface built with Material-UI and efficient state management for handling quiz logic and scoring.",
    techs: [
      { name: "React" },
      { name: "Tanstack Query" },
      { name: "Tailwind CSS" },
      { name: "Mui" },
    ],
    image: "/assets/work/react-quiz.png",
    live: "#",
    github: "https://github.com/MahdiPourkeshavarz/interview-test-react",
  },
  {
    num: "06",
    category: "front-end",
    title: "GeoJSON Map Tool",
    description:
      "A client-side mapping application built with React and Leaflet that allows users to draw, edit, and manage geographic shapes. Integrated the `leaflet-geoman` library to provide a full suite of tools for creating and manipulating GeoJSON data directly on an interactive map.",
    techs: [
      { name: "React" },
      { name: "Leaflet" },
      { name: "CSS" },
      { name: "leaflet-geoman" },
    ],
    image: "/assets/work/react-geomahdi.png",
    live: "#",
    github: "https://github.com/MahdiPourkeshavarz/geomahdi",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);
  function handleSlideChange(swiper: SwiperType) {
    const currentIndex = Number(swiper.activeIndex);

    setProject(projects[currentIndex]);
  }
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] py-6 bg-primary"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="sm:order-1">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                className="swiper-container"
              >
                {projects.map((p, index) => (
                  <SwiperSlide key={index} className="relative">
                    <Image
                      src={p.image}
                      alt={p.title}
                      objectFit="cover"
                      layout="responsive"
                      className="rounded-lg shadow-lg"
                      width={560}
                      height={480}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="sm:order-2">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark mb-4">
                {project?.num}
              </div>
              <h2 className="text-4xl font-bold text-white mb-2 capitalize">
                {project?.title} Project
              </h2>
              <p className="text-lg text-white/70 mb-6">
                {project?.description}
              </p>
              <ul className="flex flex-wrap gap-4 mb-6">
                {project?.techs?.map((tech) => (
                  <li
                    key={tech.name}
                    className="bg-white/10 px-4 py-2 rounded text-accent"
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                {project?.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded text-accent flex items-center gap-2"
                  >
                    <BsGithub className="text-xl" /> Github
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
