import { ScrollVerticalAnimation } from "../svg/patterns/animations";
import { HideoutPattern } from "../svg/patterns/hideout";

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main id="page-container">
      <div className="flex">
        <div className="hidden xl:block w-60">
          <div className="shadow-2xl w-60 fixed top-0 bottom-0 left-0 z-10">
            <HideoutPattern
              className="absolute bg-base-100 text-accent size-full"
              animations={[
                <ScrollVerticalAnimation
                  key={1}
                  dur="2s"
                  repeatCount="indefinite"
                  direction="down"
                />,
              ]}
            />
          </div>
        </div>

        <div className="flex flex-1">{children}</div>

        <div className="hidden xl:block w-60">
          <div className="shadow-2xl w-60 fixed top-0 bottom-0 right-0 z-10">
            <HideoutPattern
              className="absolute bg-base-100 text-accent size-full"
              animations={[
                <ScrollVerticalAnimation
                  key={1}
                  dur="2s"
                  repeatCount="indefinite"
                  direction="up"
                />,
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
