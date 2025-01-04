
// import Link from "next/link";
// import React from "react";
import ContactSection from "./FooterContactForm";
import FooterLearn from "./FooterLearn";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-black mt-12">
//       <section className="flex flex-col md:flex-row">
//         <FooterLearn />
//         <ContactSection />
//       </section>
//       <section className="px-6 xs:px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
//         <div className="flex justify-center items-center gap-x-2 text-sm text-light">
//           <p className="">
//             Developed
//             <span>&nbsp;💖&nbsp;with&nbsp;</span>&quot;Next.js&quot;
//           </p>

//           <Link href={"https://nextjs.org/"} target="_blank">
//             <Image src="/nextjs.svg" alt="next.js 14" width={24} height={24} />
//           </Link>
//           <span className="text-light">&nbsp;&&nbsp;</span>
//           <Link href={"https://sanity.io/"} target="_blank">
//             <Image src="/sanity.svg" alt="sanity" width={24} height={24} />
//           </Link>
//         </div>

//         <div>
//           <p className="text-xs text-light">
//             © 2024{" "}
//             <span className="text-light font-bold">&nbsp;AI</span>
//             <span className="text-accentDarkPrimary font-bold">
//               BLOG&nbsp;
//             </span>{" "}
//             All rights reserved.
//           </p>
//         </div>
//       </section>
//     </footer>
//   );
// }

// import Link from "next/link";
// import React from "react";
// import ContactSection from "./FooterContactForm";
// import FooterLearn from "./FooterLearn";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-black mt-12">
//       <section className="flex flex-col md:flex-row">
//         <FooterLearn />
//         <ContactSection />
//       </section>
//       <section className="px-6 xs:px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
//         <div className="flex justify-center items-center gap-x-2 text-sm text-light">
//           <p className="">Developed

//             {/* Escaping double quotes and apostrophes */}
//             <span>&nbsp;💖&nbsp;with&nbsp;&quot;Next.js&quot;</span>

//           </p>

//           <Link href={"https://nextjs.org/"} target="_blank">
//             <Image src="/nextjs.svg" alt="next.js 14" width={24} height={24} />
//           </Link>
//           <span className="text-light">&nbsp;&&nbsp;</span>
//           <Link href={"https://sanity.io/"} target="_blank">
//             <Image src="/sanity.svg" alt="sanity" width={24} height={24} />
//           </Link>
//         </div>

//         <div>
//           <p className="text-xs text-light">
//             © 2024{" "}
//             <span className="text-light font-bold">&nbsp;AI</span>
//             <span className="text-accentDarkPrimary font-bold">
//               BLOG&nbsp;
//             </span>{" "}
//             All rights reserved.
//           </p>
//         </div>
//       </section>
//     </footer>
//   );
// }

// import Link from "next/link";
// import React from "react";
// import ContactSection from "./FooterContactForm";
// import FooterLearn from "./FooterLearn";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-black mt-12">
//       <section className="flex flex-col md:flex-row">
//         <FooterLearn />
//         <ContactSection />
//       </section>
//       <section className="px-6 xs:px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
//         <div className="flex justify-center items-center gap-x-2 text-sm text-light">
//           <p className="">
//             Developed
//             <span>&nbsp;💖&nbsp;with&nbsp;&ldquo;Next.js&rdquo;</span>
//           </p>

//           <Link href={"https://nextjs.org/"} target="_blank">
//             <Image src="/nextjs.svg" alt="next.js 14" width={24} height={24} />
//           </Link>
//           <span className="text-light">&nbsp;&&nbsp;</span>
//           <Link href={"https://sanity.io/"} target="_blank">
//             <Image src="/sanity.svg" alt="sanity" width={24} height={24} />
//           </Link>
//         </div>

//         <div>
//           <p className="text-xs text-light">
//             © 2024{" "}
//             <span className="text-light font-bold">&nbsp;AI</span>
//             <span className="text-accentDarkPrimary font-bold">
//               BLOG&nbsp;
//             </span>{" "}
//             All rights reserved.
//           </p>
//         </div>
//       </section>
//     </footer>
//   );
// }
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white  mt-12 pb-2">
             <section className="flex flex-col md:flex-row">
         <FooterLearn />
         <ContactSection />
       </section>
      {/* Top section: Footer Links and Contact */}
      {/* Bottom section: Copyright and Technology Logos */}
      <section className="border-t border-gray-700  pt-4 mt-2 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex justify-center items-center gap-x-4 text-base">
          <p className="text-light">
            Built with <span className="font-bold">Next.js</span> and <span className="font-bold">Sanity</span>
          </p>
          <div className="flex gap-4">
            <Link href="https://nextjs.org/" target="_blank">
              <Image src="/nextjs.svg" alt="Next.js" width={24} height={24} />
            </Link>
            <Link href="https://sanity.io/" target="_blank">
              <Image src="/sanity.svg" alt="Sanity.io" width={24} height={24} />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm text-light  sm:mt-0 text-center sm:text-left">
            © 2024 <span className="font-bold">AI BLOG</span>. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
