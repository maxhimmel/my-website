import { getAboutMe } from "../about/profileService";

export default async function Resume() {
  // TODO: How do we handle error or loading?

  const aboutMe = await getAboutMe();

  return <iframe src={aboutMe.resume.url as string} title="Resume" className="w-full h-screen" />;
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
