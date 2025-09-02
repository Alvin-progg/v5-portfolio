"use client"

import Image from "next/image";
import profile from '@/../public/profile.jpeg'
import { GoDotFill } from "react-icons/go";
import Aos from "aos";

import { useEffect } from "react";
export default function Hero(){
    useEffect(()=>{
        Aos.init();
    })

    return(
        <section id="home" className=" w-full  my-20 h-auto  flex justify-center items-center overflow-hidden lg:my-4">
            <div data-aos="fade-up"  className="items-center flex flex-col py-10   justify-center my-25 max-xl:my-15 " >
                <div className="flex-col flex  items-center justify-center">
                    <Image
                    src={profile}
                    priority={true}
                    alt="Profile pic"
                    width={200}
                    height={200}
                    sizes="(max-width: 768px) 150px, (min-width: 1024px) 170px, 200px"
                    className="rounded-full border-8 border-white object-cover"
                    />
                <p className="font-semibold text-xl py-2 px-4 -mt-1 bg-white rounded-4xl text-center flex items-center gap-1"><GoDotFill className="text-green-500"/>  Available for Work</p>
                </div>
                <div className="flex flex-col items-center  my-10 max-xl:my-5 py-2 w-6xl text-center gap-3.5">
                    <h1 className="text-5xl font-bold max-md:text-3xl lg:text-4xl max-sm:text-2xl">Hi , I&apos;m <span className="text-primary-900">Alvin Aloya</span></h1>
                    <h2 className="text-7xl font-bold max-md:text-5xl max-sm:text-3xl lg:text-6xl">Full-Stack Developer</h2>
                </div>
                <div className=" max-xl:my-5 my-10 ">
                    <button className="text-3xl relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group font-bold cursor-pointer px-4 py-3 max-md:text-2xl max-md:px-3 max-md:py-2 bg-secondary-800 hover:bg-primary-800 text-secondary-200 rounded-xl overflow-hidden" aria-label="download CV">
                        <span className="relative z-10 flex items-center gap-2 ">
                            Download CV
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600  transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-xl"></div>
                    </button>
                </div>
            </div>
        </section>

    );

}