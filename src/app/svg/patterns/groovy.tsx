import { Pattern } from "./pattern";

export function GroovyPattern({
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
        <GroovyPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      animations={animations}
      viewBoxWidth={24}
      viewBoxHeight={40}
      shapes={[
        <path d="M0,40 C5.5228475,40 10,35.5228475 10,30 L10,20 L10,0 C4.4771525,0 0,4.4771525 0,10 L0,20 L0,40 Z M22,40 C16.4771525,40 12,35.5228475 12,30 L12,20 L12,0 C17.5228475,0 22,4.4771525 22,10 L22,20 L22,40 Z" />,
      ]}
    />
  );
}
