/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import emailjs from "@emailjs/browser";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

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
    description: "Oman, Masqat",
  },
];

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });

  // 1. Define the validation schema with Yup
  const contactSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    service: Yup.string().required("Please select a service"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message is too short"),
  });

  // 2. Initialize Formik with the useFormik hook
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

      emailjs
        .send(serviceID, templateID, values, publicKey)
        .then((response) => {
          setStatus({
            type: "success",
            message: "Your message has been sent successfully!",
          });
          resetForm();
        })
        .catch((err) => {
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

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
              {/* Your info list remains unchanged */}
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
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
                ))}
              </ul>
            </div>
            <div className="lg:h-[54%] order-2 lg:order-none pb-12 w-full">
              {/* 3. Connect the form to Formik's handleSubmit */}
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">Let's Work Together</h3>
                <p className="text-white/60">
                  I'm really looking forward to working with you. Please fill
                  out the form so I can be in touch.
                </p>

                {/* 4. Connect each input and display validation errors */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <Input
                      type="text"
                      placeholder="First name"
                      {...formik.getFieldProps("firstname")}
                    />
                    {formik.touched.firstname && formik.errors.firstname && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.firstname}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Input
                      type="text"
                      placeholder="Last name"
                      {...formik.getFieldProps("lastname")}
                    />
                    {formik.touched.lastname && formik.errors.lastname && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.lastname}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Custom handling for shadcn/ui Select component */}
                <div className="flex flex-col gap-1">
                  <Select
                    name="service"
                    onValueChange={(value) => {
                      formik.setFieldValue("service", value);
                      formik.setFieldTouched("service", true);
                    }}
                    value={formik.values.service}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="UI/UX Design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="Data Annotation">
                          Data Annotation
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {formik.touched.service && formik.errors.service && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.service}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Textarea
                    className="h-[200px]"
                    placeholder="Type your message here..."
                    {...formik.getFieldProps("message")}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                {/* 5. Ensure the button is type="submit" */}
                <Button
                  type="submit"
                  size="lg"
                  className="max-w-[150px]"
                  disabled={formik.isSubmitting}
                >
                  Send Message
                </Button>
                {status.type && (
                  <p
                    className={`mt-4 text-sm ${
                      status.type === "success"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
