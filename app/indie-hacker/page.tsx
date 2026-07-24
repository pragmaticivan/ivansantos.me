import Link from "next/link";
import { RiArrowRightUpLine, RiSparklingLine } from "react-icons/ri";
import pageStyles from "../../styles/page.module.scss";
import { genPageMetadata } from "../seo";

export const metadata = genPageMetadata({
  title: "Indie Hacker",
  description: `Side projects and products I'm building in my free time`,
});

const indieProjects = [
  {
    name: "Binder Placeholders",
    description:
      "A simple tool to generate binder placeholders for your TCG decks.",
    url: "https://www.binderplaceholders.com",
    status: "Live",
  },
];

const IndieHackerPage = () => (
  <main className={pageStyles.page}>
    <header className={pageStyles.intro}>
      <h1 className={pageStyles.title}>Indie hacker</h1>
      <p className={pageStyles.lead}>
        Side projects and products I build in my free time. Shipping things I
        wish existed.
      </p>
    </header>

    <div className={pageStyles.projectList}>
      {indieProjects.map((project) => (
        <article className={pageStyles.project} key={project.name}>
          <div aria-hidden="true" className={pageStyles.projectMark}>
            <RiSparklingLine />
          </div>
          <div>
            <h2>
              {project.name}
              <span className={pageStyles.status}>{project.status}</span>
            </h2>
            <p>{project.description}</p>
          </div>
          <Link
            aria-label={`Visit ${project.name}`}
            className={pageStyles.projectAction}
            href={project.url}
            rel="noreferrer"
            target="_blank"
          >
            <RiArrowRightUpLine aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  </main>
);

export default IndieHackerPage;
