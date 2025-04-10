import { CollectionConfig } from "payload";
import { isAdmin, isAdminOrSelf } from "./lib/utils";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: (args) => true,
    unlock: isAdmin,
    create: isAdmin,
    delete: isAdmin,
    update: isAdmin,
  },
  upload: {
    staticDir: "media",
    // imageSizes: [
    //   {
    //     name: "thumbnail",
    //     width: 400,
    //     height: 300,
    //     position: "centre",
    //   },
    //   {
    //     name: "card",
    //     width: 768,
    //     height: 1024,
    //     position: "centre",
    //   },
    //   {
    //     name: "tablet",
    //     width: 1024,
    //     // By specifying `undefined` or leaving a height undefined,
    //     // the image will be sized to a certain width,
    //     // but it will retain its original aspect ratio
    //     // and calculate a height automatically.
    //     height: undefined,
    //     position: "centre",
    //   },
    // ],
    // adminThumbnail: "thumbnail",
    mimeTypes: ["image/*", "application/pdf"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
