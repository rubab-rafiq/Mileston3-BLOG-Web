import {
  Github,
  Linkedin,
  Youtube,
} from "@/components/icons";
import Link from "next/link";

export default function SocialMedia() {
  return (

    // TODO: If you activate 3 or more social icons, make sure to update the Navbar styling accordingly.

    // Social Icons
    <nav className="flex gap-2 ">
      <Link href={"http://https://www.youtube.com/"} target="_blank">
        <Youtube className={`w-6 h-6`} />
      </Link>
      <Link href={"https://www.linkedin.com/in/rubab-m-rafiq-8696a2330/"} target="_blank">
        <Linkedin className={`w-6 h-6`} />
      </Link>
      <Link href={"https://github.com/rubab-rafiq"} target="_blank">
        <Github className={`w-6 h-6 fill-dark dark:fill-light`} />
      </Link>
    </nav>
  );
}
