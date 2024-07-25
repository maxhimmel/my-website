import { Pattern } from "./pattern";

export function DiagonalStripesPattern({
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
        <DiagonalStripesPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      animations={animations}
      viewBoxWidth={40}
      viewBoxHeight={40}
      shapes={
        <g>
          <polygon points="0 40 40 0 20 0 0 20"></polygon>
          <polygon points="40 40 40 20 20 40"></polygon>
        </g>
      }
    />
  );
}
