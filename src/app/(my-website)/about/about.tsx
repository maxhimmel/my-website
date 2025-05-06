// "use client";

import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
import { getAboutMe } from "./profileService";

export async function AboutMe() {
  const aboutMe = await getAboutMe();
  // const sectionRef = useRef<HTMLElement>(null);
  // const [aboutMe, setAboutMe] = useState<AboutMe | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     const aboutMe = await getAboutMe();
  //     setAboutMe(aboutMe);
  //   })();
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const [entry] = entries;
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("opacity-100");
  //         observer.unobserve(entry.target);
  //       }
  //     },
  //     {
  //       threshold: 0.1,
  //     }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  return (
    <section
      id="about"
      // ref={sectionRef}
      className="py-24 md:py-32 opacity-0 transition-opacity duration-1000 ease-in-out"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-primary mr-2">01.</span> About Me
          <span className="h-px bg-border grow ml-6"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg">
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
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open-source projects, or applying my game development knowledge to create interactive web
              experiences.
            </p>
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
            <div className="absolute inset-0 border-2 border-primary rounded-md -z-10 translate-y-4 translate-x-4 transition-all duration-300 group-hover:translate-y-2 group-hover:translate-x-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
