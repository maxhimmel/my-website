import { PageContainer } from "./components/pageContainer";

export default function PageNotFound() {
  return (
    <PageContainer>
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-4xl font-semibold">Page Not Found</h2>
      </div>
    </PageContainer>
  );
}
