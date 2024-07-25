import { Pattern } from "./pattern";

export function TexturePattern({
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
        <TexturePattern className={`size-full ${className}`} />
      </div>
      {children && <div className="absolute size-full">{children}</div>}
    </div>
  ) : (
    <Pattern
      className={className}
      animations={animations}
      viewBoxWidth={4}
      viewBoxHeight={4}
      shapes={[<path d="M1 3h1v1H1V3zm2-2h1v1H3V1z"></path>]}
    />
  );
}
