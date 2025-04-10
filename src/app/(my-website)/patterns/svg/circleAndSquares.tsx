import { Pattern } from "./pattern";

export function CircleAndSquaresPattern({
  className,
  isBackground,
  children,
  animations,
}: {
  className?: string;
  isBackground?: boolean;
  children?: React.ReactNode;
  animations?: React.ReactNode[];
}) {
  if (!isBackground && children) {
    console.warn("WARN: Children are only rendered for background patterns.");
  }

  return isBackground ? (
    <div className="size-full relative">
      <div className="size-full absolute">
        <CircleAndSquaresPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      uuid={crypto.randomUUID()}
      className={className}
      animations={animations}
      viewBoxWidth={40}
      viewBoxHeight={40}
      shapes={
        <path d="M0,0 L20,0 L20,20 L0,20 L0,0 L0,0 Z M10,17 C13.8659932,17 17,13.8659932 17,10 C17,6.13400675 13.8659932,3 10,3 C6.13400675,3 3,6.13400675 3,10 C3,13.8659932 6.13400675,17 10,17 L10,17 Z M30,17 C33.8659932,17 37,13.8659932 37,10 C37,6.13400675 33.8659932,3 30,3 C26.1340068,3 23,6.13400675 23,10 C23,13.8659932 26.1340068,17 30,17 L30,17 Z M10,37 C13.8659932,37 17,33.8659932 17,30 C17,26.1340068 13.8659932,23 10,23 C6.13400675,23 3,26.1340068 3,30 C3,33.8659932 6.13400675,37 10,37 L10,37 Z M20,20 L40,20 L40,40 L20,40 L20,20 L20,20 Z M30,37 C33.8659932,37 37,33.8659932 37,30 C37,26.1340068 33.8659932,23 30,23 C26.1340068,23 23,26.1340068 23,30 C23,33.8659932 26.1340068,37 30,37 L30,37 Z" />
      }
    />
  );
}
