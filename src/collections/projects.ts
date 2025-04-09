import { CollectionConfig } from "payload";

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
    },
    {
      name: "referenceLink",
      type: "text",
      required: false,
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
