import { ScrollVerticalAnimation } from "../patterns/svg/animations";
import { TicTacToePattern } from "../patterns/svg/ticTacToe";

const ANIMATION = {
  direction: "up" as const,
  dur: "6s",
  repeatCount: "indefinite",
};

export function HeroBanner() {
  return (
    <div className="w-full h-56">
      <TicTacToePattern
        className="bg-base-300 text-primary size-full"
        animations={[
          <ScrollVerticalAnimation
            key={1}
            direction={ANIMATION.direction}
            dur={ANIMATION.dur}
            repeatCount={ANIMATION.repeatCount}
          />,
        ]}
      />
    </div>
  );
}
