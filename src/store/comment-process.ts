import {createSlice} from '@reduxjs/toolkit';

import { NameSpace, COMMENT_CARDS_COUNT, COMMENT_CARDS_COUNT_STEP} from '../const';

import {CommentProcess} from '../types/types';

const initialState: CommentProcess = {
  commentCardsCount: COMMENT_CARDS_COUNT,
};

export const commentProcess = createSlice({
  name: NameSpace.comment,
  initialState,
  reducers: {
    incCountAction: (state) => {
      state.commentCardsCount += COMMENT_CARDS_COUNT_STEP;
    },
    resetCountAction: (state) => {
      state.commentCardsCount = COMMENT_CARDS_COUNT;
    },
  },
});

export const {resetCountAction,incCountAction} = commentProcess.actions;
