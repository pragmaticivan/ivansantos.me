"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import styles from "./styles.module.scss";

const links = [
  { href: "/consulting", label: "Consulting" },
  { href: "/about", label: "About" },
  { href: "/uses", label: "Uses" },
  { href: "/blog", label: "Blog" },
  { href: "/open-source", label: "Open Source" },
  { href: "/indie-hacker", label: "Indie Hacker" },
];

const NavigationBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          aria-label="Ivan Santos - Go to homepage"
          className={styles.logo}
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <Image
            alt="Ivan Santos"
            height={58}
            priority
            src="/images/ivan-logo-black.png"
            width={150}
          />
        </Link>

        <button
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className={styles.menuButton}
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? (
            <RiCloseLine aria-hidden="true" />
          ) : (
            <RiMenu3Line aria-hidden="true" />
          )}
        </button>

        <nav
          aria-label="Main navigation"
          className={`${styles.menu} ${isOpen ? styles.open : ""}`}
          id="primary-navigation"
        >
          <ul>
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/blog" && pathname.startsWith("/blog/"));

              return (
                <li key={link.href}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={isActive ? styles.active : undefined}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
