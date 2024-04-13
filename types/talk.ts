export interface Presentation {
  title: string;
  url: string;
}

export interface Talk {
  title: string;
  url: string;
  date: string;
  where: string;
  language: 'pt-br' | 'en';
  presentations: Presentation[];
}

export interface TalkYear {
  year: string;
  summary: string;
  talks: Talk[];
}
