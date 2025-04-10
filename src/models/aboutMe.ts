import { GlobalConfig } from "payload";

export const AboutMe: GlobalConfig = {
  slug: "aboutMe",
  access: {
    read: (args) => true,
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
