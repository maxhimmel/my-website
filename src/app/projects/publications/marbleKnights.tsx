"use client";

import { VideoContainer } from "@/app/projects/videoEntry";
import { useRef } from "react";
import { Entry } from "../entry";

export function MarbleKnights() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <Entry
      date="Unity"
      title="Marbe Knights"
      description="Sword-swinging fantasy meets marble mania! Roll into battle with Orbin, Marabelle, and the other Knights of the Round to defend King Rolland and the Kingdom of Roundingham from the evil Lord Terroball! Armed with your blade, your wits, and a variety of orb-based powers, you’ll smite foes, solve puzzles, and embark on an epic fantasy journey with up to three other players!"
    >
      <VideoContainer containerRef={carouselRef} className="carousel">
        <VideoContainer.CarouselItem
          id="mk-1"
          lhsTarget={3}
          rhsTarget={2}
          carouselRef={carouselRef}
        >
          <VideoContainer.Video src="https://www.youtube-nocookie.com/embed/Ztq1wiz-jzk?si=tbGL--gEaWbsB_Z5" />
        </VideoContainer.CarouselItem>

        <VideoContainer.CarouselItem
          id="mk-2"
          lhsTarget={1}
          rhsTarget={3}
          carouselRef={carouselRef}
        >
          <VideoContainer.Video src="https://www.youtube-nocookie.com/embed/GjuriQkEYO0?si=jXAPtiK6ei4BhXIe" />
        </VideoContainer.CarouselItem>

        <VideoContainer.CarouselItem
          id="mk-3"
          lhsTarget={2}
          rhsTarget={1}
          carouselRef={carouselRef}
        >
          <VideoContainer.Video src="https://www.youtube-nocookie.com/embed/qxmljbh6pqQ?si=17kGQ9HUjNHz-aHe" />
        </VideoContainer.CarouselItem>
      </VideoContainer>
    </Entry>
  );
}
