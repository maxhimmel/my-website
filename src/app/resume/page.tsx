import { PageContainer } from "../components/pageContainer";

export default function Resume() {
  return (
    <PageContainer>
      <iframe src="/resume.pdf" title="Resume" className="size-full" />
      {/* <object data="/resume.pdf" type="application/pdf" className="size-full">
        <ErrorFallback />
      </object> */}
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
