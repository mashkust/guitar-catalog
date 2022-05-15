import {name, random } from 'faker';
import { COMMENT_CARDS_COUNT, TYPES } from './const';
import { Guitar, NewReview } from './types/types';
import {configureMockStore} from '@jedmao/redux-mock-store';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const makeFakeComment = ():NewReview => ({
  guitarId: getRandomInt(0,27),
  userName: name.title(),
  advantage: random.words(),
  disadvantage: random.words(),
  comment: random.words(),
  rating: getRandomInt(0,6),
});

export interface makeFakeGuitarProps {
  testName?: string,
}

export const makeFakeGuitar = ({testName}:makeFakeGuitarProps):Guitar => ({
  id:  getRandomInt(0,27),
  name: testName ?? random.word(),
  vendorCode: random.word(),
  type: TYPES.electric,
  previewImg: '',
  price: getRandomInt(0,100000),
  description: random.words(),
  rating: getRandomInt(0,6),
  stringCount: getRandomInt(0,8),
});

const mockStore = configureMockStore();

export const fakeStore = mockStore({
  DATA: {
    guitars: [makeFakeGuitar({}),makeFakeGuitar({})],
    guitar: makeFakeGuitar({}),
    comments: makeFakeComment(),
    isDataLoaded: true,
    isDataSending: false},
  COMMENT: {commentCardsCount: COMMENT_CARDS_COUNT},
});

export const fakeGuitars = [makeFakeGuitar({ testName: 'Test guitar' }),makeFakeGuitar({}),makeFakeGuitar({})];
