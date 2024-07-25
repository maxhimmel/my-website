import React from "react";
import { entries } from "./entries";

export function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon max-xl:timeline-compact timeline-vertical">
      {entries.map((entry, i) => (
        <React.Fragment key={i}>{entry}</React.Fragment>
      ))}
    </ul>
  );
}
