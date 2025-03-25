import { PropsWithChildren } from "react";
import { RiMenuFill } from "react-icons/ri";

export default function Navbar({ children }: PropsWithChildren) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full h-16 sticky top-0 z-10 border-b-8 border-primary shadow-xl shadow-neutral">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <RiMenuFill className="size-6" />
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-black text-3xl">Max Himmel</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <NavLinks />
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <NavLinks />
        </ul>
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#about">Resume</a>
      </li>
      <li>
        <a href="#about">Contact</a>
      </li>
    </>
  );
}
