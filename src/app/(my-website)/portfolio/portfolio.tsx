import config from "@payload-config";
import Image from "next/image";
import { getPayload } from "payload";
import { RiExternalLinkFill, RiLockFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { Project } from "../../../../payload-types";
import { AnchorScrollOffset } from "../lib/anchorScrollOffset";

export async function Portfolio() {
  const payload = await getPayload({ config });
  const { docs: projects } = await payload.find({
    collection: "projects",
    limit: Number.MAX_SAFE_INTEGER,
    sort: "createdAt",
  });

  return (
    <div className="flex flex-col p-6 relative">
      <AnchorScrollOffset id="portfolio" />
      {/* <h2 className="text-4xl font-black">Work</h2>
      <div className="divider"></div> */}
      <div className="grid grid-cols-[repeat(auto-fill,400px)] gap-4 justify-center justify-items-center">
        {projects.map((p) => (
          <Work key={p.name} project={p} />
        ))}
      </div>
    </div>
  );
}

function Work({ project }: { project: Project }) {
  const prettyTechStack = project.techStack.map((t) => t.name).join(" · ");

  return (
    <div className="card bg-base-300 w-96 shadow-sm border-4 border-neutral">
      <figure className="h-[192px] bg-neutral rounded-none w-full">
        <Image
          src={project.img}
          alt={project.name}
          width={400}
          height={300}
          priority
          className="bg-center bg-cover"
        />
      </figure>
      <div className="card-body relative">
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
    </div>
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
