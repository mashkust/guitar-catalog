import {store} from '../store/index.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type GuitarData = {
  guitars: Guitar[],
  guitar: Guitar | null,
  comments: Comment[],
  isDataLoaded: boolean,
  isDataSending: boolean,
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

export type NewReview = {
  guitarId: number,
  userName: string,
  advantage: string,
  disadvantage: string,
  comment: string,
  rating: number,
};

export interface Comment extends NewReview {
  id: string,
  createAt: string,
}

export type CommentProcess = {
  commentCardsCount: number,
};


export type List = {
  page: string;
  rangeFrom: number;
  rangeTo: number;
};

export type Tab = {
  id: number;
  title: string;
};

export type Rating = {
  value: number;
}
