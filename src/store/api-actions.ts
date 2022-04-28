import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { Guitar} from '../types/types';
import {  loadGuitars} from './guitar-data';
// import { saveToken, dropToken } from '../services/token';
import { APIRoute} from '../const';


export const fetchGuitarsAction = createAsyncThunk(
  'data/fetchGuitars',
  async () => {
    const { data } = await api.get<Guitar[]>(APIRoute.Guitars);
    store.dispatch( loadGuitars(data));
  },
);

// export const fetchGuitarAction= createAsyncThunk(
//   'data/fetchGuitar',
//   async (filmId: number) => {
//     try {
//       const {data} = await api.get<Film>(`${APIRoute.Guitar}${guitarId}`);
//       store.dispatch(loadFilm(data));
//     } catch (error) {
//       errorHandle(error);
//     }
//   },
// );
