"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useScrollIntersect } from "../lib/scrollIntersect";
import { Project } from "./portfolioService";

interface ProjectCardProps {
  project: Project;
  isEven: boolean;
}

export function ProjectCard({ project, isEven }: ProjectCardProps) {
  const { ref: cardRef } = useScrollIntersect<HTMLDivElement>({
    threshold: 0.85,
    onIntersect: (element) => {
      element.classList.add("opacity-100");
      element.classList.remove("opacity-0");

      element.classList.add(isEven ? "translate-x-0" : "-translate-x-0");
      element.classList.remove(isEven ? "translate-x-10" : "-translate-x-10");
    },
  });

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 mb-20 opacity-0 transition-all duration-700 ease-out ${
        isEven ? "translate-x-10" : "-translate-x-10"
      }`}
    >
      <div
        className={`relative w-full md:w-3/5 aspect-video overflow-hidden rounded-lg border ${isEven ? "md:order-2" : ""}`}
      >
        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
          <Image
            src={project.img.url!}
            alt={project.name}
            className="w-full h-full object-cover hover:scale-[103%] transition-transform duration-1000"
            width={project.img.width!}
            height={project.img.height!}
          />
        </div>
      </div>

      <div className={`w-full md:w-2/5 ${isEven ? "md:text-right md:order-1" : ""}`}>
        <h4 className="text-primary font-mono text-sm mb-1">Featured Project</h4>
        <h3 className="text-2xl font-bold mb-1.5">{project.name}</h3>
        <div className={`flex gap-4 mb-2 ${isEven ? "md:justify-end" : ""}`}>
          <SourceButton href={project.sourceLink} />
          <Button variant="secondary" size="icon" asChild>
            <a href={project.referenceLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Live Demo</span>
            </a>
          </Button>
        </div>
        <div className={`bg-card rounded-lg p-6 shadow-lg mb-4 ${isEven ? "md:ml-auto" : ""}`}>
          <p className="text-foreground/80">{project.description}</p>
        </div>
        <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
          {project.techStack.map((tag, index) => (
            <span key={tag.id} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SourceButton({ href }: { href?: string | null }) {
  return !!href ? (
    <Button variant="secondary" size="icon" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </a>
    </Button>
  ) : null;
}
