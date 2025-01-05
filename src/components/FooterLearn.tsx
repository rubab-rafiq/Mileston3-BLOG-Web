
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-700 text-white px-8 py-12 lg:px-20 font-medium w-full md:w-1/2  shadow-xl">
      <h4 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-100">Contact Me</h4>
      <div className="flex flex-col gap-6 p-5">
        {/* About Me */}
        <div className="text-center text-sm lg:text-lg">
          <p className="font-semibold text-xl text-gray-200">About Me:</p>
         {/* <p className="text-base font-light text-gray-300">
            Hi, I'm Rubab! I'm proficient in TypeScript, HTML, and CSS. Currently, I'm expanding my skills in Next.js and Tailwind CSS.
          </p>  */}
          <p className="text-base font-light text-gray-300">
      Hi, I&apos;m Rubab! I&apos;m proficient in TypeScript, HTML, and CSS. Currently, I&apos;m expanding my skills in Next.js and Tailwind CSS.
      </p>

        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 font-semibold text-lg">
          <FaPhone className="text-3xl text-green-400" />
          <span className="text-gray-200">+92 3222143067</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 font-semibold text-lg">
          <FaEnvelope className="text-3xl text-blue-400" />
        
          <a
            href="mailto:rubabrafique05@gmail.com"
            className="text-gray-200 hover:text-blue-500 transition-colors"
          >
            rubabrafique05@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 font-semibold text-lg">
          <FaLinkedin className="text-3xl text-sky-500" />
        
          <Link
            href="https://www.linkedin.com/in/rubab"
            target="_blank"
            className="text-gray-200 hover:text-sky-600 transition-colors"
          >
            linkedin.com/in/rubab
          </Link>
        </div>
      </div>
    </section>
  );
}
