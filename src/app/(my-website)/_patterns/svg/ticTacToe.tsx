import { Pattern } from "./pattern";

export function TicTacToePattern({
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
        <TicTacToePattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      uuid={crypto.randomUUID()}
      className={className}
      animations={animations}
      viewBoxWidth={64}
      viewBoxHeight={64}
      shapes={
        <path
          fillRule="evenodd"
          d="M8,16 C12.418278,16 16,12.418278 16,8 C16,3.581722 12.418278,0 8,0 C3.581722,0 0,3.581722 0,8 C0,12.418278 3.581722,16 8,16 Z M8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z M41.4142136,8 L47.363961,2.05025253 L45.9497475,0.636038969 L40,6.58578644 L34.0502525,0.636038969 L32.636039,2.05025253 L38.5857864,8 L32.636039,13.9497475 L34.0502525,15.363961 L40,9.41421356 L45.9497475,15.363961 L47.363961,13.9497475 L41.4142136,8 Z M40,48 C44.418278,48 48,44.418278 48,40 C48,35.581722 44.418278,32 40,32 C35.581722,32 32,35.581722 32,40 C32,44.418278 35.581722,48 40,48 Z M40,46 C43.3137085,46 46,43.3137085 46,40 C46,36.6862915 43.3137085,34 40,34 C36.6862915,34 34,36.6862915 34,40 C34,43.3137085 36.6862915,46 40,46 Z M9.41421356,40 L15.363961,34.0502525 L13.9497475,32.636039 L8,38.5857864 L2.05025253,32.636039 L0.636038969,34.0502525 L6.58578644,40 L0.636038969,45.9497475 L2.05025253,47.363961 L8,41.4142136 L13.9497475,47.363961 L15.363961,45.9497475 L9.41421356,40 Z"
        ></path>
      }
    />
  );
}
