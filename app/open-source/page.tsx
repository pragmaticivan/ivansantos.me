import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import NavigationBar from "../../components/NavigationBar";
import { genPageMetadata } from "../seo";

export const metadata = genPageMetadata({
  title: "Open Source ✍️",
  description: `I share anything that may help others, technologies I'm using and cool things I've made`,
});

const projects = [
  {
    name: "nestjs-otel",
    description:
      "OpenTelemetry (Tracing + Metrics) module for Nest framework (node.js)",
    image: "/images/project-logo.png",
    github: "https://github.com/pragmaticivan/nestjs-otel",
  },
  {
    name: "nest-resend",
    description: "Injectable Resend client for your nestjs projects",
    image: "/images/project-logo.png",
    github: "https://github.com/pragmaticivan/nest-resend",
  },
  {
    name: "dotfiles",
    description:
      "Your dotfiles are how you personalize your system. These are mine",
    image: "/images/project-logo.png",
    github: "https://github.com/pragmaticivan/dotfiles",
  },
  {
    name: "nestjs-otel-prom-grafana-tempo",
    description:
      "Prometheus + Grafana + Tempo + Loki Observability Stack example",
    image: "/images/project-logo.png",
    github: "https://github.com/pragmaticivan/nestjs-otel-prom-grafana-tempo",
  },
  {
    name: "ivansantos.me",
    description: "My Personal Website",
    image: "/images/project-logo.png",
    github: "https://github.com/pragmaticivan/ivansantos.me",
  },
];

const OpenSourcePage = () => (
  <>
    <NavigationBar />

    <section
      className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl"
      id="projects"
    >
      <h1 className="my-20 text-center font-bold text-4xl text-zinc-800 tracking-tight sm:text-5xl dark:text-zinc-100">
        Open Source
        <hr className="mx-auto my-4 h-1 w-6 rounded-sm border-0 bg-cyan-700" />
      </h1>

      <div className="mb-32 flex flex-col space-y-20">
        {projects.map((project, idx) => {
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
                    <Link href={project.github} target="_blank">
                      <BsGithub
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

export default OpenSourcePage;
