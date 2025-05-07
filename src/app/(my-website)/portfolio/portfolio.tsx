// import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "../lib/sectionHeader";

// Mock projects data
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart management, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality, team collaboration features, and real-time updates using WebSockets.",
    tags: ["TypeScript", "React", "Socket.IO", "PostgreSQL", "Redux"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Interactive 3D Portfolio",
    description:
      "An interactive 3D portfolio website built with Three.js and React, featuring custom shaders and animations for a unique user experience.",
    tags: ["React", "Three.js", "GLSL", "WebGL", "Framer Motion"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Multiplayer Game Engine",
    description:
      "A lightweight game engine built for web browsers, supporting multiplayer functionality, physics simulation, and custom asset loading.",
    tags: ["JavaScript", "WebSockets", "Canvas API", "Physics", "Game Dev"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
];

export function Portfolio() {
  // const sectionRef = useRef<HTMLElement>(null);

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
      id="projects"
      // ref={sectionRef}
      className="py-24 md:py-32 transition-opacity duration-1000 ease-in-out" //opacity-0
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader order="03" title="Projects" />

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} isEven={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  isEven: boolean;
}

function ProjectCard({ project, isEven }: ProjectCardProps) {
  // const cardRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const [entry] = entries;
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("opacity-100");
  //         entry.target.classList.add(isEven ? "translate-x-0" : "-translate-x-0");
  //         observer.unobserve(entry.target);
  //       }
  //     },
  //     {
  //       threshold: 0.1,
  //     }
  //   );

  //   if (cardRef.current) {
  //     observer.observe(cardRef.current);
  //   }

  //   return () => {
  //     if (cardRef.current) {
  //       observer.unobserve(cardRef.current);
  //     }
  //   };
  // }, [isEven]);

  return (
    <div
      // ref={cardRef}
      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 mb-20 transition-all duration-700 ease-out ${
        //opacity-0
        isEven ? "translate-x-10" : "-translate-x-10"
      }`}
    >
      <div
        className={`relative w-full md:w-3/5 aspect-video overflow-hidden rounded-lg border ${isEven ? "md:order-2" : ""}`}
      >
        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
          {/* Placeholder for project image */}
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className={`w-full md:w-2/5 ${isEven ? "md:text-right md:order-1" : ""}`}>
        <h4 className="text-primary font-mono text-sm mb-1">Featured Project</h4>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <div className={`bg-card rounded-lg p-6 shadow-lg mb-4 ${isEven ? "md:ml-auto" : ""}`}>
          <p className="text-foreground/80">{project.description}</p>
        </div>
        <div className={`flex flex-wrap gap-2 mb-4 ${isEven ? "md:justify-end" : ""}`}>
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className={`flex gap-4 ${isEven ? "md:justify-end" : ""}`}>
          <Button variant="ghost" size="icon" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Live Demo</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
