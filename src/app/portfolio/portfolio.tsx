import Image from "next/image";
import { RiExternalLinkFill, RiLockFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { Project, PROJECTS } from "../data/portfolio";
import { AnchorScrollOffset } from "../lib/anchorScrollOffset";

export function Portfolio() {
  return (
    <div className="flex flex-col p-6 relative">
      <AnchorScrollOffset id="portfolio" />
      {/* <h2 className="text-4xl font-black">Work</h2> */}
      {/* <div className="divider"></div> */}
      <div className="grid grid-cols-[repeat(auto-fill,400px)] gap-4 justify-center justify-items-center">
        {PROJECTS.map((p) => (
          <Work key={p.name} project={p} />
        ))}
      </div>
    </div>
  );
}

function Work({ project }: { project: Project }) {
  return (
    <div className="card bg-base-300 w-96 shadow-sm border-4 border-neutral">
      <figure className="h-[192px] bg-neutral">
        <Image
          src={project.img}
          alt={project.name}
          width={400}
          height={300}
          priority
          className="bg-center bg-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <i className="mb-4">{project.desc}</i>
        <div className="card-actions justify-end mt-auto">
          <a href={project.referenceLink} className="btn btn-accent" target="_blank">
            Launch <RiExternalLinkFill className="size-5/12" />
          </a>
          <SourceButton sourceLink={project.sourceLink} />
        </div>
      </div>
    </div>
  );
}

function SourceButton({ sourceLink }: { sourceLink?: string }) {
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
