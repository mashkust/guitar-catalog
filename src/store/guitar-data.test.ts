import { guitarData, sendComment, setIsCommentModalOpened, setIsSuccessModalOpened } from './guitar-data';
import type { GuitarData } from './../types/types';
import { loadGuitars, loadGuitar, loadComments } from './guitar-data';
import { fakeComments, fakeGuitar, fakeGuitars, fakeNewComment} from '../mock';

describe('Reducer: guitarData', () => {
  it('should update guitars by load guitars', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false};
    expect(guitarData.reducer(state, loadGuitars(fakeGuitars)))
      .toEqual({ guitars: fakeGuitars, isDataLoaded: true, isDataSending: false, comments:[], guitar: null, isSuccessModalOpened: false, isCommentModalOpened: false});
  });

  it('should update guitar by load guitar', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false};
    expect(guitarData.reducer(state,loadGuitar(fakeGuitar)))
      .toEqual({ guitars: [], guitar: fakeGuitar, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false});
  });

  it('should update guitar by load comments', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false};
    expect(guitarData.reducer(state,loadComments(fakeComments)))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:fakeComments, isSuccessModalOpened: false, isCommentModalOpened: false});
  });

  it('correctly send comment', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false};
    expect(guitarData.reducer(state,sendComment(fakeNewComment)))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: fakeNewComment, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false});
  });

  it('correctly set is success', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false};
    expect(guitarData.reducer(state,setIsSuccessModalOpened(true)))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: true, isCommentModalOpened: false});
  });

  it('correctly set is comment', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false};
    expect(guitarData.reducer(state, setIsCommentModalOpened(true)))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: true});
  });
});
