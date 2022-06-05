import { createSlice } from '@reduxjs/toolkit';
import { GuitarData, SortType } from '../types/types';
import { NameSpace } from '../const';
import type { Comment } from './../types/types';
import { sortByParams } from '../utils';
const initialState: GuitarData = {
  guitars: [],
  guitar: null,
  comments: null,
  isDataLoaded: false,
  isDataSending: false,
  isSuccessModalOpened: false,
  isCommentModalOpened: false,
  isSorting: null,
  isSortInc: null,
  minPrice: null,
  maxPrice: null,
};

export const guitarData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    setIsSuccessModalOpened: (state, action: { payload: boolean }) => {
      state.isSuccessModalOpened = action.payload;
    },
    setIsCommentModalOpened: (state, action: { payload: boolean }) => {
      state.isCommentModalOpened = action.payload;
    },

    // setSortParams: (state, action: { payload: { isSorting : SortType, isSortInc: boolean } }) => {
    //   const { isSortInc, isSorting } = action.payload;
    //   hashHistory.push({
    //     search: `sortType=${isSorting}&sortDirection=${isSortInc}`,
    //   });
    // },

    setIsSorting: (state, action: { payload: SortType }) => {
      state.isSorting = action.payload;
      if (state.isSortInc === null) {
        state.isSortInc = true;
      }
      const { guitars, isSortInc, isSorting } = state;
      state.guitars = sortByParams({ guitars, isSortInc, isSorting });
      // hashHistory.push({
      //   search: `sortType=${isSorting}&sortDirection=${isSortInc}`,
      // });
    },

    setIsSortInc: (state, action: { payload: boolean }) => {
      state.isSortInc = action.payload;
      if (state.isSorting === null) {
        state.isSorting = 'price';
      }
      const { guitars, isSortInc, isSorting } = state;
      state.guitars = sortByParams({ guitars, isSortInc, isSorting });
      // hashHistory.push({
      //   search: `sortType=${isSorting}&sortDirection=${isSortInc}`,
      // });
    },

    loadGuitars: (state, action) => {
      state.guitars = action.payload;
      state.isDataLoaded = true;
    },
    loadGuitar: (state, action) => {
      state.guitar = action.payload;
    },
    loadComments: (state, action: { payload: Comment[] }) => {
      state.comments = action.payload.sort((a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime());
      if (action.payload[0]) {
        const first = action.payload[0];
        if (action.payload.every((el) => Number(el.guitarId) === Number(first.guitarId))) {
          const guitar = state.guitars.find((el) =>  Number(el.id) === Number(first.guitarId));
          if (guitar) {
            guitar.commentsCount = action.payload.length;
          }
        }
      }
    },
    sendComment: (state, action) => {
      state.isDataSending = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.minPrice = action.payload;
    },
  },
});

export const {
  loadGuitars,
  loadGuitar,
  loadComments,
  sendComment,
  setIsSuccessModalOpened,
  setIsCommentModalOpened,
  setIsSorting,
  setIsSortInc,
  setMinPrice,
  setMaxPrice,
} = guitarData.actions;
