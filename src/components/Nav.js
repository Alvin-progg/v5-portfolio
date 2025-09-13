"use client";
import Link from "next/link";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/30 backdrop-blur-md shadow-lg border-b border-white/20' 
            : 'bg-transparent'
        }`}
      >
        <div className={`flex justify-between px-7 mx-50 items-center py-4 max-xl:mx-30 max-lg:mx-20 max-md:mx-5 max-sm:mx-3`}>
          <Link
            href="/"
            className="font-bold text-3xl text-secondary-800 hover:text-primary-600 items-center py-2"
          >
            VIN.
          </Link>

          {/* Desktop Nav Links */}
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
            <button 
              aria-label="Toggle Menu" 
              className="text-3xl text-secondary-800 items-center hidden flex max-lg:flex"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full py-8 px-6">
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/"
              className="font-bold text-2xl text-secondary-800"
              onClick={closeMobileMenu}
            >
              VIN.
            </Link>
            <button 
              aria-label="Close Menu" 
              className="text-2xl text-secondary-800"
              onClick={closeMobileMenu}
            >
              <RiCloseFill />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-xl font-semibold flex-1">
            <li className="group relative">
              <Link
                href="#home"
                className="block py-2 text-secondary-800 hover:text-primary-600"
                onClick={closeMobileMenu}
              >
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="#about"
                className="block py-2 text-secondary-800 hover:text-primary-600"
                onClick={closeMobileMenu}
              >
                About
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="#experience"
                className="block py-2 text-secondary-800 hover:text-primary-600"
                onClick={closeMobileMenu}
              >
                Experience
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="#projects"
                className="block py-2 text-secondary-800 hover:text-primary-600"
                onClick={closeMobileMenu}
              >
                Projects
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="#faq"
                className="block py-2 text-secondary-800 hover:text-primary-600"
                onClick={closeMobileMenu}
              >
                FAQ
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          <div className="mt-auto pt-6 border-t border-gray-200">
            <Link
              href="#contact"
              className="block w-full text-center text-xl font-semibold text-secondary-200 bg-slate-800 py-3 px-4 rounded-xl hover:bg-primary-800 transition-all duration-300"
              onClick={closeMobileMenu}
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}