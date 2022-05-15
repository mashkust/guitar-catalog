import {commentProcess, incCountAction} from './comment-process';
import { COMMENT_CARDS_COUNT } from '../const';
import type {CommentProcess} from '../types/types';

describe('Reducer: commentProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(commentProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({commentCardsCount:COMMENT_CARDS_COUNT});
  });

  it('should increase comment cards count when incCountAction', () => {
    const state: CommentProcess = { commentCardsCount: 10 };
    expect(commentProcess.reducer(state, incCountAction())).toEqual({ commentCardsCount: 13 });
  });
});
