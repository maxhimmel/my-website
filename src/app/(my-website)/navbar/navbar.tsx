import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const isScrolled = true;

  return (
    <nav
      className={`fixed w-full top-0 z-50 flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <Link href="/docs" legacyBehavior passHref>
        MH
      </Link>

      <NavigationMenu className={`container mx-auto`}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>Skills</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>Projects</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>Contact</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>Resume</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link href="/docs" legacyBehavior passHref>
        🌞/🌜
      </Link>
    </nav>
  );
}
