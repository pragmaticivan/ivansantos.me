// App constants
export const SITE_CONFIG = {
  name: "Ivan Santos",
  title: "Ivan Santos — Staff Engineer & Engineering Consultant",
  description:
    "Staff engineer and engineering consultant helping teams build shared platforms, production AI tooling, and stronger engineering practices.",
  url: "https://www.ivansantos.me",
  ogImage: "/opengraph-image",
} as const;

// Navigation
export const NAVIGATION_LINKS = [
  { href: "/consulting", label: "Consulting" },
  { href: "/about", label: "About" },
  { href: "/uses", label: "Uses" },
  { href: "/blog", label: "Blog" },
  { href: "/open-source", label: "Open Source" },
] as const;

// Social links
export const SOCIAL_LINKS = {
  github: "https://github.com/pragmaticivan",
  twitter: "https://x.com/pragmaticivan",
  linkedin: "https://www.linkedin.com/in/pragmaticivan",
  email: "mailto:hello@ivansantos.me",
} as const;

// Content types
export const CONTENT_TYPES = {
  article: "article",
  talk: "talk",
  project: "project",
} as const;
