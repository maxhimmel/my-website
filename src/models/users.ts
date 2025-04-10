import { CollectionConfig } from "payload";
import { isAdmin, isAdminOrSelf } from "./lib/utils";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    unlock: isAdmin,
    create: isAdmin,
    delete: isAdminOrSelf,
    update: isAdminOrSelf,
  },
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Witness", value: "witness" },
      ],
      required: true,
      defaultValue: "witness",
      access: {
        update: isAdmin,
      },
    },
  ],
};
