"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of Experience",
  },
  {
    num: 5,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 300,
    text: "Code Commits",
  },
];

export function Status() {
  return (
    <>
      <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto mt-14">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto ">
            {stats.map((stat, index) => {
              return (
                <div
                  className="flex-1 flex gap-4 items-center justify-center"
                  key={index}
                >
                  <CountUp
                    end={stat.num}
                    duration={5}
                    delay={2}
                    className="text-3xl font-bold text-green-600"
                  />
                  <p
                    className={`${
                      stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                    } leading-snug text-white/80 text-sm`}
                  >
                    {stat.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
