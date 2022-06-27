import { createSlice } from '@reduxjs/toolkit';
import { GuitarData, GuitarTypes, SortType } from '../types/types';
import { NameSpace } from '../const';
import type { Comment } from './../types/types';
import { sortByParams } from '../utils';
import hashHistory from '../hash-history';
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
  filteredPriceMin:null,
  filteredPriceMax:null,
  boughtGuitars: [],
  quantity: 1,
  id: null,
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
    buyGuitar: (state, action) => {
      const { boughtGuitars } = state;
      const { payload } = action;
      boughtGuitars.push(payload);
    },
    deleteGuitar: (state, action) => {
      const { boughtGuitars } = state;
      const { payload } = action;
      state.boughtGuitars = boughtGuitars.filter((el) => el.id !== payload.id);
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setQuantity: (state, action) => {
      if (action.payload > 0) {
        state.quantity = action.payload;
        const boughtGuitar = state.boughtGuitars.find((el) => el.id === state.id);
        if (boughtGuitar) {
          boughtGuitar.quantity = state.quantity ;}
      }
      else {
        deleteGuitar(action.payload);
      }
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
  setId,
} = guitarData.actions;
