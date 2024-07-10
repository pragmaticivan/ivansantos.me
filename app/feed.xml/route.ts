import RSS from 'rss';
import { parse } from 'date-fns';
import { getAllArticles } from '../../lib/article';

export async function GET() {
  const articles = getAllArticles([
    'date',
    'draft',
    'slug',
    'title',
    'image',
    'content',
    'language',
    'description',
  ]).filter((article) => !article.draft);

  const feed = new RSS({
    title: 'Ivan Santos',
    description: "Ivan Santos's Blog",
    generator: 'RSS for Node and Next.js',
    feed_url: 'https://ivansantos.me/feed.xml',
    site_url: 'https://ivansantos.me/',
    copyright: `Copyright ${new Date().getFullYear().toString()}, Ivan Santos`,
    language: 'en-US',
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  if (articles) {
    for (const article of articles) {
      feed.item({
        title: article.title ?? '',
        description: article.description ?? '',
        url: `https://ivansantos.me/blog/${article.slug}/`,
        author: 'Ivan Santos',
        date: parse(
          article.date ?? new Date().toDateString(),
          'yyyy-MM-dd',
          new Date()
        ),
      });
    }
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
