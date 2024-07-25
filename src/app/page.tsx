import Link from "next/link";
import { PageContainer } from "./components/pageContainer";

export default function Home() {
  return (
    <PageContainer>
      <div className="hero">
        <div className="hero-content">
          <div className="menu menu-lg menu-vertical bg-base-200 rounded-box w-56">
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
