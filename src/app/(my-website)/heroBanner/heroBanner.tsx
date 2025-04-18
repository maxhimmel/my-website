import { ScrollHorizontalAnimation, ScrollVerticalAnimation } from "../_patterns/svg/animations";
import { TicTacToePattern } from "../_patterns/svg/ticTacToe";
import { TopographyPattern } from "../_patterns/svg/topography";

const ANIMATION = {
  dur: "60s",
  repeatCount: "indefinite",
};

export function HeroBanner() {
  return (
    <div className="w-full h-56 border-b-2 border-primary shadow-xl dark:shadow-neutral">
      <TopographyPattern
        className="bg-base-300 text-primary size-full"
        animations={[
          <ScrollVerticalAnimation
            key={1}
            direction={"up"}
            dur={ANIMATION.dur}
            repeatCount={ANIMATION.repeatCount}
          />,
          <ScrollHorizontalAnimation
            key={2}
            direction={"left"}
            dur={ANIMATION.dur}
            repeatCount={ANIMATION.repeatCount}
          />,
        ]}
      />
    </div>
  );
}
