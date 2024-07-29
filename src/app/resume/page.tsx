export default function Resume() {
  // TODO: How do we handle error or loading?
  return (
    <iframe src="/resume.pdf" title="Resume" className="w-full h-screen" />
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
