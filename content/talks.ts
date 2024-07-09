import { Language } from '../types/language';
import { TalkYear } from '../types/talk';

const talkYear: TalkYear[] = [
  {
    year: '2023',
    summary: '',
    talks: [
      {
        title: 'Roga DX',
        url: 'https://rogadx.com/',
        date: '2023-10-06',
        where: 'Maceió-AL/Brazil',
        language: Language.PTBR,
        presentation: {
          title:
            'Introdução à Monitoramento e Observabilidade em aplicações modernas',
          url: 'https://speakerdeck.com/pragmaticivan/introducao-a-observabilidade-em-aplicacoes-modernas-rogadx-2023',
        },
      },
      {
        title: 'Alagoas Dev Day',
        url: 'https://rogadx.com/',
        date: '2023-10-06',
        where: 'Maceió-AL/Brazil',
        language: Language.PTBR,
        presentation: {
          title: 'Talk 1',
          url: 'https://speakerdeck.com/pragmaticivan/introducao-a-observabilidade-em-aplicacoes-modernas-rogadx-2023',
        },
      },
    ],
  },
  {
    year: '2021',
    summary: '',
    talks: [
      {
        title: 'Austin Go Meetup',
        url: 'https://www.meetup.com/atxgolang/',
        date: '2021-06-09',
        where: 'Austin Go Meetup',
        language: Language.EN,
        presentation: {
          title: 'Going Serverless With Go',
          url: 'https://speakerdeck.com/pragmaticivan/going-serverless-with-go',
        },
      },
    ],
  },
];

export default talkYear;
