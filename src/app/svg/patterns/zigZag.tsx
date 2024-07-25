import { Pattern } from "./pattern";

export function ZigZagPattern({
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
        <ZigZagPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      animations={animations}
      viewBoxWidth={40}
      viewBoxHeight={12}
      shapes={[
        <path d="M2.84217094e-14,6.17157288 L6.17157288,0 L11.8284271,0 L0,11.8284271 L2.84217094e-14,6.17157288 L2.84217094e-14,6.17157288 Z M40,11.8284271 L28.1715729,0 L33.8284271,3.55271368e-15 L40,6.17157288 L40,11.8284271 L40,11.8284271 Z M6.17157288,12 L18.1715729,0 L21.8284271,0 L33.8284271,12 L28.1715729,12 L20,3.82842712 L11.8284271,12 L6.17157288,12 L6.17157288,12 Z M18.1715729,12 L20,10.1715729 L21.8284271,12 L18.1715729,12 L18.1715729,12 Z"></path>,
      ]}
    />
  );
}
