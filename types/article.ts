export interface Article {
  language: 'pt-br' | 'en';
  content: string;
  path: string;
  title: string;
  date: string;
  description: string;
  draft: boolean;
  slug: string;
  image: string;
}
