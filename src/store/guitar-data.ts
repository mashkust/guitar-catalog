import {createSlice} from '@reduxjs/toolkit';
import { GuitarData } from '../types/types';
import {NameSpace} from '../const';

const initialState: GuitarData = {
  guitars: [],
  guitar: null,
  comments: [],
  isDataLoaded: false,
};


export const guitarData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadGuitars: (state, action) => {
      state.guitars = action.payload;
      state.isDataLoaded = true;
    },
    loadGuitar: (state, action) => {
      state.guitar = action.payload;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const {
  loadGuitars,
  loadGuitar,
  loadComments,
} = guitarData.actions;
