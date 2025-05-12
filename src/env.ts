import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    PAYLOAD_SECRET: z.string(),
    DATABASE_URI: z.string().url(),
    BLOB_READ_WRITE_TOKEN: z.string(),
    CONTACT_EMAIL: z.string().email(),
    CONTACT_EMAIL_PASSWORD: z.string(),
  },

  client: {},

  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {},
});
