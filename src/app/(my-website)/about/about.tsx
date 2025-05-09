import Image from "next/image";
import { Section } from "../lib/section/section";
import { getAboutMe } from "./profileService";

export async function AboutMe() {
  const aboutMe = await getAboutMe();

  return (
    <Section.Root id="about">
      <Section.Header order="01" title="About Me" />

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4">
          <p className="text-lg">{aboutMe.summary}</p>
          {/* <p className="text-lg">
            Hello! I&apos;m Max, a passionate full-stack developer with a strong background in both web
            development and video game software. My journey in tech began 6 years ago when I started working
            in the gaming industry, where I learned to build high-performance, responsive systems.
          </p>
          <p className="text-lg">
            Today, I specialize in creating modern web applications using TypeScript, React, and Node.js. My
            unique blend of experience allows me to bring game development principles like optimization,
            engaging UX, and real-time feedback into web development.
          </p>
          <p className="text-lg">
            I&apos;m particularly passionate about building accessible, responsive, and intuitive user
            interfaces that deliver exceptional experiences across all devices. I love solving complex
            problems and turning ideas into reality through clean, efficient code.
          </p>
          <p className="text-lg">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
            projects, or applying my game development knowledge to create interactive web experiences.
          </p> */}
        </div>

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
