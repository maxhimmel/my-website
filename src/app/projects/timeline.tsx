import React from "react";
import { MarbleKnights } from "./publications/marbleKnights";
import { Tobuscus } from "./publications/toboscus";
import { DeerHunter } from "./publications/deerHunter";

export function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon max-xl:timeline-compact timeline-vertical">
      <MarbleKnights />
      <Tobuscus />
      <DeerHunter />
    </ul>
  );
}
