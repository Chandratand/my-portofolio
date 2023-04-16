import React, { useEffect, useRef } from "react";
import Logo from "../Logo/Index";
import Button from "../Button";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const headerRef = useRef<HTMLInputElement>(null);

  const onScroll = () => {
    if (window.pageYOffset > 0) {
      headerRef.current?.classList.add(
        "bg-white",
        "dark:bg-black",
        "shadow-lg"
      );
    } else {
      headerRef.current?.classList.remove(
        "bg-white",
        "dark:bg-black",
        "shadow-lg"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed z-10 w-full">
      <nav className="flex items-center justify-between py-2 px-4 lg:container sm:py-4">
        <Logo />
        <div className="flex items-center gap-1 sm:gap-2">
          <Button>CONTACT ME</Button>
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
