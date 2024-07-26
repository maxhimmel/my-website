import { PageContainer } from "./components/pageContainer";
import { NavMenu } from "./components/navMenu";

export default function Home() {
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
