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
    category: "front-end",
    title: "Test Quiz",
    description:
      "This project is a React/TypeScript application consisting of two parts: a quiz application for users to take tests and view their results in their profiles",
    techs: [
      { name: "React" },
      { name: "Tanstack/react-query" },
      { name: "Tailwindcss" },
      { name: "Mui" },
    ],
    image: "/assets/work/react-quiz.png",
    live: "#",
    github: "https://github.com/MahdiPourkeshavarz/interview-test-react",
  },
  {
    num: "02",
    category: "front-end",
    title: "GadgetHub",
    description:
      "This project is a shopping website with Admin panel which users can browse through products and order whatever they wish.",
    techs: [
      { name: "React" },
      { name: "react-router-dom" },
      { name: "Tanstack/react-query" },
      { name: "Tailwindcss" },
      { name: "Mui" },
    ],
    image: "/assets/work/react-gadgethub.png",
    live: "#",
    github: "https://github.com/MahdiPourkeshavarz/react-ts-final-project",
  },
  {
    num: "03",
    category: "front-end",
    title: "geojson.io",
    description:
      "This project is about creating and working with goejson and shapes on leaflet with help of lealfet-geoman package for react",
    techs: [
      { name: "React" },
      { name: "Leaflet" },
      { name: "css" },
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
