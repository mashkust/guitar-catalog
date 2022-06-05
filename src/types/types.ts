import {store} from '../store/index.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type SortType = 'price' | 'rating';

export type GuitarData = {
  guitars: Guitar[],
  guitar: Guitar | null,
  comments: Comment[] | null,
  isDataLoaded: boolean,
  isDataSending: boolean,
  isSuccessModalOpened: boolean,
  isCommentModalOpened: boolean,
  isSorting: SortType | null,
  isSortInc: boolean | null,
  minPrice: string | null,
  maxPrice:string | null,
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
  commentsCount?: number
}

export type SortByParamsProps = {
  guitars: Guitar[],
  isSorting: SortType,
  isSortInc: boolean
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

export interface Types {
  [index: string]: string;
}

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

export type ErrorType = unknown;
