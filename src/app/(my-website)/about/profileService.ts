import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";
import { Media } from "../../../../payload-types";

// This method is being resused on the home page twice.
// Once, by the AboutMe component.
// Secondly, by the Footer component.
// Hence, why we're using the cache() wrapper --> https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#reusing-data-across-multiple-functions
export const getAboutMe = cache(async () => {
  const payload = await getPayload({ config });
  const aboutMe = await payload.findGlobal({ slug: "aboutMe" });

  return {
    ...aboutMe,
    profilePic: aboutMe.profilePic as Media,
    resume: aboutMe.resume as Media,
  };
});
