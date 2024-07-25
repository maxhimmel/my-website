import { ScrollVerticalAnimation } from "../svg/patterns/animations";
import { HideoutPattern } from "../svg/patterns/hideout";
import { ParkayFloorPattern } from "../svg/patterns/parkayFloor";

export function BackgroundLayout() {
  return (
    <div id="bg-layout">
      <HideoutPattern
        className="bg-base-100 text-accent shadow-2xl w-60 h-screen fixed left-0 z-10"
        animations={[
          <ScrollVerticalAnimation
            key={1}
            dur="2s"
            repeatCount="indefinite"
            direction="down"
          />,
        ]}
      />
      <ParkayFloorPattern className="bg-base-100 text-base-200 text-opacity-65 fixed h-screen w-screen" />
      <HideoutPattern
        className="xl:block hidden bg-base-100 text-accent shadow-2xl w-60 h-screen fixed right-0 z-10"
        animations={[
          <ScrollVerticalAnimation
            key={1}
            dur="2s"
            repeatCount="indefinite"
            direction="up"
          />,
        ]}
      />
    </div>
  );
}
