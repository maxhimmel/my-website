import { Pattern } from "./pattern";

export function FloorTilePattern({
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
        <FloorTilePattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      uuid={crypto.randomUUID()}
      className={className}
      animations={animations}
      viewBoxWidth={30}
      viewBoxHeight={30}
      shapes={<path d="M0,10 L10,10 L10,20 L0,20 L0,10 Z M10,0 L20,0 L20,10 L10,10 L10,0 Z"></path>}
    />
  );
}
