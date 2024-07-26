export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main id="page-container">
      <div className="flex flex-row relative">
        <div className="w-60 h-screen" />
        <div className="pt-16 flex flex-1">{children}</div>
        <div className="hidden xl:block w-60 h-screen" />
      </div>
    </main>
  );
}
