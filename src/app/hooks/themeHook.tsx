import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

export const useTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    themeChange(false);
    setTheme(getStoredTheme());
  });

  return [theme, setTheme] as const;
};

function getStoredTheme() {
  return localStorage.getItem("theme") || "";
}
