
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-10 lg:px-20 font-medium w-full md:w-1/2 rounded-lg shadow-lg">
      <h4 className="text-4xl font-bold text-center mb-6 text-gray-100">Contact Me</h4>
      <div className="flex flex-col gap-6 p-5">
        {/* Name */}
        <div className="flex items-center gap-3 text-xl">
          <span className="font-semibold">About:</span>
          <p>"Hi, I'm Rubab! I'm proficient in TypeScript, HTML, and CSS. Currently, I'm expanding my skills in Next.js and Tailwind CSS."</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 font-semibold">
          <FaPhone className="text-3xl text-green-300" />
          <span>+92 3222143067</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 font-semibold">
          <FaEnvelope className="text-3xl text-blue-400" />
          <a href="mailto:rubabrafique05@gmail.com" className="hover:text-blue-500 transition-colors">
            rubab...@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 font-semibold">
          <FaLinkedin className="text-3xl text-sky-500" />
          <Link href="https://www.linkedin.com/in/rubab" target="_blank" className="hover:text-sky-600 transition-colors">
            linkedin.com/in/rubab
          </Link>
        </div>
      </div>
    </section>
  );
}
