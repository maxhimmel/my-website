import { Pattern } from "./pattern";

export function FlippedDiamondsPattern({
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
        <FlippedDiamondsPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      animations={animations}
      viewBoxWidth={16}
      viewBoxHeight={20}
      shapes={[
        <polygon points="8 -4.4408921e-16 8 20 0 10"></polygon>,
        <polygon points="16 0 16 10 8 0"></polygon>,
        <polygon points="16 10 16 20 8 20"></polygon>,
      ]}
    />
  );
}
