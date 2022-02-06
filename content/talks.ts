import { TalkYear } from "../types/talk";

export default [
  {
    year: '2021',
    summary: '',
    talks: [
      {
        title: 'Austin Go Meetup',
        url: 'https://www.meetup.com/atxgolang/',
        date: '2021-06-09',
        where: 'Austin Go Meetup',
        language: 'en',
        presentations: [
          {
            title: 'Going Serverless With Go',
            url: 'https://speakerdeck.com/pragmaticivan/going-serverless-with-go',
          },
        ],
      },
    ]
  },
] as TalkYear[];

