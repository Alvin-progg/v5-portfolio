import Link from "next/link";
import Image from "next/image";
import projectConst from "@/constants/projectConst";

export default function Project() {
  return (
    <section id="projects">
      <div className="flex flex-col gap-3 items-center ">
        <p className="font-semibold text-primary-700 text-base">
          My Work
        </p>
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className="justify-center flex items-center">
            {projectConst.map((index) =>{
                <div key={index.id} >
                    <Image  
                        loading="lazy"
                        src={index.img}
                        alt={index.name + "image"}
                        width={200}
                        height={200}
                        className=""
                    />
                    <p>{index.disc}</p>
                </div>
            })}
      </div>
    </section>
  );
}
