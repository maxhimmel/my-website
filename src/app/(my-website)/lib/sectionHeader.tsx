type Props = {
  order: string;
  title: string;
};

export function SectionHeader({ order, title }: Props) {
  return (
    <h2 className="text-3xl font-bold mb-12 flex items-center">
      <span className="text-primary mr-2">{order}.</span> {title}
      <span className="h-px bg-border grow ml-6"></span>
    </h2>
  );
}
