"use client";

import { PropsWithChildren } from "react";
import { useScrollIntersect } from "../scrollIntersect";

type RootProps = PropsWithChildren & {
  id: string;
};

export function Root({ id, children }: RootProps) {
  const { ref: sectionRef } = useScrollIntersect({
    threshold: 0.85,
    onIntersect: (element) => {
      element.classList.add("opacity-100");
      element.classList.remove("opacity-0");
    },
  });

  return (
    <section
      id={id}
      ref={sectionRef}
      className="py-24 md:py-32 opacity-0 odd:bg-secondary/30 transition-opacity duration-1000 ease-in-out"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
