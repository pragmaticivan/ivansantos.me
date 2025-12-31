// App constants
export const SITE_CONFIG = {
  name: "Ivan Santos",
  title: "Ivan Santos - Software Engineer",
  description:
    "Hello, I'm Ivan 👋 - I'm a software engineer, currently living in Austin, TX.",
  url: "https://ivansantos.me",
  ogImage: "/static/images/twitter-card.png",
} as const;

// Navigation
export const NAVIGATION_LINKS = [
  { href: "/about", label: "About" },
  { href: "/uses", label: "Uses" },
  { href: "/blog", label: "Blog" },
  { href: "/open-source", label: "Open Source" },
] as const;

// Social links
export const SOCIAL_LINKS = {
  github: "https://github.com/pragmaticivan",
  twitter: "https://twitter.com/pragmaticivan",
  linkedin: "https://www.linkedin.com/in/pragmaticivan",
  email: "mailto:hello@ivansantos.me",
} as const;

// Content types
export const CONTENT_TYPES = {
  article: "article",
  talk: "talk",
  project: "project",
} as const;
