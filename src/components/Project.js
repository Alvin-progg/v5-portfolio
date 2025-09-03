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
      <div className="grid max-lg:grid-cols-1 grid-cols-2 items-center justify-center my-10 py-5 mx-66 max-lg:mx-0 gap-4">
        {projectConst.map((project) => {
          return (
            <div
              key={project.id}
              className="flex flex-col w-[600px] gap-3 max-sm:w-auto border h-[400px] border-secondary-300 rounded-2xl p-4 items-center "
            >
              <Image
                loading="lazy"
                src={project.img}
                alt={`${project.name} image`}
                width={250}
                height={250}
                className="object-cover rounded-2xl"
              />
              <div className="flex flex-col gap-3.5">
                <h2 className="text-3xl text-primary-600 font-semibold">{project.name}</h2>
                <p className="leading-loose font-light">{project.disc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
