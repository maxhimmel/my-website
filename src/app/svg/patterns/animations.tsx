"use client";

import { createContext, useContext } from "react";

/* --- */

const patternSizeContext = createContext({
  width: 0,
  height: 0,
});
export const PatternSizeProvider = patternSizeContext.Provider;
export const usePatternSize = () => useContext(patternSizeContext);

/* --- */

export function ScrollVerticalAnimation({
  dur,
  direction,
  repeatCount,
}: {
  dur: string;
  direction: "up" | "down";
  repeatCount: string;
}) {
  const { height } = usePatternSize();
  const sign = direction === "up" ? "-" : "";

  return (
    <animate
      attributeName="y"
      values={`0px; ${sign}${height}px`}
      dur={dur}
      repeatCount={repeatCount}
    />
  );
}

export function ScrollHorizontalAnimation({
  dur,
  direction,
  repeatCount,
}: {
  dur: string;
  direction: "left" | "right";
  repeatCount: string;
}) {
  const { width } = usePatternSize();
  const sign = direction === "right" ? "-" : "";

  return (
    <animate
      attributeName="x"
      values={`${sign}${width}px; 0px`}
      dur={dur}
      repeatCount={repeatCount}
    />
  );
}
