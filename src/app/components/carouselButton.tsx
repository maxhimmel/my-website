"use client";

import React, { useRef } from "react";

export function CarouselButton({
  target,
  children,
  className,
}: {
  target: number;
  children?: React.ReactNode;
  className?: string;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="h-full absolute even:left-0 odd:right-0 grid 
        [&_.btn]:even:rounded-r-full
        [&_.btn]:odd:rounded-l-full
    "
    >
      <button
        ref={buttonRef}
        className={`${className} btn-square rounded-none self-center opacity-0`}
        onClick={() => {
          if (!buttonRef.current) return;

          const carousel = buttonRef.current.ownerDocument.querySelector(
            ".carousel"
          ) as Element;

          const zeroIndex = target - 1;
          const width = carousel.clientWidth;
          const targetXPixel = width * zeroIndex;

          carousel.scrollTo(targetXPixel, 0);
        }}
      >
        {children}
      </button>
    </div>
  );
}
