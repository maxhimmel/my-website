import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";
import { DropdownLink } from "../lib/dropdownLink";
import { ThemeToggle } from "../theme/themeToggle";

export function Navbar() {
  return (
    <div className="navbar bg-base-300 sticky top-0 z-10 border-b-8 border-primary shadow-xl shadow-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenuFill className="size-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box rounded-t-none z-1 mt-2 ml-4 w-3xs p-2 shadow-lg shadow-neutral border-2 border-base-300"
          >
            <NavLinks />
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost font-black text-3xl">
          Max Himmel
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <NavLinks />
        </ul>
        <ThemeToggle />
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <>
      <li>
        <DropdownLink href="/#portfolio">Portfolio</DropdownLink>
      </li>
      <li>
        <DropdownLink href="/#about">About</DropdownLink>
      </li>
      <li>
        <DropdownLink href="/resume">Resume</DropdownLink>
      </li>
      <li>
        <DropdownLink href="/#about">Contact</DropdownLink>
      </li>
    </>
  );
}
