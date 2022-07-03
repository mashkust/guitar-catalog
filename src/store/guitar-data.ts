import { createSlice } from '@reduxjs/toolkit';
import { Guitar, GuitarData, GuitarTypes, SortType } from '../types/types';
import { NameSpace } from '../const';
import type { Comment } from './../types/types';
import { sortByParams } from '../utils';
import hashHistory from '../hash-history';
import {toast} from 'react-toastify';
const initialState: GuitarData = {
  guitars: [],
  guitar: null,
  comments: null,
  isDataLoaded: false,
  isDataSending: false,
  isSuccessModalOpened: false,
  isCommentModalOpened: false,
  isSorting: null,
  isSortInc: null,
  minPrice: null,
  maxPrice: null,
  selectedTypes: [],
  selectedStrings: [],
  filteredGuitarsLength: null,
  filteredPriceMin: null,
  filteredPriceMax: null,
  boughtGuitars: [],
  isDisconnect: true,
  isSuccessBasketModal: false,
  isBasketModalOpened: false,
  isGuitar: null,
  isBasketRemoval: false,
  isDiscount: 0,
  isCoupon: null,
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
    setIsSorting: (state, action: { payload: SortType }) => {
      state.isSorting = action.payload;
      if (state.isSortInc === null) {
        state.isSortInc = true;
      }
      const { guitars, isSortInc, isSorting } = state;
      state.guitars = sortByParams({ guitars, isSortInc, isSorting });
      window.localStorage.setItem('sortType',String(isSorting));
      window.localStorage.setItem('sortDirection',String(isSortInc));
      hashHistory.push({
        search: `sortType=${state.isSorting}?sortDirection=${state.isSortInc}`,
      });
    },
    setIsSortInc: (state, action: { payload: boolean }) => {
      state.isSortInc = action.payload;
      if (state.isSorting === null) {
        state.isSorting = 'price';
      }
      const { guitars, isSortInc, isSorting } = state;
      state.guitars = sortByParams({ guitars, isSortInc, isSorting });
      window.localStorage.setItem('sortType',String(isSorting));
      window.localStorage.setItem('sortDirection',String(isSortInc));
      hashHistory.push({
        search: `sortType=${isSorting}?sortDirection=${isSortInc}`,
      });
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
          const guitar = state.guitars.find((el) => Number(el.id) === Number(first.guitarId));
          if (guitar) {
            guitar.commentsCount = action.payload.length;
          }
        }
      }
    },
    sendComment: (state, action) => {
      state.isDataSending = action.payload;
    },
    setMinPrice: (state, action:{ payload: string | null}) => {
      if (action.payload === null || action.payload==='' || action.payload===undefined ) {
        window.localStorage.removeItem('minPrice');
      }
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action:{ payload: string | null}) => {
      if (action.payload === null || action.payload==='' || action.payload===undefined) {
        window.localStorage.removeItem('maxPrice');
      }
      state.maxPrice = action.payload;
    },
    setSelectedTypes: (state, action: { payload: GuitarTypes | null }) => {
      const { selectedTypes } = state;
      const { payload } = action;
      if (!payload) {
        state.selectedTypes = [];
      } else {
        if (selectedTypes.includes(payload)) {
          state.selectedTypes = selectedTypes.filter((el) => el !== payload);
        }
        else {
          selectedTypes.push(payload);
        }
        let fUkulele: number[] = [];
        let fElectric: number[] = [];
        let fAcoustc: number[] = [];
        if (state.selectedTypes.length > 0) {
          if (state.selectedTypes.includes('electric')) {
            fElectric = state.selectedStrings.filter((el) => el < 12);
          }
          if (state.selectedTypes.includes('ukulele')) {
            fUkulele = state.selectedStrings.filter((el) => el < 6);
          }
          if (state.selectedTypes.includes('acoustic')) {
            fAcoustc = state.selectedStrings.filter((el) => el > 4);
          }
          state.selectedStrings = Array.from(new Set([...fElectric, ...fUkulele, ...fAcoustc]));
        }
        if (state.selectedTypes.length === 0) {
          window.localStorage.removeItem('types');
        }
        if (state.selectedStrings.length === 0) {
          window.localStorage.removeItem('strings');
        }
      }
    },
    setTypesGroup: (state, action: { payload: GuitarTypes[] }) => {
      state.selectedTypes = action.payload;
    },
    setStringsGroup: (state, action: { payload: number[] }) => {
      state.selectedStrings = action.payload;
    },
    setSelectedStrings: (state, action: { payload: number | null }) => {
      const { selectedStrings } = state;
      const { payload } = action;
      if (!payload) {
        state.selectedStrings = [];
      } else {
        if (selectedStrings.includes(payload)) {
          state.selectedStrings = selectedStrings.filter((el) => el !== payload);
        }
        else {
          selectedStrings.push(payload);
        }
      }
      if (  state.selectedStrings.length === 0) {
        window.localStorage.removeItem('strings');
      }
    },
    setFilteredGuitarsLength: (state, action) => {
      state.filteredGuitarsLength = action.payload;
    },
    setFilteredPriceMin: (state, action) => {
      state.filteredPriceMin = action.payload;
    },
    setFilteredPriceMax: (state, action) => {
      state.filteredPriceMax = action.payload;
    },
    buyGuitar: (state, action: {payload : Guitar}) => {
      const { boughtGuitars } = state;
      const { payload } = action;
      const boughtGuitar = state.boughtGuitars.find((el) => el.id === payload.id);
      if (boughtGuitar) {
        boughtGuitar.quantity = (boughtGuitar.quantity || 1) + 1 ;
      }
      else {
        const newGuitar = {...payload};
        newGuitar.quantity = 1;
        boughtGuitars.push(newGuitar);
      }
    },
    deleteGuitar: (state, action) => {
      const { boughtGuitars } = state;
      const { payload } = action;
      state.boughtGuitars = boughtGuitars.filter((el) => el.id !== payload);
    },
    setQuantity: (state, action: {payload : {id:number, quantity: 'inc' | 'decr'}}) => {
      const {id, quantity} = action.payload;
      const boughtGuitar = state.boughtGuitars.find((el) => el.id === id);
      if (boughtGuitar) {
        boughtGuitar.quantity = quantity === 'inc' ?  (boughtGuitar.quantity || 1) + 1 : (boughtGuitar.quantity || 1) - 1;
        if (boughtGuitar.quantity < 1) {
          state.isBasketRemoval = true;
          boughtGuitar.quantity = (boughtGuitar.quantity || 0) + 1;
        }
      }
    },
    setQuantityText: (state, action: {payload : {id:number, quantity: number}}) => {
      const {id, quantity} = action.payload;
      const boughtGuitar = state.boughtGuitars.find((el) => el.id === id);
      if (boughtGuitar) {
        boughtGuitar.quantity = quantity;
      }
    },
    setIsDisconnect: (state, action ) => {
      state.isDisconnect = action.payload;
      if (!action.payload) {
        toast.error('Internet disconnected');
        state.isDisconnect = true;
      }
    },
    setIsSuccessBasket: (state, action) => {
      state.isSuccessBasketModal = action.payload;
    },
    setIsBasket: (state, action) => {
      state.isBasketModalOpened = action.payload;
    },
    setIsGuitar: (state, action) => {
      state.isGuitar = action.payload;
    },
    setIsBasketRemoval: (state, action) => {
      state.isBasketRemoval = action.payload;
    },
    setIsDiscount: (state, action) => {
      state.isDiscount = action.payload;
    },
    setIsCoupon: (state, action) => {
      state.isCoupon = action.payload;
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
  setIsSorting,
  setIsSortInc,
  setMinPrice,
  setMaxPrice,
  setSelectedTypes,
  setSelectedStrings,
  setFilteredGuitarsLength,
  setFilteredPriceMin,
  setFilteredPriceMax,
  setStringsGroup,
  setTypesGroup,
  buyGuitar,
  setQuantity,
  deleteGuitar,
  setIsDisconnect,
  setIsBasket,
  setIsSuccessBasket,
  setIsGuitar,
  setIsBasketRemoval,
  setIsDiscount,
  setQuantityText,
  setIsCoupon,
} = guitarData.actions;
