import { GlobalConfig } from "payload";
import { isAdmin, validateURL } from "./lib/utils";

export const Contact: GlobalConfig = {
  slug: "contact",
  access: {
    update: isAdmin,
  },
  fields: [
    {
      name: "callToAction",
      type: "textarea",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "linkedin",
      type: "text",
      required: true,
      validate: validateURL,
    },
    {
      name: "github",
      type: "text",
      required: true,
      validate: validateURL,
    },
  ],
};
