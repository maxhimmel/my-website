"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
        setTheme(resolvedTheme !== "dark" ? "dark" : "corporate");
      }}
      className="btn btn-soft btn-primary btn-circle"
    >
      {resolvedTheme === "dark" ? <MdDarkMode className="size-5" /> : <FaSun className="size-5" />}
    </button>
  );
}
