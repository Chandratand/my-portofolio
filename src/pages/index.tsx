import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import IconLink from "@/components/IconLink";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Profile from "../../public/assets/profile.png";
import GraphBG from "@/components/GraphBG";

const Home = () => {
  return (
    <main className="relative overflow-hidden">
      <GraphBG />
      <Navbar />
      <section className="relative px-4 pt-5 lg:container sm:pt-0">
        <div className="flex flex-wrap items-center">
          <div className="w-full text-center sm:w-1/2 sm:text-start">
            <h1 className="mb-2 text-[32px] font-bold text-secondary dark:text-white sm:text-5xl">
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
      <div className="radial" />
    </main>
  );
};

export default Home;
