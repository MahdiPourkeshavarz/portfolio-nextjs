"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+98) 919 995 5776",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "keshavarz.mahdi75@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Tehran, Chahardangeh",
  },
];

export default function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-[30px] items-start">
            <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] lg:w-[72px] bg-[#27272c] text-accent rounded-lg flex items-center">
                        <div className="text-[28px] flex mx-auto">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:h-[54%] order-2 lg:order-none pb-12">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Lets Work together</h3>
                <p className="text-white/60">
                  Im really looking forward to work with You. please fill form
                  the form so I can be in touch with You
                </p>
                <div className="grid grid-col-1 lg:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="First name" />
                  <Input type="lastname" placeholder="Last name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="phone" placeholder="Phone Number" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="est">Select a service</SelectItem>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="est">UI/UX Design</SelectItem>
                      <SelectItem value="est">Data Annotation</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here..."
                />
                <Button size="lg" className="max-w-[150px]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
