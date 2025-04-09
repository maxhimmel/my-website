import config from "@payload-config";
import Image from "next/image";
import { getPayload } from "payload";
import { RiExternalLinkFill, RiMailSendLine } from "react-icons/ri";
import { AnchorScrollOffset } from "../lib/anchorScrollOffset";

export async function AboutMe() {
  const payload = await getPayload({ config });
  const aboutMe = await payload.findGlobal({ slug: "aboutMe" });

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
          <p className="py-6">{aboutMe.summary}</p>
          <div className="flex flex-wrap gap-12 justify-between">
            {/* <p className="text-4xl text-secondary">🛹 · 🕺 · 🎨 · 🪩 · 📚</p> */}
            <div className="flex gap-2">
              <a href="mailto:himmelmax@gmail.com" className="btn btn-primary" target="_blank">
                Email <RiMailSendLine />
              </a>
              <a href="/resume" target="_blank" className="btn btn-secondary">
                Resume <RiExternalLinkFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
