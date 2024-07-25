import { Entry } from "./entry";
import { CarouselButton } from "../components/carouselButton";

const videoWidth = 560;
const videoHeight = 315;

export const entries = [
  <Entry
    date="Unity"
    title="Marbe Knights"
    description="Sword-swinging fantasy meets marble mania! Roll into battle with Orbin, Marabelle, and the other Knights of the Round to defend King Rolland and the Kingdom of Roundingham from the evil Lord Terroball! Armed with your blade, your wits, and a variety of orb-based powers, you’ll smite foes, solve puzzles, and embark on an epic fantasy journey with up to three other players!"
  >
    <div
      className={`carousel w-11/12
          [&_iframe]:border-primary
          [&_iframe]:border-8
          [&_iframe]:rounded-2xl`}
    >
      <div
        id="mk-1"
        className={`carousel-item w-full relative [&_.btn]:hover:opacity-100`}
      >
        <iframe
          className="w-full"
          width={videoWidth}
          height={videoHeight}
          src="https://www.youtube-nocookie.com/embed/Ztq1wiz-jzk?si=tbGL--gEaWbsB_Z5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <CarouselButton target={3} className="btn btn-primary">
          ❮
        </CarouselButton>
        <CarouselButton target={2} className="btn btn-primary">
          ❯
        </CarouselButton>
      </div>
      <div
        id="mk-2"
        className="carousel-item w-full relative [&_.btn]:hover:opacity-100"
      >
        <iframe
          className="w-full"
          width={videoWidth}
          height={videoHeight}
          src="https://www.youtube-nocookie.com/embed/GjuriQkEYO0?si=jXAPtiK6ei4BhXIe"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <CarouselButton target={1} className="btn btn-primary">
          ❮
        </CarouselButton>
        <CarouselButton target={3} className="btn btn-primary">
          ❯
        </CarouselButton>
      </div>
      <div
        id="mk-3"
        className="carousel-item w-full relative [&_.btn]:hover:opacity-100"
      >
        <iframe
          className="w-full"
          width={videoWidth}
          height={videoHeight}
          src="https://www.youtube-nocookie.com/embed/qxmljbh6pqQ?si=17kGQ9HUjNHz-aHe"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <CarouselButton target={2} className="btn btn-primary">
          ❮
        </CarouselButton>
        <CarouselButton target={1} className="btn btn-primary">
          ❯
        </CarouselButton>
      </div>
    </div>
  </Entry>,
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
  </Entry>,
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
  </Entry>,
];
