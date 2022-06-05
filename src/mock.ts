import {name, random, date } from 'faker';
import { COMMENT_CARDS_COUNT} from './const';
import { Guitar, NewReview,Comment } from './types/types';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const makeFakeNewComment = ():NewReview => ({
  guitarId: getRandomInt(0,27),
  userName: name.title(),
  advantage: random.words(),
  disadvantage: random.words(),
  comment: random.words(),
  rating: getRandomInt(0,6),
});

export const makeFakeComment = ():Comment => ({
  guitarId: getRandomInt(0,27),
  userName: name.title(),
  advantage: random.words(),
  disadvantage: random.words(),
  comment: random.words(),
  rating: getRandomInt(0,6),
  id:String(getRandomInt(0,100)),
  createAt:String(date.past),
});

export interface makeFakeGuitarProps {
  testName?: string,
}

export const makeFakeGuitar = ({testName}:makeFakeGuitarProps):Guitar => ({
  id:  getRandomInt(0,27),
  name: testName ?? random.word(),
  vendorCode: random.word(),
  type: 'electric',
  previewImg: '',
  price: getRandomInt(0,100000),
  description: random.words(),
  rating: getRandomInt(0,6),
  stringCount: getRandomInt(0,8),
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
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
export const fakeGuitar = makeFakeGuitar({ testName: 'Test guitar' });
export const fakeNewComment = makeFakeNewComment();
export const fakeComments = [makeFakeComment(),makeFakeComment(),makeFakeComment()];
