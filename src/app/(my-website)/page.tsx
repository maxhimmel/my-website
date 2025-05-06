import { AboutMe } from "./about/about";
import { Hero } from "./hero/hero";
import { HeroBanner } from "./heroBanner/heroBanner";
import { Portfolio } from "./portfolio/portfolio";
import { Skills } from "./skills/skills";

export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
    </>
  );
}
