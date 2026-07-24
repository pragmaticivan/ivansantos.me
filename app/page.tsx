import Image from "next/image";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiGithubFill,
} from "react-icons/ri";

import SlideUp from "../components/SlideUp";
import lindyComputer from "../public/images/lindy-computer.jpg";
import styles from "../styles/home.module.scss";

const capabilities = [
  "Platform engineering",
  "AI engineering",
  "Developer productivity",
  "Observability",
];

const destinations = [
  {
    title: "Writing",
    description:
      "Practical notes on platforms, AI, infrastructure, and engineering judgment.",
    href: "/blog",
  },
  {
    title: "Open source",
    description: "Libraries and examples built with production in mind.",
    href: "/open-source",
  },
  {
    title: "Indie projects",
    description: "Small products built around useful, specific problems.",
    href: "/indie-hacker",
  },
];

export default function Page() {
  return (
    <main>
      <div className={styles.heroShell}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Staff engineer · Engineering consultant
            </p>
            <h1>Stronger platforms. Useful AI.</h1>
            <p className={styles.intro}>
              I help engineering organizations build shared infrastructure,
              production AI tooling, and the practices to operate both with
              confidence.
            </p>
            <div className={styles.heroActions}>
              <a
                className={styles.primaryAction}
                href="mailto:hello@ivansantos.me"
              >
                Work with me
                <RiArrowRightLine aria-hidden="true" />
              </a>
              <Link className={styles.textAction} href="/blog">
                Read my writing
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.imageFrame}>
              <Image
                alt="Lindy the dog sitting at a laptop"
                className={styles.heroImage}
                fill
                loading="eager"
                placeholder="blur"
                sizes="(max-width: 767px) 92vw, 42vw"
                src={lindyComputer}
              />
            </div>
            <p className={styles.imageCaption}>
              Quality assurance has strong opinions.
            </p>
          </div>
        </section>
      </div>

      <section aria-label="Areas of expertise" className={styles.capabilityBar}>
        <div className={styles.capabilityInner}>
          {capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </section>

      <SlideUp>
        <section className={styles.workSection}>
          <div className={styles.sectionIntro}>
            <h2>Ideas, tools, and field notes.</h2>
            <p>
              A working archive of what I learn while building production
              platforms and AI tooling.
            </p>
          </div>

          <div className={styles.destinationList}>
            {destinations.map((destination) => (
              <Link
                className={styles.destination}
                href={destination.href}
                key={destination.title}
              >
                <span className={styles.destinationTitle}>
                  {destination.title}
                </span>
                <span className={styles.destinationDescription}>
                  {destination.description}
                </span>
                <RiArrowRightUpLine
                  aria-hidden="true"
                  className={styles.destinationIcon}
                />
              </Link>
            ))}
          </div>
        </section>
      </SlideUp>

      <SlideUp>
        <section className={styles.contactSection}>
          <div>
            <h2>Building something complicated?</h2>
            <p>
              I help teams with platform architecture, internal AI tools,
              developer productivity, observability, and technical delivery.
            </p>
          </div>
          <a className={styles.contactAction} href="mailto:hello@ivansantos.me">
            Work with me
            <RiArrowRightUpLine aria-hidden="true" />
          </a>
          <a
            aria-label="View Ivan Santos on GitHub"
            className={styles.githubAction}
            href="https://github.com/pragmaticivan"
          >
            <RiGithubFill aria-hidden="true" />
          </a>
        </section>
      </SlideUp>
    </main>
  );
}
