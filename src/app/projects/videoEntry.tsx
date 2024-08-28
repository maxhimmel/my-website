"use client";

import { CarouselButton } from "@/app/components/carouselButton";

function VideoRoot({
  className,
  children,
  containerRef,
}: {
  className?: string;
  children: React.ReactNode;
  containerRef?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      ref={containerRef}
      className={`${className}
            [&_iframe]:border-primary
            [&_iframe]:border-8
            [&_iframe]:rounded-2xl
        `}
    >
      {children}
    </div>
  );
}

function Video({
  src,
  className,
  videoWidth,
  videoHeight,
}: {
  src: string;
  className?: string;
  videoWidth: number;
  videoHeight: number;
}) {
  return (
    <iframe
      className={className}
      width={videoWidth}
      height={videoHeight}
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

function CarouselItem({
  id,
  children,
  lhsTarget,
  rhsTarget,
  carouselRef,
}: {
  id: string;
  children: React.ReactNode;
  lhsTarget: number;
  rhsTarget: number;
  carouselRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      id={id}
      className="carousel-item w-full relative [&_.btn]:hover:opacity-100"
    >
      {children}
      <CarouselButton
        target={lhsTarget}
        className="btn btn-primary"
        carousel={carouselRef}
      >
        ❮
      </CarouselButton>
      <CarouselButton
        target={rhsTarget}
        className="btn btn-primary"
        carousel={carouselRef}
      >
        ❯
      </CarouselButton>
    </div>
  );
}

/* --- */

export const VideoContainer = Object.assign(VideoRoot, {
  Video,
  CarouselItem,
});
