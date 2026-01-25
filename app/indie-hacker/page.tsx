import Image from "next/image";
import Link from "next/link";
import { BsGlobe } from "react-icons/bs";
import NavigationBar from "../../components/NavigationBar";
import { genPageMetadata } from "../seo";

export const metadata = genPageMetadata({
  title: "Indie Hacker 🚀",
  description: `Side projects and products I'm building in my free time`,
});

const indieProjects = [
  {
    name: "Binder Placeholders",
    description:
      "A simple tool to generate binder placeholders for your TCG decks.",
    image: "/images/project-logo.png",
    url: "https://www.binderplaceholders.com",
  },
];

const IndieHackerPage = () => (
  <>
    <NavigationBar />

    <section
      className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl"
      id="projects"
    >
      <h1 className="my-20 text-center font-bold text-4xl text-zinc-800 tracking-tight sm:text-5xl dark:text-zinc-100">
        Indie Hacker
        <hr className="mx-auto my-4 h-1 w-6 rounded-sm border-0 bg-cyan-700" />
      </h1>

      <div className="mb-32 flex flex-col space-y-20">
        {indieProjects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="animation-delay-2 flex animate-slideUpCubiBezier flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/4">
                  <Image
                    alt=""
                    className="rounded-xl shadow-xl hover:opacity-70"
                    height={500}
                    src={project.image}
                    width={500}
                  />
                </div>
                <div>
                  <h1 className="mb-2 font-bold text-4xl">{project.name}</h1>
                  <p className="mb-2 text-l text-neutral-600 leading-7 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row space-x-4 align-bottom">
                    <Link href={project.url} target="_blank">
                      <BsGlobe
                        className="cursor-pointer transition-transform hover:-translate-y-1"
                        size={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default IndieHackerPage;
