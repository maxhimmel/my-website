import { Pattern } from "./pattern";

export function PixelDotsPattern({
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
        <PixelDotsPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      uuid={crypto.randomUUID()}
      className={className}
      animations={animations}
      viewBoxWidth={16}
      viewBoxHeight={16}
      shapes={
        <path
          fillRule="evenodd"
          d="M0,4.16333634e-16 L16,4.16333634e-16 L16,2 L10,2 L10,8 L16,8 L16,16 L8,16 L8,10 L2,10 L2,16 L0,16 L0,4.16333634e-16 Z M4,4 L6,4 L6,6 L4,6 L4,4 Z M12,12 L14,12 L14,14 L12,14 L12,12 Z M4,12 L6,12 L6,14 L4,14 L4,12 Z M12,4 L14,4 L14,6 L12,6 L12,4 Z"
        ></path>
      }
    />
  );
}
