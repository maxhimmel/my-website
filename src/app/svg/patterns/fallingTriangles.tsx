import { Pattern } from "./pattern";

export function FallingTrianglesPattern({
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
        <FallingTrianglesPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      viewBoxWidth={36}
      viewBoxHeight={72}
      shapes={[<path d="M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z" />]}
    />
  );
}
