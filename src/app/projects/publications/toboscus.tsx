import { Entry } from "../entry";
import { videoHeight, videoWidth } from "../videoConfig";

export function Tobuscus() {
  return (
    <Entry
      date="Unity"
      title="Toboscus Adventures: Wizards"
      description="When the Wizard of Darkness awakened, it was up to one man to defeat him. When that man was accidentally killed by one idiot, Tobuscus (or “person of extremely low intelligence” – gently put), the responsibility of becoming an AWESOME WIZARD fell onto him… by default!"
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
          src="https://www.youtube-nocookie.com/embed/ddeiYOCGUlY?si=FbmprN1nAugbwsct"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Entry>
  );
}
