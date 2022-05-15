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
  isBookingModalOpened: false,
};


export const guitarData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    setIsSuccessModalOpened: (state, action: { payload: boolean }) => {
      state.isSuccessModalOpened = action.payload;
    },
    setIsBookingModalOpened: (state, action: { payload: boolean }) => {
      state.isBookingModalOpened= action.payload;
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
  setIsBookingModalOpened,
} = guitarData.actions;
