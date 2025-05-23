import { Pattern } from "./pattern";

export function CurrentPattern({
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
        <CurrentPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      uuid={crypto.randomUUID()}
      className={className}
      animations={animations}
      viewBoxWidth={76}
      viewBoxHeight={18}
      shapes={
        <path d="M31.9990251,18 C29.5706862,16.1755424 28,13.2711979 28,10 C28,5.581722 24.418278,2 20,2 L0,2 L0,0 L20,0 C25.5228475,0 30,4.4771525 30,10 C30,14.418278 33.581722,18 38,18 L58,18 C62.418278,18 66,14.418278 66,10 C66,4.4771525 70.4771525,0 76,0 L76,2 C71.581722,2 68,5.581722 68,10 C68,13.2711979 66.4293138,16.1755424 64.0009749,18 L31.9990251,18 L31.9990251,18 Z M64.0009749,0 C62.3294868,1.25582103 60.2516496,2 58,2 L38,2 C35.7483504,2 33.6705132,1.25582103 31.9990251,4.86721774e-13 L64.0009749,0 Z"></path>
      }
    />
  );
}
