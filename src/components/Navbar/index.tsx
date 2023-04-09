import React from "react";
import Logo from "../Logo/Index";
import Button from "../Button";

const Navbar = () => {
  return (
    <header className="px-4 lg:container">
      <nav className="flex items-center justify-between py-2 sm:py-4">
        <Logo />
        <Button>CONTACT ME</Button>
      </nav>
    </header>
  );
};

export default Navbar;
