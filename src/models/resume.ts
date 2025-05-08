import { GlobalConfig } from "payload";
import { isAdmin } from "./lib/utils";

export const Resume: GlobalConfig = {
  slug: "resume",
  access: {
    update: isAdmin,
  },
  fields: [
    {
      name: "resume",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
