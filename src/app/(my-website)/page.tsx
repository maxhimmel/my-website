import { AboutMe } from "./about/about";
import { HeroBanner } from "./heroBanner/heroBanner";
import { Portfolio } from "./portfolio/portfolio";
import { SkillsBanner } from "./skills/skills";

export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <AboutMe />
      <SkillsBanner />
      <HeroBanner />
      <Portfolio />
    </>
  );
}
