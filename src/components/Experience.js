import Image from "next/image";
import { Tooltip } from "flowbite-react";
import tech from "@/constants/tech";
export default function Experience() {
  return (
    <section id="experience" className="w-full ">
      <div className="flex flex-col  mt-20 m-2">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-semibold text-primary-700 text-base">My Career</p>
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        <div className="flex  flex-col my-20 max-md:my-10 max-md:py-5 py-10 items-center text-wrap mx-10">
          <div className="w-[900px] max-lg:w-auto flex flex-col gap-3.5 border-b py-5 border-secondary-300">
            <h3 className="text-3xl font-bold">Front-End Developer</h3>
            <div className="flex justify-between max-sm:flex-col text-2xl font-semibold text-secondary-600">
              <p>WeTech Dev ( Remote )</p>
              <p>(2025 - Present )</p>
            </div>
            <p className="text-xl tracking-wider font-light">
              As a Front-End Developer at WetechDev, I focus on building
              responsive, user-friendly interfaces that deliver smooth and
              engaging web experiences.
            </p>
          </div>
          <div className="w-[900px] max-lg:w-auto flex flex-col gap-3.5 border-b py-5 border-secondary-300">
            <h3 className="text-3xl font-bold">Tech Team Member</h3>
            <div className="flex justify-between  max-sm:flex-col text-2xl font-semibold text-secondary-600">
              <p>Batstate-u </p>
              <p>(2024 - Present )</p>
            </div>
            <p className="text-xl tracking-wider font-light">
              I&apos;m part of the school&apos;s Tech Team, handling sound
              system setup and management during events. I make sure
              microphones, mixers, and audio run smoothly so every program is
              clear and engaging.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-semibold text-primary-700 text-base">Expertise</p>
          <h2 className="text-3xl font-bold">Tech Stack</h2>
        </div>
        <div className="flex flex-wrap gap-10 my-10 mx-10 max-sm:mx-2 justify-center px-7 items-center">
          {tech.map((item) => (
            <Tooltip key={item.id} content={item.name} placement="top">
              <Image
                priority={true}
                src={item.logo}
                alt={item.name}
                width={60}
                height={60}
                className="cursor-pointer"
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}
