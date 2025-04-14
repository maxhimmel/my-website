import { RiExternalLinkFill, RiLockFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { AnchorScrollOffset } from "../lib/anchorScrollOffset";
import { ImageWithSkeleton } from "../lib/imageWithSkeleton";
import { getProjects, type Project } from "./portfolioService";

export async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col p-6 relative">
      <AnchorScrollOffset id="portfolio" />
      {/* <h2 className="text-4xl font-black">Work</h2>
      <div className="divider"></div> */}
      <div className="grid grid-cols-[repeat(auto-fill,400px)] gap-4 justify-center justify-items-center">
        {projects.map((p) => (
          <Work key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

function Work({ project }: { project: Project }) {
  const prettyTechStack = project.techStack.map((t) => t.name).join(" · ");

  return (
    <article className="flex flex-col bg-base-300 border-4 border-neutral transition-all hover:shadow-xl hover:-translate-y-2 active:scale-95">
      <figure className="relative h-48 w-full overflow-clip flex justify-center items-center">
        <ImageWithSkeleton
          src={project.img.url as string}
          alt={project.name}
          width={project.img.width as number}
          height={project.img.height as number}
          priority
          className="object-contain"
        />
      </figure>
      <div className="card-body relative border-t-4 border-neutral">
        <div className="flex justify-between">
          <h2 className="card-title">{project.name}</h2>
          <div className="tooltip absolute bottom-0 right-0" data-tip={prettyTechStack}>
            <div className="flex items-center gap-1 bg-neutral rounded-xl rounded-e-none p-2 pb-3">
              {project.techStack.map((tech) => (
                <img
                  key={tech.id}
                  alt={tech.name}
                  className="size-5"
                  src={`https://cdn.simpleicons.org/${tech.name}/white`}
                />
              ))}
            </div>
          </div>
        </div>
        <i className="mb-4">{project.description}</i>
        <div className="card-actions justify-start mt-auto">
          <a href={project.referenceLink} className="btn btn-accent" target="_blank">
            Launch <RiExternalLinkFill className="size-5/12" />
          </a>
          <SourceButton sourceLink={project.sourceLink} />
        </div>
      </div>
    </article>
  );
}

function SourceButton({ sourceLink }: { sourceLink?: string | null }) {
  return sourceLink ? (
    <a href={sourceLink} className="btn btn-secondary" target="_blank">
      Source <SiGithub className="size-5/12" />
    </a>
  ) : (
    <a className="btn btn-disabled">
      Source <RiLockFill className="size-5/12" />
    </a>
  );
}
