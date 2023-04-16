import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  thumbnail: string;
  title: string;
  position: string;
};

const ProjectCard = ({ href = "#", thumbnail, title, position }: Props) => {
  return (
    <Link
      href={href}
      data-aos="fade-up"
      className="group mx-auto w-[90%] duration-500 hover:scale-105 md:w-1/3"
    >
      <div className="relative mb-2 aspect-[4/3] rounded-lg bg-[#a5a5a5] shadow-xl">
        <Image src={thumbnail} fill alt="adaremit website" />
      </div>
      <h3 className="title text-secondary group-hover:text-primary dark:text-white">
        {title}
      </h3>
      <p className="body text-secondary dark:text-white">{position}</p>
    </Link>
  );
};

export default ProjectCard;
