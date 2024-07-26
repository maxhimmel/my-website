import { PageContainer } from "../components/pageContainer";

export default function Resume() {
  return (
    <PageContainer>
      {/* TODO: How do we handle error or loading? */}
      <iframe src="/resume.pdf" title="Resume" className="size-full" />
    </PageContainer>
  );
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
