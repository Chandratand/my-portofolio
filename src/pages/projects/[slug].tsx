import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

const ProjectsDetail = () => {
  return (
    <Layout>
      <section className="px-4 py-5 lg:container lg:py-8">
        <div className="md:flex">
          <div className="md:w-1/2 md:px-4">
            <div className="relative aspect-[4/3] md:max-w-[480px]">
              <Image src="/assets/project-1.png" fill alt="project-1" />
            </div>
            <div className="mt-10 hidden space-y-4 md:block">
              <p className="title">Technology used : Next Js, Tailwind CSS</p>
              <Button>VIEW PROJECT</Button>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2" data-aos="fade-up">
            <h1 className="header">Adaremit Website (on-going)</h1>
            <div className="mt-2 space-y-1 md:mt-4 md:space-y-2">
              <p className="title">Date : April 2023 - On going</p>
              <p className="title">Client : PT Anugrah Danmas Remit</p>
              <p className="title">Role : Frontend Engineer</p>
            </div>
            <div className="mt-2 space-y-2 md:mt-4">
              <p>
                Adaremit website is one of the products of PT Anugrah Danamas
                Remit. Where Adaremit provides money transfer services abroad.
              </p>
              <p>
                Take on the role of a frontend engineer. Work collaboratively
                with UI/UX designers to translate business needs into UI/UX
                design and then turn it into a website that can be used by users
                and follow SEO best practices in designing the site.
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-2 md:hidden">
            <p className="title">Technology used : Next Js, Tailwind CSS</p>
            <Button>VIEW PROJECT</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsDetail;
