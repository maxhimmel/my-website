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
    <div
      className="
        border-2 border-base-300 rounded-lg h-60 relative 
        hover:scale-105 hover:shadow-2xl hover:z-10
        transition duration-[0.15s]
      "
    >
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
