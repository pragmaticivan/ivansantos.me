import { Language } from './language';

export interface Article {
  language: Language;
  content: string;
  path: string;
  title: string;
  date: string;
  description: string;
  draft: boolean;
  slug: string;
  image: string;
}
