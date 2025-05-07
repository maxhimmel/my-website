import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren & {
  id: string;
};

export function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      // ref={sectionRef}
      className="py-24 md:py-32 odd:bg-secondary/30 transition-opacity duration-1000 ease-in-out" //opacity-0
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/* --- */

type HeaderProps = {
  order: string;
  title: string;
};

Section.Header = function SectionHeader({ order, title }: HeaderProps) {
  return (
    <h2 className="text-3xl font-bold mb-12 flex items-center">
      <span className="text-primary mr-2">{order}.</span> {title}
      <span className="h-px bg-border grow ml-6"></span>
    </h2>
  );
};
