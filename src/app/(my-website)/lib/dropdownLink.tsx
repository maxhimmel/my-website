"use client";

import Link from "next/link";
import { MouseEvent, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  href: string;
  newTab?: boolean;
};

export function DropdownLink({ href, children, newTab }: Props) {
  return (
    <Link href={href} onClick={hideDropdown} target={newTab ? "_blank" : "_self"}>
      {children}
    </Link>
  );

  function hideDropdown(evt: MouseEvent<HTMLAnchorElement>) {
    evt.currentTarget.blur();
  }
}
