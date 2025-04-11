import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";
import { Media, Project as ProjectType } from "../../../../payload-types";

export type Project = Omit<ProjectType, "img"> & { img: Media };

export const getProjects: () => Promise<Project[]> = cache(async () => {
  const payload = await getPayload({ config });
  const { docs: projects } = await payload.find({
    collection: "projects",
    limit: Number.MAX_SAFE_INTEGER,
    sort: "createdAt",
  });

  return projects.map((p) => ({
    ...p,
    img: p.img as Media,
  }));
});
