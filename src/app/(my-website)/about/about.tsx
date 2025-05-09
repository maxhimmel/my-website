import Image from "next/image";
import { Section } from "../lib/section/section";
import { getAboutMe } from "./profileService";
import { RichText } from "@payloadcms/richtext-lexical/react";

export async function AboutMe() {
  const aboutMe = await getAboutMe();

  return (
    <Section.Root id="about">
      <Section.Header order="01" title="About Me" />

      <div className="grid md:grid-cols-3 gap-12">
        <RichText data={aboutMe.summary} className="md:col-span-2 space-y-4 text-lg [&>p>br]:hidden" />

        <div className="relative group">
          <div className="relative rounded-md overflow-hidden border-2 border-primary p-2 transition-all duration-300 transform group-hover:translate-y-2 group-hover:translate-x-2">
            <div className="aspect-square bg-primary/20 rounded overflow-hidden">
              <div className="h-full flex items-center justify-center text-primary">
                <Image
                  alt="Picture of Max Himmel"
                  src={aboutMe.profilePic.url!}
                  width={aboutMe.profilePic.width!}
                  height={aboutMe.profilePic.height!}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section.Root>
  );
}
