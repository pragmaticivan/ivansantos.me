import Link from "next/link";
import {
  RiArrowRightLine,
  RiBrainLine,
  RiCodeBoxLine,
  RiCompass3Line,
} from "react-icons/ri";
import StructuredData from "../../components/StructuredData";
import { consultingSchema } from "../../lib/structured-data";
import pageStyles from "../../styles/page.module.scss";
import { genPageMetadata } from "../seo";

export const metadata = genPageMetadata({
  title: "Platform & AI Engineering Consultant",
  description:
    "Hands-on platform engineering, production AI systems, developer productivity, observability, and technical strategy consulting by Ivan Santos.",
  path: "/consulting",
  keywords: [
    "platform engineering consultant",
    "AI engineering consultant",
    "MCP server consulting",
    "developer productivity consultant",
    "engineering strategy",
  ],
});

const services = [
  {
    title: "Platform engineering",
    description:
      "Design shared platforms and paved roads that reduce developer friction without hiding operational reality.",
    details:
      "Platform architecture, AWS and Kubernetes foundations, observability, infrastructure as code, reliability, and developer experience.",
    icon: RiCodeBoxLine,
  },
  {
    title: "Production AI systems",
    description:
      "Move AI ideas beyond demos into tools that are useful, observable, secure, and maintainable.",
    details:
      "MCP servers, agentic applications, internal AI tooling, integrations, evaluation strategy, guardrails, and operational readiness.",
    icon: RiBrainLine,
  },
  {
    title: "Technical strategy",
    description:
      "Turn ambiguous engineering problems into a practical direction teams can execute with confidence.",
    details:
      "Architecture reviews, build-versus-buy decisions, platform roadmaps, adoption plans, technical leadership, and team enablement.",
    icon: RiCompass3Line,
  },
];

const goodFitProblems = [
  "Your platform has become a collection of infrastructure tickets instead of a product for developers.",
  "An internal AI prototype is promising, but the path to secure and reliable production use is unclear.",
  "Teams are losing time to fragmented tooling, weak observability, or inconsistent delivery practices.",
  "A consequential architecture decision needs an experienced, independent technical perspective.",
];

const ConsultingPage = () => (
  <>
    <StructuredData schema={consultingSchema()} />
    <main className={`${pageStyles.page} ${pageStyles.pageWide}`}>
      <header className={pageStyles.consultingHero}>
        <p className={pageStyles.eyebrow}>Engineering consulting</p>
        <h1 className={pageStyles.title}>
          Platform and AI engineering that holds up in production.
        </h1>
        <p className={pageStyles.consultingLead}>
          I help engineering organizations clarify difficult technical
          decisions, build shared platforms, and turn useful AI ideas into
          dependable systems. My work combines staff-level judgment with
          hands-on implementation.
        </p>
        <a
          className={pageStyles.primaryButton}
          href="mailto:hello@ivansantos.me?subject=Engineering%20consulting"
        >
          Tell me what you&apos;re building
          <RiArrowRightLine aria-hidden="true" />
        </a>
      </header>

      <section aria-labelledby="services-title">
        <div className={pageStyles.sectionHeading}>
          <p className={pageStyles.eyebrow}>How I can help</p>
          <h2 id="services-title">
            Focused support where complexity compounds.
          </h2>
        </div>
        <div className={pageStyles.serviceGrid}>
          {services.map(({ description, details, icon: Icon, title }) => (
            <article className={pageStyles.serviceCard} key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
              <p className={pageStyles.serviceDetails}>{details}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="fit-title"
        className={pageStyles.consultingSplit}
      >
        <div>
          <p className={pageStyles.eyebrow}>When to bring me in</p>
          <h2 id="fit-title">
            A useful fit for consequential engineering work.
          </h2>
        </div>
        <ul className={pageStyles.problemList}>
          {goodFitProblems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="perspective-title"
        className={pageStyles.consultingSplit}
      >
        <div>
          <p className={pageStyles.eyebrow}>Experience</p>
          <h2 id="perspective-title">
            Built from production work, not a playbook.
          </h2>
        </div>
        <div className={pageStyles.prose}>
          <p>
            I&apos;ve spent more than a decade building software across startups
            and larger engineering organizations. My recent work spans shared
            AWS platforms, Kubernetes, Terraform, observability, automated
            compliance, production MCP servers, agentic applications, and
            organization-wide AI adoption.
          </p>
          <p>
            That range helps me connect strategy to implementation: the
            architecture has to make sense, but it also has to work for the
            engineers who will operate and extend it.
          </p>
          <p>
            You can learn more <Link href="/about">about my background</Link>,
            explore my <Link href="/open-source">open-source work</Link>, or
            read my <Link href="/blog">engineering field notes</Link>.
          </p>
        </div>
      </section>

      <section className={pageStyles.consultingCta}>
        <p className={pageStyles.eyebrow}>Start a conversation</p>
        <h2>Bring me the complicated part.</h2>
        <p>
          Share the system, decision, or delivery problem your team is working
          through. I&apos;ll respond with the context I need to understand
          whether I can help.
        </p>
        <a
          className={pageStyles.primaryButton}
          href="mailto:hello@ivansantos.me?subject=Engineering%20consulting"
        >
          hello@ivansantos.me
          <RiArrowRightLine aria-hidden="true" />
        </a>
      </section>
    </main>
  </>
);

export default ConsultingPage;
