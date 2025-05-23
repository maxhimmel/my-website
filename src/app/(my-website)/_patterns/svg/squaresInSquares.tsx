import { Pattern } from "./pattern";

export function SquaresInSquaresPattern({
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
        <SquaresInSquaresPattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      uuid={crypto.randomUUID()}
      className={className}
      animations={animations}
      viewBoxWidth={70}
      viewBoxHeight={70}
      shapes={
        <g>
          <path
            fillRule="evenodd"
            d="M-3.55271368e-15,0 L35,0 L35,35 L-3.55271368e-15,35 L-3.55271368e-15,0 Z M5,5 L30,5 L30,30 L5,30 L5,5 Z M10,10 L25,10 L25,25 L10,25 L10,10 Z M15,15 L20,15 L20,20 L15,20 L15,15 Z M40,5 L65,5 L65,30 L40,30 L40,5 Z M45,10 L60,10 L60,25 L45,25 L45,10 Z M50,15 L55,15 L55,20 L50,20 L50,15 Z"
          />
          <path
            fillRule="evenodd"
            d="M5,35 L40,35 L40,70 L5,70 L5,35 Z M10,40 L35,40 L35,65 L10,65 L10,40 Z M15,45 L30,45 L30,60 L15,60 L15,45 Z M20,50 L25,50 L25,55 L20,55 L20,50 Z M45,40 L70,40 L70,65 L45,65 L45,40 Z M50,45 L65,45 L65,60 L50,60 L50,45 Z M55,50 L60,50 L60,55 L55,55 L55,50 Z"
            transform="translate(37.500000, 52.500000) scale(-1, 1) translate(-37.500000, -52.500000) "
          />
        </g>
      }
    />
  );
}
