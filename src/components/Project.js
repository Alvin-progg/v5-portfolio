"use client"

import Link from "next/link";
import Image from "next/image";
import projectConst from "@/constants/projectConst";
import { useState } from "react";

export default function Project() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? projectConst : projectConst.slice(0, 4);

  return (
    <section id="projects" className="py-16">
      <div data-aos="fade-ups" data-aos-duration="500" className="flex flex-col gap-4 items-center text-center">
        <p className="font-semibold text-indigo-600 text-lg tracking-wide">My Work</p>
        <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
      </div>
      <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-8 max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
        {visibleProjects.map((project) => (
          <div
            data-aos="fade-ups" data-aos-duration="500"
            key={project.id}
            className="relative flex flex-col gap-4 border border-gray-200 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out max-sm:w-full w-[500px] max-xl:w-[350px]"
          >
            <Image
              loading="lazy"
              src={project.img}
              alt={`${project.name} image`}
              width={300}
              height={200}
              className="object-cover rounded-xl h-48 w-full transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-indigo-700">{project.name}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{project.disc}</p>
              <Link
                href={project.link || "#"}
                className="mt-2 inline-block text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
      {projectConst.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            aria-label="Expand button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xl relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group font-bold cursor-pointer px-4 py-3 max-md:text-2xl max-md:px-3 max-md:py-2 bg-secondary-800 hover:bg-primary-800 text-secondary-200 rounded-xl overflow-hidden"
          >
            <span  className="relative z-10 flex items-center gap-2 ">{isExpanded ? "Show Less" : "Show More"}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600  transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-xl"></div>
          </button>
        </div>
      )}
    </section>
  );
}