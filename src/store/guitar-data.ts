import { createSlice } from '@reduxjs/toolkit';
import { GuitarData } from '../types/types';
import { NameSpace } from '../const';
import type { Comment } from './../types/types';
const initialState: GuitarData = {
  guitars: [],
  guitar: null,
  comments: [],
  isDataLoaded: false,
  isDataSending: false,
  isSuccessModalOpened: false,
  isCommentModalOpened: false,
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
  },
});

export const {
  loadGuitars,
  loadGuitar,
  loadComments,
  sendComment,
  setIsSuccessModalOpened,
  setIsCommentModalOpened,
} = guitarData.actions;
