import { CollectionConfig } from "payload";

export const Skills: CollectionConfig = {
  slug: "skills",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};
