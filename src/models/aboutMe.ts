import { GlobalConfig } from "payload";
import { isAdmin } from "./lib/utils";

export const AboutMe: GlobalConfig = {
  slug: "aboutMe",
  access: {
    update: isAdmin,
  },
  fields: [
    {
      name: "summary",
      type: "textarea",
      required: true,
    },
    {
      name: "profilePic",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "resume",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
