import { CollectionConfig } from "payload";
import { isAdmin } from "./lib/utils";

export const Skills: CollectionConfig = {
  slug: "skills",
  access: {
    unlock: isAdmin,
    create: isAdmin,
    delete: isAdmin,
    update: isAdmin,
  },
  orderable: true,
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
