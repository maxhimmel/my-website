import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import sharp from "sharp";
import { AboutMe } from "./src/models/aboutMe";
import { Contact } from "./src/models/contact";
import { Hero } from "./src/models/hero";
import { Media } from "./src/models/media";
import { Projects } from "./src/models/projects";
import { Resume } from "./src/models/resume";
import { Skills } from "./src/models/skills";
import { Users } from "./src/models/users";
import { env } from "./src/env";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  admin: {
    user: Users.slug,
  },

  // Define and configure your collections in this array
  collections: [Skills, Projects, Media, Users],
  globals: [Hero, AboutMe, Contact, Resume],

  plugins: [
    vercelBlobStorage({
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: env.BLOB_READ_WRITE_TOKEN,
    }),
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: env.PAYLOAD_SECRET,
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: env.DATABASE_URI,
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
