import Link from "next/link";
import { RiCodeSSlashLine, RiGithubFill } from "react-icons/ri";
import pageStyles from "../../styles/page.module.scss";
import { genPageMetadata } from "../seo";

export const metadata = genPageMetadata({
  title: "Open Source Engineering",
  description:
    "Open-source engineering tools by Ivan Santos for observability, Go dependencies, NestJS, automation, and developer infrastructure.",
  path: "/open-source",
});

const projects = [
  {
    name: "nestjs-otel",
    description:
      "OpenTelemetry (Tracing + Metrics) module for Nest framework (node.js)",
    github: "https://github.com/pragmaticivan/nestjs-otel",
  },
  {
    name: "go-check-updates",
    description:
      "Find newer versions of package dependencies for go applications",
    github: "https://github.com/pragmaticivan/go-check-updates",
  },
  {
    name: "dotfiles",
    description:
      "Your dotfiles are how you personalize your system. These are mine",
    github: "https://github.com/pragmaticivan/dotfiles",
  },
  {
    name: "nestjs-otel-prom-grafana-tempo",
    description:
      "Prometheus + Grafana + Tempo + Loki Observability Stack example",
    github: "https://github.com/pragmaticivan/nestjs-otel-prom-grafana-tempo",
  },
  {
    name: "ivansantos.me",
    description: "My Personal Website",
    github: "https://github.com/pragmaticivan/ivansantos.me",
  },
  {
    name: "nest-resend",
    description: "Injectable Resend client for your nestjs projects",
    github: "https://github.com/pragmaticivan/nest-resend",
  },
];

const OpenSourcePage = () => (
  <main className={pageStyles.page} id="projects">
    <header className={pageStyles.intro}>
      <h1 className={pageStyles.title}>Open source</h1>
      <p className={pageStyles.lead}>
        Libraries, examples, and tools shaped by platform, AI, and
        production-minded engineering.
      </p>
    </header>
    <div className={pageStyles.projectList}>
      {projects.map((project) => (
        <article className={pageStyles.project} key={project.name}>
          <div aria-hidden="true" className={pageStyles.projectMark}>
            <RiCodeSSlashLine />
          </div>
          <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
          <Link
            aria-label={`View ${project.name} on GitHub`}
            className={pageStyles.projectAction}
            href={project.github}
            rel="noreferrer"
            target="_blank"
          >
            <RiGithubFill aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  </main>
);

export default OpenSourcePage;
