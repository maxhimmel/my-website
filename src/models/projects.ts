import { CollectionConfig } from "payload";
import { isAdmin, validateURL } from "./lib/utils";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    create: isAdmin,
    delete: isAdmin,
    unlock: isAdmin,
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
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "sourceLink",
      type: "text",
      required: false,
      validate: validateURL,
    },
    {
      name: "referenceLink",
      type: "text",
      required: true,
      validate: validateURL,
    },
    {
      name: "img",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    {
      name: "techStack",
      type: "array",
      required: true,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
