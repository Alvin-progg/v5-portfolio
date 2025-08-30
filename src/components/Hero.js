"use client"

import Image from "next/image";
import profile from '@/../public/profile.jpeg'
import { GoDotFill } from "react-icons/go";

export default function Hero(){

    return(
        <section  className=" w-full bg-cover bg-no-repeat flex justify-center items-center overflow-hidden">
            <div className="items-center flex flex-col  justify-center my-25 max-xl:my-15 " >
                <div className="flex-col flex  items-center justify-center">
                <div className="relative h-[200px] w-[200px] max-md:h-[150px] max-md:w-[150px] ">
                    <Image 
                    priority={true}
                    alt="Profile pic"
                    src={profile}
                    fill
                    className="rounded-full   border-8 border-white object-cover"
                    />
                </div>
                <p className="font-semibold text-xl py-2 px-4 -mt-1 bg-white rounded-4xl text-cente flex items-center gap-1"><GoDotFill className="text-green-500"/>  Available for Work</p>
                </div>
                <div className="flex flex-col items-center  my-10 max-xl:my-5 py-2 w-6xl text-center gap-3.5">
                    <h1 className="text-5xl font-bold max-md:text-3xl max-sm:text-2xl">Hi , I&apos;m <span className="text-primary-900">Alvin Aloya</span></h1>
                    <h2 className="text-7xl font-bold max-md:text-5xl max-sm:text-3xl">Full-Stack Developer</h2>
                </div>
                <div className=" max-xl:my-5 ">
                    <button className="text-3xl font-bold cursor-pointer px-4 py-3 max-md:text-2xl max-md:px-3 max-md:py-2  bg-secondary-800 hover:bg-primary-800 text-secondary-200 rounded-2xl" aria-label="download CV">
                        Download CV
                    </button>
                </div>
            </div>
        </section>

    );

}