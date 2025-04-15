import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

export const getSkills = cache(async () => {
  const payload = await getPayload({ config });
  const { docs: skills } = await payload.find({
    collection: "skills",
    limit: Number.MAX_SAFE_INTEGER,
  });

  return skills;
});
