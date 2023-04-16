import React from "react";
import Logo from "../Logo/Index";
import Button from "../Button";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <header className="px-4 lg:container">
      <nav className="flex items-center justify-between py-2 sm:py-4">
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
