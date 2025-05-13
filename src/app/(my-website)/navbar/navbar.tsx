"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { X as Close, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../theme/themeToggle";

const NAV_ITEMS = [
  { label: "About", href: "/#about", newTab: false },
  { label: "Skills", href: "/#skills", newTab: false },
  { label: "Projects", href: "/#projects", newTab: false },
  { label: "Contact", href: "/#contact", newTab: false },
  { label: "Resume", href: "/resume", newTab: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-sm border-b shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/#home" className="text-2xl font-bold text-primary">
            MH
          </Link>

          {/* Desktop nav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-8">
              {NAV_ITEMS.map((i) => (
                <NavigationMenuItem key={i.label}>
                  <Link href={i.href} legacyBehavior passHref>
                    <NavigationMenuLink target={i.newTab ? "_blank" : "_self"}>{i.label}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex justify-center">
            <ThemeToggle />

            <Button
              variant="ghost"
              className="md:hidden"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <Close className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-2 pb-4 border-t">
            <div className="flex flex-col space-y-3 px-2 animate-fade-in">
              {NAV_ITEMS.map((i) => (
                <Link
                  key={i.label}
                  href={i.href}
                  target={i.newTab ? "_blank" : "_self"}
                  className="px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
