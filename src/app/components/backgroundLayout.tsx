import { ParkayFloorPattern } from "../svg/patterns/parkayFloor";

export function BackgroundLayout() {
  return (
    <div id="bg-layout">
      <ParkayFloorPattern className="bg-base-100 text-base-200 text-opacity-65 size-full fixed inset-0" />
    </div>
  );
}
