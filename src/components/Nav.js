"use client"
import React from "react";

export default function Nav(){
    return(

        <nav className="w-full h-[10vh] ">
            <div className="flex justify-between p-7 mx-66 py-10 ">
                <a href="#" className="font-bold text-3xl text-secondary-800 hover:text-primary-600">
                    VIN.
                </a>
                <ul className="flex gap-10 text-2xl font-semibold items-center">
                    <li><a href="#" className="text-secondary-800 hover:text-primary-600">Home</a></li>
                    <li><a href="#" className="text-secondary-800 hover:text-primary-600">About</a></li>
                    <li><a href="#" className="text-secondary-800 hover:text-primary-600">Experience</a></li>
                    <li><a href="#" className="text-secondary-800 hover:text-primary-600">Projects</a></li>
                    <li><a href="#" className="text-secondary-800 hover:text-primary-600">Faq</a></li>
                </ul>
                <div>
                    <a href="#"  className="text-2xl font-semibold text-secondary-200  bg-slate-900 p-2 px-4 rounded-2xl">
                        Lets talk
                    </a>
                </div>
                
            </div>

        </nav>


    );
}