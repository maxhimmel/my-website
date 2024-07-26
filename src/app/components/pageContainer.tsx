export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main id="page-container">
      <div className="flex flex-row mt-16 relative">
        <div className="w-60 h-screen" />
        <div className={`flex-1 overflow-y-auto`}>{children}</div>
        <div className="hidden xl:block w-60 h-screen" />
      </div>
    </main>
  );
}
