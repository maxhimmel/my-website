import { Pattern } from "./pattern";

export function RainPattern({
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
        <RainPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      viewBoxWidth={12}
      viewBoxHeight={16}
      shapes={[
        <path d="M4,0.990777969 C4,0.443586406 4.44386482,0 5,0 C5.55228475,0 6,0.45097518 6,0.990777969 L6,5.00922203 C6,5.55641359 5.55613518,6 5,6 C4.44771525,6 4,5.54902482 4,5.00922203 L4,0.990777969 Z M10,8.99077797 C10,8.44358641 10.4438648,8 11,8 C11.5522847,8 12,8.45097518 12,8.99077797 L12,13.009222 C12,13.5564136 11.5561352,14 11,14 C10.4477153,14 10,13.5490248 10,13.009222 L10,8.99077797 Z"></path>,
      ]}
    />
  );
}
