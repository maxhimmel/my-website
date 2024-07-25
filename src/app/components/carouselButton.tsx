"use client";

import React, { useEffect } from "react";

export function CarouselButton({
  target,
  children,
  className,
}: {
  target: number;
  children?: React.ReactNode;
  className?: string;
}) {
  let parent: Element | null = null;
  useEffect(() => {
    parent = document.querySelector(".carousel");
  }, []);

  return (
    <div
      className="h-full absolute even:left-0 odd:right-0 grid 
        [&_.btn]:even:rounded-r-full
        [&_.btn]:odd:rounded-l-full
    "
    >
      <button
        className={`${className} btn-square rounded-none self-center opacity-0`}
        onClick={() => {
          if (!parent) return;

          const zeroIndex = target - 1;
          const width = parent.clientWidth;
          const targetXPixel = width * zeroIndex;

          parent?.scrollTo(targetXPixel, 0);
        }}
      >
        {children}
      </button>
    </div>
  );
}
