import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <div className="mask mask-circle size-14 relative">
          <Image
            src={"/profile-pic.jpg"}
            width={56}
            height={56}
            alt="Picture of Max Himmel"
            className="absolute bottom-0.5"
          />
        </div>
        <i>Created by Max Himmel using Next.js & DaisyUI</i>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/maxhimmel" className="btn btn-square" target="_blank">
          <SiGithub className="size-8" />
        </a>
        <a href="https://linkedin.com/in/maxhimmel" className="btn btn-square" target="_blank">
          <SiLinkedin className="size-8" />
        </a>
      </nav>
    </footer>
  );
}
