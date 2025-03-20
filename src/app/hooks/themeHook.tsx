import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import themes from "../../app/themes";

export const useTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    themeChange(false);
    setTheme(getStoredTheme());
  }, []);

  return [theme, setTheme] as const;
};

function getStoredTheme() {
  return localStorage.getItem("theme") || themes[0];
}
