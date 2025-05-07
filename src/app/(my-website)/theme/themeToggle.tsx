"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return !isMounted ? <Loading /> : <Toggle />;
}

function Loading() {
  return (
    <button className="btn btn-soft btn-primary btn-circle btn-disabled">
      <span className="loading loading-ring size-7"></span>
    </button>
  );
}

function Toggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme !== "dark" ? "dark" : "light");
      }}
      className="btn btn-soft btn-primary btn-circle"
    >
      {resolvedTheme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
