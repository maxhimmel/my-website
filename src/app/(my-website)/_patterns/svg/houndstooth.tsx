import { Pattern } from "./pattern";

export function HoundstoothPattern({
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
        <HoundstoothPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      uuid={crypto.randomUUID()}
      className={className}
      animations={animations}
      viewBoxWidth={24}
      viewBoxHeight={24}
      shapes={
        <g>
          <polygon points="1.99840144e-15 18 6 18 12 12 12 18 18 18 12 24 3.99680289e-15 24"></polygon>
          <polygon points="24 18 24 24 18 24"></polygon>
          <polygon points="24 1.77635684e-15 18 6 12 6 18 1.77635684e-15"></polygon>
          <polygon points="12 -4.08562073e-14 12 6 0 18 1.99840144e-15 12 6 6 1.99840144e-15 6 1.99840144e-15 1.11022302e-15"></polygon>
        </g>
      }
    />
  );
}
