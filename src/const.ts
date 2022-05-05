import { List, Tab } from './types/types';

export enum AppRoute {
    Main = '/page_1',
    Page1 = '/page_1',
    Page2 = '/page_2',
    Page3 = '/page_3',
    Guitar = '/guitars/:id',
}

export enum APIRoute {
    Guitars = '/guitars',
    Comments = '/comments',
    Guitar = '/guitars/',
}

export enum NameSpace {
    data = 'DATA',
    guitar = 'GUITAR',
}

export const LIST_OF_GUITAR: List[] = [
  {
    page: '1',
    rangeFrom: 0,
    rangeTo: 9,
  },
  {
    page: '2',
    rangeFrom: 9,
    rangeTo: 18,
  },
  {
    page: '3',
    rangeFrom: 18,
    rangeTo: 26,
  },
];

export const movieTab: Tab[] = [
  {
    id: 1,
    title: 'Overview',
  },
  {
    id: 2,
    title: 'Details',
  },
];

export const GUITAR_CARDS_COUNT = 9;
export const GUITAR_CARDS_COUNT_STEP = 9;
