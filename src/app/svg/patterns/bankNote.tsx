import { Pattern } from "./pattern";

export function BankNotePattern({
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
        <BankNotePattern className={`size-full ${className}`} />
      </div>
      <div className="absolute size-full">{children}</div>
    </div>
  ) : (
    <Pattern
      className={className}
      animations={animations}
      viewBoxWidth={100}
      viewBoxHeight={20}
      shapes={[
        <path d="M21.1841339,20 C21.5411448,19.869748 21.9037256,19.7358773 22.272392,19.5983261 C22.6346445,19.4631679 23.8705367,18.9999982 24.0399055,18.9366758 C33.6397477,15.3475548 39.6469349,14 50,14 C60.2711361,14 65.3618399,15.2217689 74.6286093,18.9284767 C75.584355,19.310775 76.4978747,19.6675274 77.3787841,20 L83.604005,20 C81.0931362,19.2694473 78.4649665,18.3089537 75.3713907,17.0715233 C65.8881601,13.2782311 60.5621972,12 50,12 C39.3741437,12 33.144814,13.3973866 23.3395101,17.0633242 C23.1688625,17.1271247 21.9338538,17.5899633 21.5732596,17.7245028 C19.0984715,18.6478581 16.912678,19.3994574 14.8494171,20 L21.1841339,20 L21.1841339,20 Z M21.1841339,0 C13.2575214,2.89194861 8.07672845,4 7.87150385e-14,4 L7.81597009e-14,4 L0,2 C5.74391753,2 9.9514017,1.4256397 14.8494171,1.40165657e-15 L21.1841339,6.9388939e-17 L21.1841339,0 Z M77.3787841,2.21705987e-12 C85.238555,2.9664329 90.5022896,4 100,4 L100,2 C93.1577329,2 88.6144135,1.4578092 83.604005,1.04805054e-13 L77.3787841,0 L77.3787841,2.21705987e-12 Z M7.87150385e-14,14 C8.44050043,14 13.7183277,12.7898887 22.272392,9.59832609 C22.6346445,9.46316794 23.8705367,8.99999822 24.0399055,8.9366758 C33.6397477,5.34755477 39.6469349,4 50,4 C60.2711361,4 65.3618399,5.2217689 74.6286093,8.92847669 C84.1118399,12.7217689 89.4378028,14 100,14 L100,12 C89.7288639,12 84.6381601,10.7782311 75.3713907,7.07152331 C65.8881601,3.2782311 60.5621972,2 50,2 C39.3741437,2 33.144814,3.39738661 23.3395101,7.0633242 C23.1688625,7.12712472 21.9338538,7.58996334 21.5732596,7.72450279 C13.2235239,10.8398294 8.16350991,12 0,12 L7.81597009e-14,14 L7.87150385e-14,14 L7.87150385e-14,14 Z" />,
      ]}
    />
  );
}
