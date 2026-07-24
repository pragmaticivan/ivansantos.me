import assert from "node:assert/strict";
import { test } from "node:test";

const siteUrl = process.env.SITE_URL ?? "http://localhost:3011";
const canonicalOrigin = "https://www.ivansantos.me";
const correctedKedaPath =
  "/blog/2023-06-24-replacing-your-kubernetes-hpa-resources-with-keda-scaled-objects";
const legacyKedaPath =
  "/blog/2023-06-24-replacing-your-kubernetes-hpa-resoursces-with-keda-scaled-objects";
const articleImagePattern = /^https:\/\/www\.ivansantos\.me\//;
const bylinePattern = />By <a[^>]+href="\/about"[^>]*>Ivan Santos<\/a>/;
const canonicalSitemapPattern = new RegExp(
  `Sitemap: ${canonicalOrigin}/sitemap.xml`
);
const homepageCanonicalPattern = new RegExp(
  `<link rel="canonical" href="${canonicalOrigin}/?"`
);
const consultingHeadingPattern = /<h1[^>]*>Platform and AI engineering/;
const imageContentTypePattern = /image\//;
const jsonLdPattern = /<script type="application\/ld\+json">(.+?)<\/script>/g;
const legacySitemapOriginPattern = /<loc>https:\/\/ivansantos\.me/;
const misspelledResourcePattern = /hpa-resoursces/;
const openGraphImagePattern = /<meta property="og:image" content="([^"]+)"/;
const robotsAgentPattern = /User-Agent: \*/i;
const textContentTypePattern = /text\/plain/;
const titlePattern =
  /<title>Ivan Santos — Staff Engineer &amp; Engineering Consultant<\/title>/;

async function fetchPage(pathname) {
  const response = await fetch(`${siteUrl}${pathname}`);
  const body = await response.text();

  return { body, response };
}

function extractJsonLd(html) {
  return [...html.matchAll(jsonLdPattern)]
    .map((match) => JSON.parse(match[1]))
    .flatMap((value) => value["@graph"] ?? [value]);
}

test("publishes crawl directives and the canonical sitemap", async () => {
  const { body, response } = await fetchPage("/robots.txt");

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    textContentTypePattern
  );
  assert.match(body, robotsAgentPattern);
  assert.match(body, canonicalSitemapPattern);
});

test("sitemap uses one hostname and includes every public route", async () => {
  const { body, response } = await fetchPage("/sitemap.xml");

  assert.equal(response.status, 200);
  assert.doesNotMatch(body, legacySitemapOriginPattern);
  assert.doesNotMatch(body, misspelledResourcePattern);
  assert.match(
    body,
    new RegExp(`<loc>${canonicalOrigin}${correctedKedaPath}</loc>`)
  );

  for (const pathname of [
    "/",
    "/about",
    "/blog",
    "/consulting",
    "/indie-hacker",
    "/open-source",
    "/talks",
    "/uses",
  ]) {
    assert.match(body, new RegExp(`<loc>${canonicalOrigin}${pathname}</loc>`));
  }
});

test("permanently redirects the misspelled KEDA article URL", async () => {
  const response = await fetch(`${siteUrl}${legacyKedaPath}`, {
    redirect: "manual",
  });

  assert.equal(response.status, 308);
  assert.ok(response.headers.get("location")?.endsWith(correctedKedaPath));
});

test("homepage exposes descriptive metadata and a working social image", async () => {
  const { body, response } = await fetchPage("/");

  assert.equal(response.status, 200);
  assert.match(body, titlePattern);
  assert.match(body, homepageCanonicalPattern);

  const imageUrl = body.match(openGraphImagePattern)?.[1];
  assert.ok(imageUrl, "Expected an Open Graph image");

  const imageResponse = await fetch(imageUrl);
  assert.equal(imageResponse.status, 200);
  assert.match(
    imageResponse.headers.get("content-type") ?? "",
    imageContentTypePattern
  );
});

test("about page connects a ProfilePage to the canonical Person entity", async () => {
  const { body, response } = await fetchPage("/about");

  assert.equal(response.status, 200);

  const entities = extractJsonLd(body);
  const profilePage = entities.find(
    (entity) => entity["@type"] === "ProfilePage"
  );
  const person = entities.find((entity) => entity["@type"] === "Person");

  assert.ok(profilePage, "Expected ProfilePage structured data");
  assert.ok(person, "Expected Person structured data");
  assert.equal(person["@id"], `${canonicalOrigin}/#person`);
  assert.deepEqual(person.sameAs, [
    "https://github.com/pragmaticivan",
    "https://www.linkedin.com/in/pragmaticivan",
    "https://x.com/pragmaticivan",
  ]);
  assert.equal(profilePage.mainEntity["@id"], person["@id"]);
});

test("consulting page is indexable, specific, and describes its service", async () => {
  const { body, response } = await fetchPage("/consulting");

  assert.equal(response.status, 200);
  assert.match(body, consultingHeadingPattern);
  assert.match(
    body,
    new RegExp(`<link rel="canonical" href="${canonicalOrigin}/consulting"`)
  );

  const entities = extractJsonLd(body);
  const service = entities.find(
    (entity) => entity["@type"] === "ProfessionalService"
  );

  assert.ok(service, "Expected ProfessionalService structured data");
  assert.equal(service.provider["@id"], `${canonicalOrigin}/#person`);
});

test("articles expose absolute images, a stable author, and visible authorship", async () => {
  const pathname =
    "/blog/2026-01-18-keeping-sanity-with-go-modules-and-updates";
  const { body, response } = await fetchPage(pathname);

  assert.equal(response.status, 200);
  assert.match(body, bylinePattern);

  const entities = extractJsonLd(body);
  const article = entities.find((entity) => entity["@type"] === "Article");

  assert.ok(article, "Expected Article structured data");
  assert.equal(article.author["@id"], `${canonicalOrigin}/#person`);
  assert.match(article.image, articleImagePattern);
  assert.equal(article.mainEntityOfPage, `${canonicalOrigin}${pathname}`);
});
