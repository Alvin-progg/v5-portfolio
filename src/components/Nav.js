"use client"
import React from "react";

export default function Nav(){
    return(

        <nav className="w-full h-10">
            <div className="flex justify-between p-7 mx-66">
                <a href="#" className="font-bold text-3xl">
                    VIN.
                </a>
                <ul className="flex gap-7 text-2xl font-semibold">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Faq</a></li>
                </ul>
                <a href="#"  className="text-3xl font-semibold">
                    Lets talk
                </a>
                
            </div>

        </nav>


    );
}