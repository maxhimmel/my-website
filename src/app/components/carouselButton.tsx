"use client";

import React from "react";

export function CarouselButton({
  target,
  children,
  className,
  carousel,
}: {
  target: number;
  children?: React.ReactNode;
  className?: string;
  carousel: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      className="h-full absolute even:left-0 odd:right-0 grid 
        even:[&_.btn]:rounded-r-full
        odd:[&_.btn]:rounded-l-full
    "
    >
      <button
        className={`${className} btn-square rounded-none self-center opacity-0`}
        onClick={() => {
          if (!carousel.current) return;

          const zeroIndex = target - 1;
          const width = carousel.current.clientWidth;
          const targetXPixel = width * zeroIndex;

          carousel.current.scrollTo(targetXPixel, 0);
        }}
      >
        {children}
      </button>
    </div>
  );
}
