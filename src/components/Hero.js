import Image from "next/image";
import profile from '@/../public/profile.jpeg'
import { GoDotFill } from "react-icons/go";

export default function Hero(){

    return(
        <section  className=" w-full bg-cover bg-no-repeat flex justify-center items-center">
            <div className="items-center flex flex-col  justify-center my-25 " >
                <div className="flex-col flex  items-center justify-center">
                    <Image 
                    alt="Profile pic"
                    src={profile}
                    width={220}
                    height={220}
                    className="rounded-full drop-shadow-xl  border-8 border-white object-cover"
                />
                <p className="font-semibold text-xl py-2 px-4 -mt-1 bg-white rounded-4xl text-cente flex items-center gap-1"><GoDotFill className="text-green-800"/>  Available for Work</p>
                </div>
                <div className="flex flex-col items-center  my-10 py-2 w-6xl text-center gap-3.5">
                    <h1 className="text-5xl font-bold">Hi , I'm <span className="text-primary-900">Alvin Aloya</span></h1>
                    <h2 className="text-7xl font-bold">Full-Stack Developer</h2>
                </div>
                <div className="my-20">
                    <button className="text-3xl font-bold cursor-pointer px-4 py-3 bg-secondary-900 hover:bg-primary-800 text-secondary-200 rounded-2xl" aria-label="download CV">
                        Download CV
                    </button>
                </div>
            </div>
        </section>

    );

}