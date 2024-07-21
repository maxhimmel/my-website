import { Pattern } from "./pattern";

export function TinyCheckersPattern({
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
        <TinyCheckersPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      viewBoxWidth={8}
      viewBoxHeight={8}
      shapes={[<path d="M0 0h4v4H0V0zm4 4h4v4H4V4z" />]}
    />
  );
}
