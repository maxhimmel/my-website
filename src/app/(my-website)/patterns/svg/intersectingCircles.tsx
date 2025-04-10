import { Pattern } from "./pattern";

export function IntersectingCirclesPattern({
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
        <IntersectingCirclesPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      animations={animations}
      viewBoxWidth={30}
      viewBoxHeight={30}
      shapes={
        <path d="M15,0 C6.71572875,0 0,6.71572875 0,15 C8.28427125,15 15,8.28427125 15,0 Z M0,15 C0,23.2842712 6.71572875,30 15,30 C15,21.7157288 8.28427125,15 0,15 Z M30,15 C30,6.71572875 23.2842712,0 15,0 C15,8.28427125 21.7157288,15 30,15 Z M30,15 C30,23.2842712 23.2842712,30 15,30 C15,21.7157288 21.7157288,15 30,15 Z" />
      }
    />
  );
}
