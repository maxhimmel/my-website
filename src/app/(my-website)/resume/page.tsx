import config from "@payload-config";
import { getPayload } from "payload";
import { Media } from "../../../../payload-types";

export const revalidate = 86400;

export default async function Resume() {
  // TODO: How do we handle error or loading?

  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "resume" });
  const resume = data.resume as Media;

  return <iframe src={resume.url!} title="Resume" className="w-full h-screen" />;
}

function ErrorFallback() {
  return (
    <div className="flex flex-col">
      <div className="alert alert-error">Unable to display PDF file.</div>
      <a href="/resume.pdf" className="link">
        Download instead.
      </a>
    </div>
  );
}
