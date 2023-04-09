import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  children: React.ReactNode;
  type?: "text" | "button" | "link";
};

const Button = ({ href = "#", children, type = "button" }: Props) => {
  if (type === "text") {
    return (
      <Link
        className="border-b border-primary pb-[1px] text-sm font-semibold text-primary sm:text-base"
        href={href}
      >
        {children}
      </Link>
    );
  }
  if (type === "link") {
    return (
      <Link className="button-gradient" href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button className="button-gradient" type="button">
      {children}
    </button>
  );
};

export default Button;
