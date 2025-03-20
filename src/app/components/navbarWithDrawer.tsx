"use client";

import { useState } from "react";
import { ScrollVerticalAnimation } from "../svg/patterns/animations";
import { HideoutPattern } from "../svg/patterns/hideout";
import { PolkaDotsPattern } from "../svg/patterns/polkaDots";
import { NavMenu } from "./navMenu";
import { ThemeDropdown } from "./themeDropdown";

export function NavbarWithDrawer({ children }: { children?: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="drawer">
      <input
        id="main-navbar"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        onChange={toggleSidebar}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar relative h-navbar-h z-50 w-full bg-neutral text-neutral-content shadow-xl border-b-4 border-accent">
          <PolkaDotsPattern className="bg-neutral text-neutral-content opacity-10 absolute inset-0 size-full -z-10" />
          <div className="flex-none xl:hidden">
            <label
              htmlFor="main-navbar"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block size-7 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 text-4xl font-black">Max Himmel</div>
          <div className="hidden flex-none xl:block">
            <ul className="menu menu-horizontal items-center gap-4">
              {/* Navbar menu content here */}
              <NavMenu className="menu-horizontal menu-sm">
                <NavMenu.AboutMe />
                <NavMenu.Projects />
                <NavMenu.Resume />
              </NavMenu>
              <ThemeDropdown className="dropdown-end" />
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="main-navbar"
          aria-label="close sidebar"
          className={`drawer-overlay ${
            isSidebarOpen ? "backdrop-blur-xs" : ""
          }`}
        ></label>
        <ul className="menu min-h-screen w-80 p-4 pt-navbar-h">
          {/* Sidebar content here */}
          <HideoutPattern
            className="absolute bg-base-100 text-accent size-full inset-0 border-r-4 border-accent"
            animations={[
              <ScrollVerticalAnimation
                key={1}
                direction="down"
                dur="2s"
                repeatCount="indefinite"
              />,
            ]}
          />

          <div className="z-10 space-y-2 pt-4">
            <NavMenu className="menu-lg">
              <NavMenu.AboutMe onClick={toggleSidebar} />
              <NavMenu.Projects onClick={toggleSidebar} />
              <NavMenu.Resume onClick={toggleSidebar} />
            </NavMenu>
            <ThemeDropdown className="dropdown-right" />
          </div>
        </ul>
      </div>
    </div>
  );
}
