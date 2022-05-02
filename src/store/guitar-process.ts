import {createSlice} from '@reduxjs/toolkit';

import { NameSpace, GUITAR_CARDS_COUNT, GUITAR_CARDS_COUNT_STEP} from '../const';

import {GuitarProcess} from '../types/types';

const initialState: GuitarProcess = {
  guitarCardsCount: GUITAR_CARDS_COUNT,
};

export const guitarProcess = createSlice({
  name: NameSpace.guitar,
  initialState,
  reducers: {
    incCountAction: (state) => {
      state.guitarCardsCount += GUITAR_CARDS_COUNT_STEP;
    },
    resetCountAction: (state) => {
      state.guitarCardsCount = GUITAR_CARDS_COUNT;
    },
  },
});

export const {resetCountAction } = guitarProcess.actions;
