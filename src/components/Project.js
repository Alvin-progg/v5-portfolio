import Link from "next/link";
import Image from "next/image";
import projectConst from "@/constants/projectConst";

export default function Project() {
  return (
    <section id="projects">
      <div className="flex flex-col gap-3 items-center">
        <p className="font-semibold text-primary-700 text-base">My Work</p>
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className="grid grid-cols-2">
        {projectConst.map((project) => {
          return (
            <div key={project.id} className="flex flex-col ">
              <Image
                loading="lazy"
                src={project.img}
                alt={`${project.name} image`}
                width={200}
                height={200}
                className=""
              />
              <p>{project.disc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}