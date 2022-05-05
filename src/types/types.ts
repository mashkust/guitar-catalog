import {store} from '../store/index.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type GuitarData = {
  guitars: Guitar[],
  guitar: Guitar | null,
  comments: Comment[],
  isDataLoaded: boolean,
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

export type Comment = {
  comment: string;
  guitarId: number;
  rating: number;
  id: string;
  userName: string;
  advantage: string;
  disadvantage: string;
  createAt: string;
};

export type GuitarProcess = {
  guitarCardsCount: number,
};


export type List = {
  page: string;
  rangeFrom: number;
  rangeTo: number;
};

export type Tab = {
  id: number;
  title: string;
}
