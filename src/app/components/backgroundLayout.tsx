import { ScrollVerticalAnimation } from "../svg/patterns/animations";
import { HideoutPattern } from "../svg/patterns/hideout";
import { ParkayFloorPattern } from "../svg/patterns/parkayFloor";
import { NavMenu } from "./navMenu";

export function BackgroundLayout() {
  return (
    <div id="bg-layout">
      <div className="shadow-2xl w-60 fixed top-0 bottom-0 left-0 z-10">
        <HideoutPattern
          className="absolute bg-base-100 text-accent size-full"
          animations={[
            <ScrollVerticalAnimation
              key={1}
              dur="2s"
              repeatCount="indefinite"
              direction="down"
            />,
          ]}
        />
        <div className="relative pt-navbar-h m-4">
          <NavMenu />
        </div>
      </div>

      <ParkayFloorPattern className="bg-base-100 text-base-200 text-opacity-65 size-full fixed inset-0" />

      <div className="xl:block hidden shadow-2xl w-60 fixed top-0 bottom-0 right-0 z-10">
        <HideoutPattern
          className="absolute bg-base-100 text-accent size-full"
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
    </div>
  );
}
