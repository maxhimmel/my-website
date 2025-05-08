import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "../lib/section/section";
import { ProjectCard } from "./projectCard";

// Mock projects data
export const PROJECTS = [
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
  return (
    <Section.Root id="projects">
      <Section.Header order="03" title="Projects" />

      <div>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} isEven={index % 2 !== 0} />
        ))}
      </div>
    </Section.Root>
  );
}
