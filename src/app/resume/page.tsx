export default function Resume() {
  return (
    <main className="h-screen">
      {/* TODO: Change object > data > /resume.pdf into an incorrect link to simulate an error. */}
      <object data="/resume.pdf" type="application/pdf" className="size-full">
        <ErrorFallback />
      </object>
    </main>
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
