import { CollectionConfig } from "payload";

export const Skill: CollectionConfig = {
  slug: "skill",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};
