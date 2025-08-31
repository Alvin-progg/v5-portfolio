"use client";

import Image from "next/image";
import { Tooltip } from "flowbite-react";
import tech from "@/constants/tech";
import anselmo from "@/../public/anselmo.jpg";
import bats from "@/../public/batstate-u.jpg";
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
        <div className="my-10 py-10   ">
          <div className="flex flex-col gap-3 items-center ">
            <p className="font-semibold text-primary-700 text-base">
              Academic Background
            </p>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="my-10 py-10  items-center flex flex-col justify-center mx-10 ">
            <div className="flex gap-10 max-lg:flex-col max-lg:gap-12  max-sm:mx-8   ">
              <div className="flex max-sm:flex-col   gap-4">
                <Image
                  src={anselmo}
                  alt="Anselmo Logo"
                  width={120}
                  height={120}
                  loading="lazy"
                  
                  className="rounded-full object-cover max-xl:size-[100px] max-sm:size-[60px]"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-secondary-600 max-sm:text-sm">Strand:</p>
                  <h3 className="text-xl font-semibold text-primary-800">
                    Computer System Servicing
                  </h3>
                  <h4 className="text-secondary-600 max-sm:text-sm">
                    2022 - 2024
                  </h4>
                  <p className="text-secondary-600 max-sm:text-sm">
                    Anselmo A. Sandoval MNHS - Senior High School{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 max-sm:flex-col ">
                <Image
                  src={bats}
                  alt="Batstate-u logo"
                  width={120}
                  height={120}
                  loading="lazy"
                  className="rounded-full size-[120px] max-xl:size-[100px] max-sm:size-[60px]"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-secondary-600 max-sm:text-sm">Strand:</p>
                  <h3 className="text-xl max-sm:text- font-semibold text-primary-800">
                    Bachelor of Science in Information Technology
                  </h3>
                  <h4 className="text-secondary-600 max-sm:text-sm">
                    2024 - Present
                  </h4>
                  <p className="text-secondary-600 max-sm:text-sm">
                    Anselmo A. Sandoval MNHS - Senior High School{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
