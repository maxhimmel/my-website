import { Pattern } from "./pattern";

export function AztecPattern({
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
        <AztecPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      uuid={crypto.randomUUID()}
      className={className}
      animations={animations}
      viewBoxWidth={32}
      viewBoxHeight={64}
      shapes={
        <path d="M0,28 L20,28 L20,16 L16,16 L16,24 L4,24 L4,4 L32,4 L32,32 L28,32 L28,8 L8,8 L8,20 L12,20 L12,12 L24,12 L24,32 L0,32 L0,28 Z M12,36 L32,36 L32,40 L16,40 L16,64 L0,64 L0,60 L12,60 L12,36 Z M28,48 L24,48 L24,60 L32,60 L32,64 L20,64 L20,44 L32,44 L32,56 L28,56 L28,48 Z M0,36 L8,36 L8,56 L0,56 L0,52 L4,52 L4,40 L0,40 L0,36 Z" />
      }
    />
  );
}
