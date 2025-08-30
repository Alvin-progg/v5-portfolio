"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full h-[10vh]">
      <div className="flex justify-between px-7 mx-66 py-8 max-xl:mx-40 max-lg:mx-20  ">
        <Link
          href="/"
          className="font-bold text-3xl text-secondary-800 hover:text-primary-600"
        >
          VIN.
        </Link>

        <ul className="flex gap-10 text-2xl font-semibold items-center">
          <li className="group relative">
            <Link href="/" className="text-secondary-800 hover:text-primary-600">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="#about" className="text-secondary-800 hover:text-primary-600">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="#experience" className="text-secondary-800 hover:text-primary-600">
              Experience
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="#projects" className="text-secondary-800 hover:text-primary-600">
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="#faq" className="text-secondary-800 hover:text-primary-600">
              Faq
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        <div>
          <Link
            href="#contact"
            className="text-2xl font-semibold text-secondary-200 bg-slate-900 py-2 px-4 rounded-2xl hover:bg-primary-800"
          >
            Lets talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
