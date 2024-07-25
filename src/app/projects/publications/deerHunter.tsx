import { Entry } from "../entry";
import { videoHeight, videoWidth } from "../videoConfig";

export function DeerHunter() {
  return (
    <Entry
      date="Unity"
      title="Deer Hunter: Reloaded"
      description="Deer Hunter: Reloaded is a first-person hunting-simulation game based off of the #1 hunting franchise in the World. Deer Hunter will provide an authentic hunting experience for players as they venture to some of the top-rated hunting regions in North America, from the plains of West Texas to the rugged terrain of Alaska."
    >
      <div
        className="w-11/12
        [&_iframe]:border-primary
        [&_iframe]:border-8
        [&_iframe]:rounded-2xl
      "
      >
        <iframe
          className="w-full"
          width={videoWidth}
          height={videoHeight}
          src="https://www.youtube-nocookie.com/embed/DRWbPPBm7PE?si=qiDZlEVOPEuaxGsq"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Entry>
  );
}
