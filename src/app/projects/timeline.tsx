import React from "react";
import { MarbleKnights } from "./publications/marbleKnights";
import { Tobuscus } from "./publications/toboscus";
import { DeerHunter } from "./publications/deerHunter";

export function Timeline() {
  const entries = [<MarbleKnights />, <Tobuscus />, <DeerHunter />];

  return (
    <ul className="timeline timeline-snap-icon max-xl:timeline-compact timeline-vertical">
      {entries.map((entry, i) => (
        <React.Fragment key={i}>{entry}</React.Fragment>
      ))}
    </ul>
  );
}
