export function AnchorScrollOffset({ id }: { id: string }) {
  // The top-16 comes from the height of the navbar (which is 16)
  return <div id={id} className="absolute -top-16" />;
}
