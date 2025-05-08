import { GlobalConfig } from "payload";
import { isAdmin } from "./lib/utils";

export const Hero: GlobalConfig = {
  slug: "hero",
  access: {
    update: isAdmin,
  },
  fields: [
    {
      name: "tagline",
      type: "richText",
      required: true,
    },
    {
      name: "summary",
      type: "richText",
      required: true,
    },
  ],
};
