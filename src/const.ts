import { List, Rating, Tab, Types } from './types/types';

export enum AppRoute {
    Page1 = '/page_1',
    Page2 = '/page_2',
    Page3 = '/page_3',
    Where= '/*',
    Company = '/*',
    Details = '/guitars/details/:id',
    Description = '/guitars/description/:id',
    Basket = '/guitars/basket/',
}

export enum APIRoute {
    Guitars = '/guitars/?_limit=27',
    Comments = '/comments',
    Guitar = '/guitars/',
    SortPrice = '/guitars?_sort=price',
    SortRating = '/guitars?_sort=rating&_order=asc',
}

export enum NameSpace {
    data = 'DATA',
    comment = 'COMMENT',
}

export const TYPES : Types = {
  electric: 'Электрогитара',
  ukulele: 'Укулеле',
  acoustic: 'Акустическая',
};

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

export const guitarTab: Tab[] = [
  {
    id: 1,
    title: 'Overview',
  },
  {
    id: 2,
    title: 'Details',
  },
];

export const RATING_VALUES: Rating[] = [
  {'value': 5},
  {'value': 4},
  {'value': 3},
  {'value': 2},
  {'value': 1},
];

export const MONTH: string [] = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];

export const COMMENT_CARDS_COUNT = 3;
export const STARS_MAX = 5;
export const COMMENT_CARDS_COUNT_STEP = 3;
export const MAX_MISTAKE_COUNT = 10;
export const indexSelect = 10;
