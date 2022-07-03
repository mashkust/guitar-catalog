import {name, random, date } from 'faker';
import { COMMENT_CARDS_COUNT, VALIDATION_COUPON} from './const';
import { Guitar, NewReview,Comment } from './types/types';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

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
  quantity:1,
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
export const fakeStore = mockStore({
  DATA: {
    guitars: [makeFakeGuitar({}),makeFakeGuitar({})],
    guitar: makeFakeGuitar({}),
    comments: makeFakeComment(),
    isDataLoaded: true,
    isDataSending: false,
    isSuccessModalOpened: false,
    isCommentModalOpened: false,
    isSorting: null,
    isSortInc: null,
    minPrice: null,
    maxPrice: null,
    selectedTypes: [],
    selectedStrings: [],
    filteredGuitarsLength: null,
    filteredPriceMin: null,
    filteredPriceMax: null,
    boughtGuitars: [],
    isDisconnect: true,
    isSuccessBasketModal: false,
    isBasketModalOpened: false,
    isGuitar: null,
    isBasketRemoval: false,
    isDiscount: 0,
    isCoupon: null,
  },
  COMMENT: {commentCardsCount: COMMENT_CARDS_COUNT},
});

export const fakeGuitars = [makeFakeGuitar({ testName: 'Test guitar' }),makeFakeGuitar({}),makeFakeGuitar({})];
export const fakeGuitar = makeFakeGuitar({ testName: 'Test guitar' });
export const fakeNewComment = makeFakeNewComment();
export const fakeCoupon = VALIDATION_COUPON[0];
export const fakeDiscount = getRandomInt(0,100);
export const fakeComments = [makeFakeComment(),makeFakeComment(),makeFakeComment()];
