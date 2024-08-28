import { VideoContainer } from "@/app/projects/videoEntry";
import { Entry } from "../entry";
import { videoHeight, videoWidth } from "../videoConfig";

export function DeerHunter() {
  return (
    <Entry
      date="Unity"
      title="Deer Hunter: Reloaded"
      description="Deer Hunter: Reloaded is a first-person hunting-simulation game based off of the #1 hunting franchise in the World. Deer Hunter will provide an authentic hunting experience for players as they venture to some of the top-rated hunting regions in North America, from the plains of West Texas to the rugged terrain of Alaska."
    >
      <VideoContainer className="w-11/12">
        <VideoContainer.Video
          src="https://www.youtube-nocookie.com/embed/DRWbPPBm7PE?si=qiDZlEVOPEuaxGsq"
          videoWidth={videoWidth}
          videoHeight={videoHeight}
          className="w-full"
        />
      </VideoContainer>
    </Entry>
  );
}
