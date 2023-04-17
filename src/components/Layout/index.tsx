import React, { ReactNode } from "react";
import Navbar from "../Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="mt-20">{children}</main>
    </>
  );
};

export default Layout;
