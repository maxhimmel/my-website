import { AboutMe } from "./about/about";
import { ScrollVerticalAnimation } from "./patterns/svg/animations";
import { TicTacToePattern } from "./patterns/svg/ticTacToe";
import { Portfolio } from "./portfolio/portfolio";
import { SkillsBanner } from "./skills/skills";

export default function Home() {
  return (
    <>
      <div className="w-full h-72">
        <TicTacToePattern
          className="bg-base-300 text-primary size-full"
          animations={[<ScrollVerticalAnimation key={1} direction="up" dur="3s" repeatCount="indefinite" />]}
        />
      </div>
      <SkillsBanner />
      <Portfolio />
      <AboutMe />
    </>
  );
}
