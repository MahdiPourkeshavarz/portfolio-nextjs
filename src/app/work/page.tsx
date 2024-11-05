"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
    image: "/assets/work/thumb1.png",
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
    image: "/assets/work/thumb2.png",
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
    image: "/assets/work/thumb3.png",
    live: "#",
    github: "https://github.com/MahdiPourkeshavarz/geomahdi",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);
  function handleSlideChange(swiper) {
    const currentIndex = Number(swiper.activeIndex);

    setProject(projects[currentIndex]);
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[60vh] flex flex-col justify-center py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-[200px]">
            <div className="w-full lg:w-[50%] xl:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
              <div className="flex flex-col gap-8 h-[50%]">
                <div className="text-6xl leading-none font-bold text-transparent text-outline">
                  {project?.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project?.category} project
                </h2>
                <p className="text-white/60">{project?.description}</p>
                <ul className="flex flex-row gap-4">
                  {project?.techs?.map((tech, index) => {
                    return (
                      <li className="text-xl text-accent" key={index}>
                        {tech?.name}
                        {index !== project?.techs?.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex flex-row gap-6 items-center">
                  {project?.github && (
                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}

                  {project?.live && project.live !== "" && (
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live demo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[60%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="lg:h-[540px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[440px] relative group flex justify-center items-center md:w-[560px] sm:h-[355px]">
                        <div className="absolute top-0 w-full h-full z-10"></div>
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt="_"
                            className="object-cover"
                            width={560}
                            height={480}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
