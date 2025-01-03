/* eslint-disable react/no-unescaped-entities */
import { DownloadButton } from "@/components/DownloadButton";
import { Photo } from "@/components/Photo";
import { Socials } from "@/components/Socials";
import { Status } from "@/components/Status";

export default function Home() {
  return (
    <section className="h-full">
      <div className="h-full container mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between xl:pt-8 xl:pb-24 mt-20 space-x-12">
          <div className="text-center xl:text-left text-xl order-2 xl:order-none">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1 mb-6 pt-5">
              Hello I'm <br />
              <span className="text-accent">Mahdi Pourkeshavarz</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I Excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <DownloadButton />
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6"}
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center  items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Status />
    </section>
  );
}
