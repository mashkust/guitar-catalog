import {name, random } from 'faker';
import { TYPES } from './const';
import { Guitar, NewReview } from './types/types';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const makeFakeComment = () => ({
  guitarId: getRandomInt(0,27),
  userName: name.title(),
  advantage: random.words(),
  disadvantage: random.words(),
  comment: random.words(),
  rating: getRandomInt(0,6),
} as NewReview);

export const makeFakeGuitar = () => ({
  id:  getRandomInt(0,27),
  name: random.word(),
  vendorCode: random.word(),
  type: TYPES.electric,
  previewImg: '',
  price: getRandomInt(0,100000),
  description: random.words(),
  rating: getRandomInt(0,6),
  stringCount: getRandomInt(0,8),
} as Guitar);
