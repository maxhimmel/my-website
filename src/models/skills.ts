import { CollectionConfig } from "payload";

export const Skills: CollectionConfig = {
  slug: "skills",
  // orderable: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "reactIcon",
      type: "text",
      required: true,
    },
  ],
};
