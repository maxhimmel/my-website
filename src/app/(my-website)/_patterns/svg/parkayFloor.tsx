import { Pattern } from "./pattern";

export function ParkayFloorPattern({
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
        <ParkayFloorPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      uuid={crypto.randomUUID()}
      className={className}
      animations={animations}
      viewBoxWidth={40}
      viewBoxHeight={40}
      shapes={
        <path d="M20,20.5 L20,18 L0,18 L0,16 L20,16 L20,14 L0,14 L0,12 L20,12 L20,10 L0,10 L0,8 L20,8 L20,6 L0,6 L0,4 L20,4 L20,2 L0,2 L0,0 L20.5,0 L22,0 L22,20 L24,20 L24,0 L26,0 L26,20 L28,20 L28,0 L30,0 L30,20 L32,20 L32,0 L34,0 L34,20 L36,20 L36,0 L38,0 L38,20 L40,20 L40,22 L20,22 L20,20.5 L20,20.5 Z M0,20 L2,20 L2,40 L0,40 L0,20 L0,20 Z M4,20 L6,20 L6,40 L4,40 L4,20 L4,20 Z M8,20 L10,20 L10,40 L8,40 L8,20 L8,20 Z M12,20 L14,20 L14,40 L12,40 L12,20 L12,20 Z M16,20 L18,20 L18,40 L16,40 L16,20 L16,20 Z M20,24 L40,24 L40,26 L20,26 L20,24 L20,24 Z M20,28 L40,28 L40,30 L20,30 L20,28 L20,28 Z M20,32 L40,32 L40,34 L20,34 L20,32 L20,32 Z M20,36 L40,36 L40,38 L20,38 L20,36 L20,36 Z"></path>
      }
    />
  );
}
