import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      type="button"
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
      className="bg-gradient rounded-full p-3"
    >
      {currentTheme === "dark" ? (
        <SunIcon className="h-5 w-5 stroke-white stroke-[2px]" />
      ) : (
        <MoonIcon className="h-5 w-5 stroke-white stroke-[2px]" />
      )}
    </button>
  );
};

export default ThemeButton;
