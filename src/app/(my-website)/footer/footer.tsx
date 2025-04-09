import Image from "next/image";
import { PropsWithChildren } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Footer() {
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
        <i>
          Created by Max Himmel using <HoverLink href="https://nextjs.org/">Next.js</HoverLink>,{" "}
          <HoverLink href="https://payloadcms.com/">Payload CMS</HoverLink>, &{" "}
          <HoverLink href="https://daisyui.com/">DaisyUI</HoverLink> <b>♡</b>
        </i>
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

function HoverLink({ href, children }: { href: string } & PropsWithChildren) {
  return (
    <a href={href} target="_blank" className="hover:underline">
      {children}
    </a>
  );
}
