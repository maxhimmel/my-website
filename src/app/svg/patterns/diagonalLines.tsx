import { Pattern } from "./pattern";

export function DiagonalLinesPattern({
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
        <DiagonalLinesPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      animations={animations}
      viewBoxWidth={6}
      viewBoxHeight={6}
      shapes={
        <g>
          <polygon points="5 0 6 0 0 6 0 5"></polygon>
          <polygon points="6 5 6 6 5 6"></polygon>
        </g>
      }
    />
  );
}
