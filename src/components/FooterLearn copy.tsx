
// import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
// import Link from "next/link";

// export default function ContactSection() {
//   return (
//     <section className="bg-purple-800 text-white px-8 py-7 lg:px-20 font-bold w-full md:w-1/2">
//       <h4 className="text-3xl font-bold text-center mb-4 text-black">Contact Me</h4>
//       <div className="flex flex-col gap-4 p-5">
//         {/* Name */}
//         <div className="flex items-center gap-2 text-xl">
//           <span className="font-semibold">Name: </span>
//           <span>Rubab</span>
//         </div>
        
//         {/* Phone */}
//         <div className="flex items-center gap-3 font-semibold">
//           <FaPhone className="text-4xl text-green-300" />
//           <span>+92 3222143067</span>
//         </div>
        
//         {/* Email */}
//         <div className="flex items-center gap-3 font-semibold">
//           <FaEnvelope className="text-4xl text-blue-400" />
//           <a href="rubabrafique05@gmail.com">rubab...@gmail.com</a>
//         </div>
        
//         {/* LinkedIn */}
//         <div className="flex items-center gap-3 font-semibold">
//           <FaLinkedin className="text-4xl text-sky-500" />
//           <Link href="https://www.linkedin.com/in/rubab" target="_blank">
//             linkedin.com/in/rubab
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-10 lg:px-20 font-medium w-full md:w-1/2 rounded-lg shadow-lg">
      <h4 className="text-4xl font-bold text-center mb-6 text-gray-100">Contact Me</h4>
      <div className="flex flex-col gap-6 p-5">
        {/* Name */}
        <div className="flex items-center gap-3 text-xl">
          <span className="font-semibold">Name:</span>
          <span>Rubab</span>
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
