import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

function calculateDelay(index: number) {
  const totalSteps = 6;
  const delay = (totalSteps - index - 1) * 0.1;
  return delay;
}

export function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: calculateDelay(index),
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}
