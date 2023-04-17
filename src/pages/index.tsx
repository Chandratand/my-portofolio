import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Button from "@/components/Button";
import GraphBG from "@/components/GraphBG";
import IconLink from "@/components/IconLink";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import Profile from "../../public/assets/profile.png";

const Home = () => {
  return (
    <>
      <GraphBG />
      <Layout>
        <section className="relative px-4 pt-5 lg:container sm:pt-0">
          <div className="flex flex-wrap items-center">
            <div className="w-full text-center sm:w-1/2 sm:text-start">
              <h1 className="header mb-2 text-secondary dark:text-white">
                Hai! I&apos;am <br />{" "}
                <span className="text-gradient">Chandra Tandiono</span>
              </h1>
              <p className="mx-auto mb-2 max-w-[458px] font-semibold sm:mx-0 sm:text-xl">
                <Typewriter
                  cursorStyle="|"
                  cursor
                  loop
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={5000}
                  words={[
                    "Software Engineer who specialized in frontend side, but also have an ability to code in backend side.",
                  ]}
                />
              </p>
              <div className="mb-2 space-y-2">
                <IconLink
                  iconSrc="/assets/ic-email.svg"
                  label="chandratand@gmail.com"
                />
                <IconLink
                  iconSrc="/assets/ic-location.svg"
                  label="Medan, Sumatera Utara"
                />
              </div>
              <Button type="text">Download My CV</Button>
            </div>
            <div className="mt-2 w-full sm:mt-0 sm:w-1/2">
              <Image
                src={Profile}
                alt="profile"
                className="mx-auto w-[360px] sm:w-[510px]"
              />
            </div>
          </div>
        </section>
        <section className="my-8 py-8">
          <div className="px-4 lg:container" data-aos="fade-up">
            <div className="space-y-2 text-center">
              <h2 className="header text-gradient">My Projects</h2>
              <p className="title">
                Projects that I&apos;ve done and on-going projects
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-8 sm:mt-12 md:flex-row md:gap-4 lg:gap-8">
              <ProjectCard
                href="/projects/1"
                title="Adaremit Website"
                position="Frontend Enginner"
                thumbnail="/assets/project-1.png"
              />
              <ProjectCard
                href="/projects/1"
                title="Adaremit Mobile Apps"
                position="Mobile Enginner"
                thumbnail="/assets/project-2.png"
              />
              <ProjectCard
                href="/projects/1"
                title="Adaremit Blog Website"
                position="Frontend Enginner"
                thumbnail="/assets/project-3.png"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-1 text-center sm:mt-8">
              <Link href="/#" className="body font-semibold text-primary">
                See More
              </Link>
              <ArrowRightIcon className="h-4 w-4 stroke-primary stroke-[4px]" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
