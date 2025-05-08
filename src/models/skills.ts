import { GlobalConfig } from "payload";
import { isAdmin } from "./lib/utils";

export const Skills: GlobalConfig = {
  slug: "skills",
  access: {
    update: isAdmin,
  },
  fields: [
    {
      name: "skills",
      type: "array",
      required: true,
      fields: [
        {
          name: "category",
          type: "text",
          required: true,
        },
        {
          name: "entries",
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
    },
  ],
};
