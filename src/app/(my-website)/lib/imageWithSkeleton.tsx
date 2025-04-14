"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export function ImageWithSkeleton({ src, alt, width, height, priority, className }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <div className="absolute inset-0 bg-neutral animate-pulse dark:skeleton !rounded-none" />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
