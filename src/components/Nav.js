"use client";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full h-[10vh] lg:h-[13vh] 2xl:h-[10vh] max-2xl:h-[10vh] z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className={`flex justify-between px-7 mx-50 items-center    py-4 max-xl:mx-30 max-lg:mx-20 max-md:mx-5 max-sm:mx-3`}>
        <Link
          href="/"
          className="font-bold text-3xl text-secondary-800 hover:text-primary-600 items-center py-2"
        >
          VIN.
        </Link>

        <ul className="flex gap-10 text-2xl font-semibold items-center max-lg:hidden max-xl:gap-5">
          <li className="group relative">
            <Link
              href="#home"
              className="text-secondary-800 hover:text-primary-600"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link
              href="#about"
              className="text-secondary-800 hover:text-primary-600"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link
              href="#experience"
              className="text-secondary-800 hover:text-primary-600"
            >
              Experience
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link
              href="#projects"
              className="text-secondary-800 hover:text-primary-600"
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link
              href="#faq"
              className="text-secondary-800 hover:text-primary-600"
            >
              FAQ
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          <Link
            href="#contact"
            className="text-2xl font-semibold text-secondary-200 bg-slate-800 py-2 px-4 rounded-xl hover:bg-primary-800 max-md:text-xl max-md:px-3 relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
          >
            <span className="relative z-10">Let&apos;s talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-xl"></div>
          </Link>
          <button aria-label="Menu " className="text-3xl text-secondary-800 items-center hidden max-lg:flex">
            <RiMenu3Fill />
          </button>
        </div>
      </div>
    </nav>
  );
}