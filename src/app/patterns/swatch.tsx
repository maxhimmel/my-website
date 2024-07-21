export function Swatch({
  PatternElement,
  patternClassName,
}: {
  PatternElement: React.ComponentType<{
    className?: string;
    isBackground?: boolean;
    children?: React.ReactNode;
  }>;
  patternClassName?: string;
}) {
  const patternName = PatternElement.name.replace("Pattern", "");

  return (
    <div className="border-2 border-base-300 rounded-lg h-60 relative">
      <PatternElement isBackground className={patternClassName}>
        <div className="absolute bottom-0 py-2 px-4 bg-base-300 w-full">
          <h1 className="font-semibold text-xl drop-shadow-md">
            {patternName}
          </h1>
        </div>
      </PatternElement>
    </div>
  );
}
