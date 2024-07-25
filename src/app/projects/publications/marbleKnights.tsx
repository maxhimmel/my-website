"use client";

import { CarouselButton } from "@/app/components/carouselButton";
import { Entry } from "../entry";
import { videoHeight, videoWidth } from "../videoConfig";
import { useRef } from "react";

export function MarbleKnights() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <Entry
      date="Unity"
      title="Marbe Knights"
      description="Sword-swinging fantasy meets marble mania! Roll into battle with Orbin, Marabelle, and the other Knights of the Round to defend King Rolland and the Kingdom of Roundingham from the evil Lord Terroball! Armed with your blade, your wits, and a variety of orb-based powers, you’ll smite foes, solve puzzles, and embark on an epic fantasy journey with up to three other players!"
    >
      <div
        ref={carouselRef}
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
          <CarouselButton
            target={3}
            className="btn btn-primary"
            carousel={carouselRef}
          >
            ❮
          </CarouselButton>
          <CarouselButton
            target={2}
            className="btn btn-primary"
            carousel={carouselRef}
          >
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
          <CarouselButton
            target={1}
            className="btn btn-primary"
            carousel={carouselRef}
          >
            ❮
          </CarouselButton>
          <CarouselButton
            target={3}
            className="btn btn-primary"
            carousel={carouselRef}
          >
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
          <CarouselButton
            target={2}
            className="btn btn-primary"
            carousel={carouselRef}
          >
            ❮
          </CarouselButton>
          <CarouselButton
            target={1}
            className="btn btn-primary"
            carousel={carouselRef}
          >
            ❯
          </CarouselButton>
        </div>
      </div>
    </Entry>
  );
}
