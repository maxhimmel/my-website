import { CollectionConfig } from "payload";
import { validateURL } from "./lib/utils";

export const Projects: CollectionConfig = {
  slug: "projects",
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
      type: "text",
      required: true,
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
