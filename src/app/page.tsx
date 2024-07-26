import { PageContainer } from "./components/pageContainer";
import { NavMenu } from "./components/navMenu";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/projects");

  return (
    <PageContainer>
      <div className="hero">
        <div className="hero-content">
          <NavMenu />
        </div>
      </div>
    </PageContainer>
  );
}
