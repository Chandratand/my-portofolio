import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/#"
      className="text-xl font-bold text-secondary hover:text-primary sm:text-[22px]"
    >
      ChandraTand
    </Link>
  );
};

export default Logo;
