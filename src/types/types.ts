import {store} from '../store/index.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type GuitarData = {
  guitars: Guitar[],
  guitarCardsCount: number,
};

export type Guitar = {
  id: number,
  name: string,
  vendorCode: string,
  type: string,
  previewImg: string,
  price: number,
  description: string,
  rating: number,
  stringCount: number,
}

export type GuitarProcess = {
  guitarCardsCount: number,
};


export type List = {
  page: string;
  rangeFrom: number;
  rangeTo: number;
};
