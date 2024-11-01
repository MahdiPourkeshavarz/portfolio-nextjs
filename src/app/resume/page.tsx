"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMaterialdesign } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I like the satisfaction of a working piece of code. Eager to learn new things, I always have a course or two bookmarked on my browser.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mahdi Pourkeshavarz",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+98) 919 995 5776",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Iran",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "keshavarz.mahdi75@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Persian, English, German",
    },
  ],
};

const experience = {
  icon: "/assets/resume/cap.svg",
  title: "My Expreience",
  description:
    "Being a team player is one of the many skills I have achieved after working with many developers at my firm",
  items: [
    {
      company: "Horizon",
      position: "Front-End Developer",
      duration: "2024 - present",
    },
    {
      company: "Horizon",
      position: "Data Annotator",
      duration: "2018 - 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "I Always want to learn more and getting aspects of new things, So this list of education will go on and on in the near future",
  items: [
    {
      institution: "Azad Tehran-south",
      degree: "B.A. Electrical Engineering",
      duration: "2015-2020",
    },
    {
      institution: "Google",
      degree: "Google User Experience(UX) Course",
      duration: "100hrs",
    },
    {
      institution: "Maktab Sharif",
      degree: "Front-end React Developer",
      duration: "320hrs",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "This is the list of all related skill in the Web Development world",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "Cascading Style Sheet(css) 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript ES6",
    },
    {
      icon: <FaNodeJs />,
      name: "Node js",
    },
    {
      icon: <FaReact />,
      name: "React 18",
    },
    ,
    {
      icon: <SiNextdotjs />,
      name: "Next js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    ,
    {
      icon: <SiMaterialdesign />,
      name: "Material Ui",
    },
  ],
};

export default function Resume() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[50vw] flex items-center justify-center pb-6 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col lg:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[340px] mx-auto xl:mx-0 gap-8">
              <TabsTrigger className="shadow-xl" value="experience">
                Experience
              </TabsTrigger>
              <TabsTrigger className="shadow-xl" value="education">
                Education
              </TabsTrigger>
              <TabsTrigger className="shadow-xl" value="skills">
                Skills
              </TabsTrigger>
              <TabsTrigger className="shadow-xl" value="about">
                About me
              </TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-400px">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#2e2e35] py-6 flex flex-col justify-center items-center gap-1 shadow-lg rounded-xl hover:bg-[#42424b]"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="test-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-400px">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#2e2e35] py-6 flex flex-col justify-center items-center gap-1 shadow-lg rounded-xl hover:bg-[#42424b]"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="test-xl max-w-[260px] min-h-[60px] text-center px-2">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px] ">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-col2 sm:grid-col-1 md:grid-cols-4  xl:gap-[30px] gap-4">
                    {skills.skillList.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group hover:bg-[#42424b]">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {item?.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{item?.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
}
