import { Pattern } from "./pattern";

export function FourPointStarPattern({
  className,
  isBackground,
  children,
}: {
  className?: string;
  isBackground?: boolean;
  children?: React.ReactNode;
}) {
  if (!isBackground && children) {
    console.warn("WARN: Children are only rendered for background patterns.");
  }

  return isBackground ? (
    <div className="size-full relative">
      <div className="size-full absolute">
        <FourPointStarPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      viewBoxWidth={24}
      viewBoxHeight={24}
      shapes={[<polygon points="8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4" />]}
    />
  );
}
