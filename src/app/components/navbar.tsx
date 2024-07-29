import { PolkaDotsPattern } from "../svg/patterns/polkaDots";
import { ThemeDropdown } from "./themeDropdown";

export function Navbar() {
  return (
    <div className="fixed top-0 navbar bg-neutral text-neutral-content shadow-xl z-50 border-b-4 border-neutral-content">
      <PolkaDotsPattern className="bg-neutral text-neutral-content opacity-10 absolute inset-0 size-full -z-10" />
      <div className="navbar-start">
        <ThemeDropdown />
      </div>
      <div className="navbar-center">
        <p className="text-4xl font-black">Max Himmel</p>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
