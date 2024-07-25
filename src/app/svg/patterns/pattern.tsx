"use client";

import React from "react";
import { PatternSizeProvider } from "./animations";
import { randomBytes } from "crypto";

export function Pattern({
  className,
  uuid,
  shapes,
  viewBoxWidth,
  viewBoxHeight,
  animations,
}: {
  className?: string;
  uuid?: string;
  shapes: React.ReactNode;
  viewBoxWidth: number;
  viewBoxHeight: number;
  animations?: React.ReactNode[];
}) {
  if (!uuid) {
    uuid = `${Pattern.name}_${randomBytes(16).toString("hex")}`;
  }

  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={uuid}
          patternUnits="userSpaceOnUse"
          width={viewBoxWidth}
          height={viewBoxHeight}
        >
          {shapes}

          {animations && (
            <PatternSizeProvider
              value={{ width: viewBoxWidth, height: viewBoxHeight }}
            >
              {animations}
            </PatternSizeProvider>
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${uuid})`}></rect>
    </svg>
  );
}
