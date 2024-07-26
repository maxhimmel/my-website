export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main id="page-container">
      <div
        className={`absolute overflow-y-auto xl:right-60 left-60 right-0 top-16 bottom-0`}
      >
        {children}
      </div>
    </main>
  );
}
