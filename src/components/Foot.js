import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaInstagram } from "react-icons/fa6";

export default function Foot() {
  return (
    <footer className="w-full overflow-hidden bg-gray-50 ">
      <div className="flex flex-col lg:flex-row items-center justify-center pt-8 pb-6 px-4 sm:px-6 lg:px-8 gap-6 lg:gap-0">
        <ul className="flex gap-6 lg:gap-8 text-2xl sm:text-3xl lg:text-4xl order-2 lg:order-1">
          <li>
            <Link href="https://www.facebook.com/alvin.sucke" className="text-slate-900 hover:text-primary-900 transition-colors duration-300">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Alvin-progg" className="text-slate-900 hover:text-primary-900 transition-colors duration-300">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/alvin-aloya-45248b340/" className="text-slate-900 hover:text-primary-900 transition-colors duration-300">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/aloyaalvin/" className="text-slate-900 hover:text-primary-900 transition-colors duration-300">
              <FaInstagram />
            </Link>
          </li>
        </ul>

      </div>
      <div className="flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8 text-center text-slate-900">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-base sm:text-xl font-light items-center">
          <p>Copyright © 2025</p>
          <span className="group relative">
            <Link
              href="/"
              className="text-secondary-800 hover:text-primary-600 transition-colors duration-300"
            >
              Alvin Aloya.
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </span>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}