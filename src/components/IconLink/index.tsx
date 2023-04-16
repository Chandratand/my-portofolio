import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  iconSrc: string;
  href?: string;
  label: string;
};

const IconLink = ({ className, iconSrc, href = "#", label }: Props) => {
  return (
    <Link
      className={`flex place-content-center items-center gap-2 dark:text-white sm:place-content-start ${className}`}
      href={href}
    >
      <Image src={iconSrc} alt="icon" width={24} height={24} />
      <p className="body">{label}</p>
    </Link>
  );
};

export default IconLink;
