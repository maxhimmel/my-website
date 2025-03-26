"use client";

import Link from "next/link";
import { MouseEvent, PropsWithChildren } from "react";

export function DropdownLink({ href, children }: { href: string } & PropsWithChildren) {
  return (
    <Link href={href} onClick={hideDropdown}>
      {children}
    </Link>
  );

  function hideDropdown(evt: MouseEvent<HTMLAnchorElement>) {
    evt.currentTarget.blur();
  }
}
