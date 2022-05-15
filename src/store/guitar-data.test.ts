import { guitarData } from './guitar-data';
import type { GuitarData } from './../types/types';
import { loadGuitars } from './guitar-data';
import { fakeGuitars } from '../mock';

describe('Reducer: guitarData', () => {
  it('should update guitars by load guitars', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false, isBookingModalOpened: false};
    expect(guitarData.reducer(state, loadGuitars(fakeGuitars)))
      .toEqual({ guitars: fakeGuitars, isDataLoaded: true, isDataSending: false, comments:[], guitar: null, isSuccessModalOpened: false, isCommentModalOpened: false, isBookingModalOpened: false});
  });
});
