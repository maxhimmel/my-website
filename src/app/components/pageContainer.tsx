export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main id="page-container">
      <div
        className={`absolute xl:left-60 xl:right-60 left-60 overflow-y-auto top-16 bottom-0`}
      >
        {children}
      </div>
    </main>
  );
}
