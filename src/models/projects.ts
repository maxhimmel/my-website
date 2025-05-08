import { GlobalConfig } from "payload";
import { isAdmin, validateURL } from "./lib/utils";

export const Projects: GlobalConfig = {
  slug: "projects",
  access: {
    update: isAdmin,
  },
  fields: [
    {
      name: "projects",
      type: "array",
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
    },
  ],
};
