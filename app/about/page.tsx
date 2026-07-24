import Image from "next/image";
import Link from "next/link";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiTwitterXFill,
} from "react-icons/ri";
import StructuredData from "../../components/StructuredData";
import { profilePageSchema } from "../../lib/structured-data";
import pageStyles from "../../styles/page.module.scss";
import { genPageMetadata } from "../seo";

export const metadata = genPageMetadata({
  title: "About Ivan Santos",
  description:
    "Staff engineer and engineering consultant working across platform engineering, AI systems, developer productivity, and observability.",
  path: "/about",
  keywords: [
    "Ivan Santos",
    "staff engineer",
    "platform engineering",
    "AI engineering",
    "engineering consultant",
  ],
});

const AboutPage = () => (
  <>
    <StructuredData schema={profilePageSchema()} />
    <main className={`${pageStyles.page} ${pageStyles.pageWide}`}>
      <div className={pageStyles.aboutGrid}>
        <div>
          <h1 className={pageStyles.title}>
            Engineering judgment for complex systems.
          </h1>
          <div className={pageStyles.prose}>
            <p>
              Howdy! I&apos;m Ivan Santos, a Staff Engineer and engineering
              consultant based in Austin. I build platforms and AI systems that
              help engineering organizations move faster and operate with more
              confidence. I&apos;m most useful where infrastructure, internal
              tooling, and difficult technical decisions meet.
            </p>
            <p>
              At EverQuote, I work across Platform Engineering and AI
              Engineering. My platform work includes observability, shared AWS
              services, Kubernetes, Lambda, Terraform, and automated compliance.
              On the AI side, I&apos;ve shipped production MCP servers and
              agentic applications used by engineers, product managers, and
              leadership. I also help lead AI adoption across the engineering
              organization.
            </p>
            <p>
              As a consultant, I help teams clarify platform architecture, build
              useful internal AI tools, improve developer productivity, and make
              reliability work repeatable.{" "}
              <Link href="/consulting">See how I can help your team</Link>, or{" "}
              <a href="mailto:hello@ivansantos.me">get in touch directly</a>.
            </p>
            <p>
              I was born and raised in Brazil before moving to the US, and
              I&apos;ve worked effectively with remote teams for more than a
              decade. Away from the computer, I enjoy travel, finance, coffee,
              dancing, and volleyball.
            </p>
          </div>
        </div>
        <aside className={pageStyles.portraitColumn}>
          <Image
            alt="Ivan Santos"
            className={pageStyles.portrait}
            decoding="async"
            height="400"
            loading="eager"
            src="https://avatars2.githubusercontent.com/u/301291?s=400&v=4"
            width="400"
          />
          <ul className={pageStyles.socialList}>
            <li>
              <a href="https://x.com/pragmaticivan">
                <RiTwitterXFill aria-hidden="true" />
                <span>Follow me on X</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/pragmaticivan/">
                <RiGithubFill aria-hidden="true" />
                <span>Follow me on GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pragmaticivan/">
                <RiLinkedinBoxFill aria-hidden="true" />
                <span>Follow me on LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:hello@ivansantos.me">
                <RiMailFill aria-hidden="true" />
                <span>hello@ivansantos.me</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  </>
);

export default AboutPage;
