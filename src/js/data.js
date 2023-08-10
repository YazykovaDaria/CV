import graph from '../assets/img/graphGl.png';
import rss from '../assets/img/agregator.png';
import threetter from '../assets/img/threetter.png';
import song from '../assets/img/song.png';

export const projects = [
  {
    title: 'RSS-agregator',
    description: 'An application that allows adding, reading, and updating RSS feeds',
    stack: 'JS, Yup, i18next, on-сhange, axios, Bootstrap',
    gitLink: 'https://github.com/YazykovaDaria/frontend-project-lvl3',
    demoLink: 'https://rss-agregator-chi.vercel.app/',
    img: rss
  },
  {
    title: 'Graphiql-app',
    description: 'The GraphQL Playground is a development tool that provides a streamlined environment for exploring and interacting with the \'Rick and Morty\' API using GraphQL',
    stack: 'TS, React, Redux Toolkit, React Hook Form, Firebase, i18next, Material UI',
    gitLink: 'https://github.com/YazykovaDaria/graphiql-app',
    demoLink: 'https://graphiql-app-iota.vercel.app/',
    img: graph
  },
  {
    title: 'Twitter-clone',
    description: 'The application is a simplified clone of the social network Twitter',
    stack: 'TS, React, Redux toolkit, Tailwind CSS, I18next, Formik, Yup',
    gitLink: 'https://github.com/YazykovaDaria/rs-clone',
    demoLink: 'https://threetter.netlify.app/',
    img: threetter
  },
  {
    title: 'SongQuiz',
    description: 'Quiz about songs by Belarusian musicians',
    stack: 'JS, SCSS',
    gitLink: 'https://github.com/YazykovaDaria/RS-school-JS-FE-Course-2022Q3/tree/songbird',
    demoLink: ' https://yazykovadaria.github.io/RS-school-JS-FE-Course-2022Q3/songquiz/#main',
    img: song
  }
]
