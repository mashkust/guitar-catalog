import { buyGuitar, guitarData, sendComment, setFilteredGuitarsLength, setIsBasket, setIsBasketRemoval, setIsCommentModalOpened, setIsCoupon, setIsDisconnect, setIsDiscount, setIsGuitar, setIsSortInc, setIsSorting, setIsSuccessBasket, setIsSuccessModalOpened, setMaxPrice, setMinPrice, setSelectedStrings, setSelectedTypes } from './guitar-data';
import type { GuitarData } from './../types/types';
import { loadGuitars, loadGuitar, loadComments } from './guitar-data';
import { fakeComments, fakeCoupon, fakeDiscount, fakeGuitar, fakeGuitars, fakeNewComment} from '../mock';

describe('Reducer: guitarData', () => {
  it('should update guitars by load guitars', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, loadGuitars(fakeGuitars)))
      .toEqual({ guitars: fakeGuitars, isDataLoaded: true, isDataSending: false, comments:[], guitar: null, isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('should update guitar by load guitar', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state,loadGuitar(fakeGuitar)))
      .toEqual({ guitars: [], guitar: fakeGuitar, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('should update guitar by load comments', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state,loadComments(fakeComments)))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:fakeComments, isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly send comment', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state,sendComment(fakeNewComment)))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: fakeNewComment, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is success', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state,setIsSuccessModalOpened(true)))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: true, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is comment', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setIsCommentModalOpened(true)))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: true,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is sorting', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setIsSorting('price')))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: 'price', isSortInc: true, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is sort inc', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setIsSortInc(true)))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: 'price', isSortInc: true, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is minPrice', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setMinPrice('1900')))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '1900', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is maxPrice', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setMaxPrice('30000')))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '30000', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is selected types', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setSelectedTypes('electric')))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: ['electric'], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is selected strings', () => {
    const state: GuitarData = { guitars: [], guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setSelectedStrings(7)))
      .toEqual({ guitars: [], guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [7], filteredGuitarsLength:null, filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is filtered length', () => {
    const state: GuitarData = { guitars: fakeGuitars, guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setFilteredGuitarsLength(fakeGuitars.length)))
      .toEqual({ guitars: fakeGuitars, guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:fakeGuitars.length,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is bought guitars', () => {
    const state: GuitarData = { guitars: fakeGuitars, guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, buyGuitar(fakeGuitar)))
      .toEqual({ guitars: fakeGuitars, guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [fakeGuitar], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is success basket modal', () => {
    const state: GuitarData = { guitars: fakeGuitars, guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setIsSuccessBasket(true)))
      .toEqual({ guitars: fakeGuitars, guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: true, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is disconnect', () => {
    const state: GuitarData = { guitars: fakeGuitars, guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setIsDisconnect(false)))
      .toEqual({ guitars: fakeGuitars, guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is basket', () => {
    const state: GuitarData = { guitars: fakeGuitars, guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setIsBasket(true)))
      .toEqual({ guitars: fakeGuitars, guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: true, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is guitar', () => {
    const state: GuitarData = { guitars: fakeGuitars, guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setIsGuitar(fakeGuitar)))
      .toEqual({ guitars: fakeGuitars, guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: fakeGuitar, isBasketRemoval: false, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is basket removal', () => {
    const state: GuitarData = { guitars: fakeGuitars, guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setIsBasketRemoval(true)))
      .toEqual({ guitars: fakeGuitars, guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: true, isDiscount: 0, isCoupon: null});
  });

  it('correctly set is coupon', () => {
    const state: GuitarData = { guitars: fakeGuitars, guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setIsCoupon(fakeCoupon)))
      .toEqual({ guitars: fakeGuitars, guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: fakeCoupon});
  });

  it('correctly set is discount', () => {
    const state: GuitarData = { guitars: fakeGuitars, guitar: null, comments: [], isDataLoaded: false, isDataSending: false, isSuccessModalOpened: false, isCommentModalOpened: false,
      isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
      boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: 0, isCoupon: null};
    expect(guitarData.reducer(state, setIsDiscount(fakeDiscount)))
      .toEqual({ guitars: fakeGuitars, guitar: null, isDataLoaded: false, isDataSending: false, comments:[], isSuccessModalOpened: false, isCommentModalOpened: false,
        isSorting: null, isSortInc: null, minPrice: '', maxPrice: '', selectedTypes: [], selectedStrings: [], filteredGuitarsLength:null,filteredPriceMax:null,filteredPriceMin:null,
        boughtGuitars: [], isDisconnect: true, isSuccessBasketModal: false, isBasketModalOpened: false, isGuitar: null, isBasketRemoval: false, isDiscount: fakeDiscount, isCoupon: null});
  });
});


