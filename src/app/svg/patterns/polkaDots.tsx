import { Pattern } from "./pattern";

export function PolkaDotsPattern({
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
        <PolkaDotsPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      animations={animations}
      viewBoxWidth={20}
      viewBoxHeight={20}
      shapes={[
        <circle cx="3" cy="3" r="3"></circle>,
        <circle cx="13" cy="13" r="3"></circle>,
      ]}
    />
  );
}
