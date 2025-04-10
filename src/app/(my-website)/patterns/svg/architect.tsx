import { Pattern } from "./pattern";

export function ArchitectPattern({
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
        <ArchitectPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      animations={animations}
      viewBoxWidth={100}
      viewBoxHeight={199}
      shapes={
        <path d="M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z" />
      }
    />
  );
}
