import Link from "next/link"
import { FaFacebook , FaLinkedin } from "react-icons/fa";
import { FaGithub , FaInstagram} from "react-icons/fa6";
export default function foot(){
    return(
        <section className="bg-secondary-200 overflow-hidden">
            <div className="flex items-center justify-center py-10">

                <ul className="flex gap-8 text-4xl">
                    <li><Link href="#" className="text-slate-900 hover:text-primary-900 "><FaFacebook /></Link></li>
                    <li><Link href="#" className="text-slate-900 hover:text-primary-900"><FaGithub /></Link></li>
                    <li><Link href="#" className="text-slate-900 hover:text-primary-900"><FaLinkedin /></Link></li>
                    <li><Link href="#" className="text-slate-900 hover:text-primary-900"><FaInstagram /></Link></li>
                </ul>
            </div>
            <div className="justify-between flex items-center mx-66 py-10">
                <div className="flex gap-1 text-xl font-semibold">
                    <p>Copyright © 2025</p>
                    <Link href="/">Alvin Aloya.</Link>
                    <p>All Rights Reserve.</p>
                </div>
                <div className=" text-xl font-semibold">
                    <p>Created By: Alvin Aloya</p>
                </div>
            </div>
        </section>
    )

}