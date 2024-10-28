"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export function Photo() {
  return (
    <>
      <div className="w-full h-full relative">
        <motion.div>
          <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] ">
            <Image
              src="/assets/photo.png"
              priority
              quality={100}
              fill
              alt="mahdi"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
