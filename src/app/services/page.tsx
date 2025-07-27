"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Worked as designer / developer for one year at Horizon and gained experience of working with a professional team and incredibly creative projects",
    href: "",
  },
  {
    num: "02",
    title: "Data Annotation",
    description:
      "Worked as an Annotator and team lead at my firm for more than five years. Im happy to say i have worked more AI projects that anyone in my firm and I value the most each project I have worked",
    href: "",
  },
  {
    num: "03",
    title: "Software Tester",
    description:
      "Spearheaded the establishment of the company's first formal QA team, also developed and implemented comprehensive testing methodologies and created all necessary project documentation.",
    href: "",
  },
];

export default function Services() {
  return (
    <>
      <section className="min-h-[80vw] flex flex-col justify-center pb-[650px]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-3xl font-bold text-outline text-transparent group-hover:text-outline-hover translate-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 items-center hover:-rotate-45
                     justify-center flex"
                      href={service.href}
                    >
                      <BsArrowDownRight className="text-primary text-2xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  <p>{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
