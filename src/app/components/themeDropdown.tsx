"use client";

import { useRef } from "react";
import themes from "../../app/themes";
import { useTheme } from "../hooks/themeHook";

export function ThemeDropdown({ className }: { className?: string }) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    <div className={`dropdown ${className} drop-shadow-lg`}>
      <div
        ref={dropdownRef}
        tabIndex={0}
        role="button"
        className="btn btn-accent m-1"
        onMouseDown={() => {
          const target = dropdownRef.current;
          toggleDropdown(target);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>

        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content bg-base-100 text-base-content rounded-box border-4 border-accent z-1 w-auto mt-2 p-2 shadow-2xl"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <input
              type="radio"
              name="theme"
              className={`btn btn-sm btn-block justify-start ${
                theme === currentTheme ? "btn-primary" : "btn-ghost"
              }`}
              aria-label={theme.toUpperCase()}
              value={theme}
              data-set-theme={theme}
              onClick={(e) => toggleDropdown(e.currentTarget)}
              onChange={() => setCurrentTheme(theme)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function toggleDropdown(target: HTMLElement | null) {
  if (target && target.matches(":focus")) {
    // Adding a timeout to give css time to update
    setTimeout(() => {
      target.blur();
    }, 0);
  }
}
