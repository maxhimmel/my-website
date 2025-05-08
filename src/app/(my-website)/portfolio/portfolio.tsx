import { Section } from "../lib/section/section";
import { getProjects } from "./portfolioService";
import { ProjectCard } from "./projectCard";

export async function Portfolio() {
  const projects = await getProjects();

  return (
    <Section.Root id="projects">
      <Section.Header order="03" title="Projects" />

      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} isEven={index % 2 !== 0} />
        ))}
      </div>
    </Section.Root>
  );
}
