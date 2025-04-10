import config from "@payload-config";
import { getPayload } from "payload";
import { Media } from "../../../../payload-types";

export async function getAboutMe() {
  const payload = await getPayload({ config });
  const aboutMe = await payload.findGlobal({ slug: "aboutMe" });

  return {
    ...aboutMe,
    profilePic: aboutMe.profilePic as Media,
    resume: aboutMe.resume as Media,
  };
}
