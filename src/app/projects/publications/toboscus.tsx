import { VideoContainer } from "@/app/projects/videoEntry";
import { Entry } from "../entry";
import { videoHeight, videoWidth } from "../videoConfig";

export function Tobuscus() {
  return (
    <Entry
      date="Unity"
      title="Toboscus Adventures: Wizards"
      description="When the Wizard of Darkness awakened, it was up to one man to defeat him. When that man was accidentally killed by one idiot, Tobuscus (or “person of extremely low intelligence” – gently put), the responsibility of becoming an AWESOME WIZARD fell onto him… by default!"
    >
      <VideoContainer className="w-11/12">
        <VideoContainer.Video
          src="https://www.youtube-nocookie.com/embed/ddeiYOCGUlY?si=FbmprN1nAugbwsct"
          className="w-full"
          videoWidth={videoWidth}
          videoHeight={videoHeight}
        />
      </VideoContainer>
    </Entry>
  );
}
