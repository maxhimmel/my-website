import { PageContainer } from "../components/pageContainer";
import { Timeline } from "./timeline";

export default function Projects() {
  return (
    <PageContainer>
      <div className="hero">
        <div className="hero-content flex flex-col">
          <Timeline />
        </div>
      </div>
    </PageContainer>
  );
}
