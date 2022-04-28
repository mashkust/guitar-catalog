import {createSlice} from '@reduxjs/toolkit';
import { GuitarData } from '../types/types';
import {GUITAR_CARDS_COUNT, NameSpace} from '../const';

const initialState: GuitarData = {
  guitars: [],
  guitarCardsCount: GUITAR_CARDS_COUNT,
};


export const guitarData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadGuitars: (state, action) => {
      state.guitars = action.payload;
    },
  },
});

export const {
  loadGuitars,
} = guitarData.actions;
