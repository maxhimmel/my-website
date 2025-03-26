import Image from "next/image";
import { AnchorScrollOffset } from "../lib/anchorScrollOffset";
import { RiDownloadFill, RiMailSendLine } from "react-icons/ri";

export function AboutMe() {
  return (
    <div className="hero bg-base-200 relative">
      <AnchorScrollOffset id="about" />
      <div className="hero-content flex-col lg:flex-row overflow-clip">
        <div className="mask mask-hexagon bg-primary p-2 animate-[spin_30s_linear_infinite]">
          <div className="mask mask-hexagon ">
            <Image
              src="/profile-pic.jpg"
              alt="Picture of Max Himmel"
              width={433}
              height={433}
              priority
              className="lg:max-w-sm shadow-2xl animate-[spin-reverse_30s_linear_infinite]"
            />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Howdy!</h1>
          <p className="py-6">
            {`I am a full-stack software engineer with a strong background in gameplay engineering, bringing
            over six years of experience in crafting clean, modular, and efficient code. I thrive on finding
            the best solutions to complex problems, whether it's integrating new technologies, refining
            frameworks, or designing scalable systems. My passion lies in continuous learning and
            collaboration, and I aspire to expand my expertise in improving developer experience and
            high-level architectural design, contributing to the development of impactful and innovative
            software.`}
          </p>
          <div className="flex flex-wrap gap-12 justify-between">
            {/* <p className="text-4xl text-secondary">🛹 · 🕺 · 🎨 · 🪩 · 📚</p> */}
            <div className="flex gap-2">
              <a href="mailto:himmelmax@gmail.com" className="btn btn-primary" target="_blank">
                Email <RiMailSendLine />
              </a>
              <a href="/resume.pdf" download="resume" className="btn btn-secondary">
                Resume <RiDownloadFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
