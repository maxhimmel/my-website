import { CollectionConfig } from "payload";
import { isAdmin } from "./lib/utils";

export const Skills: CollectionConfig = {
  slug: "skills",
  access: {
    create: isAdmin,
    delete: isAdmin,
    unlock: isAdmin,
    update: isAdmin,
  },
  orderable: true,
  fields: [
    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "skills",
      type: "array",
      required: true,
      fields: [
        {
          name: "name",
          type: "text",
        },
      ],
    },
  ],
};
