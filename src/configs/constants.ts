import { RegularObject } from './../types/types';

const LOCALIZATION_COOKIE_KEY = 'i18next';

enum Language {
  RU = 'ru',
  EN = 'en',
}

const githubAuthors: RegularObject = {
  ihar: 'https://github.com/IharAnt',
  oryngali: 'https://github.com/oryngalikarimzhan',
  stepan: 'https://github.com/Stepan9092',
};

const GRAPHQL_API = 'https://rickandmortyapi.com/graphql';
const queryMock = {
  query: `query ($id: ID!) { \n\tcharacter(id: $id) { \n\t\tid \n\t\tname \n\t\tstatus \n\t\tspecies \n\t\ttype \n\t\tgender \n\t\torigin { \n\t\t\tid \n\t\t\tname \n\t\t} \n\t\tlocation { \n\t\t\tid \n\t\t\tname \n\t\t} \n\t\timage \n\t\tepisode { \n\t\t\tid \n\t\t\tname \n\t\t\tcreated \n\t\t} \n\t\tcreated \n\t\t} \n}`,
  variables: `{ \n\t"id": 1 \n}`,
};

export { Language, LOCALIZATION_COOKIE_KEY, GRAPHQL_API, githubAuthors, queryMock };
