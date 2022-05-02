import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { Guitar} from '../types/types';
import {  loadComments, loadGuitar, loadGuitars} from './guitar-data';
// import { saveToken, dropToken } from '../services/token';
import { APIRoute} from '../const';


export const fetchGuitarsAction = createAsyncThunk(
  'data/fetchGuitars',
  async () => {
    const { data } = await api.get<Guitar[]>(APIRoute.Guitars);
    store.dispatch( loadGuitars(data));
  },
);

export const fetchGuitarAction = createAsyncThunk(
  'data/fetchGuitar',
  async (guitarId: number) => {
    const { data } = await api.get<Guitar>(`${APIRoute.Guitar}${guitarId}`);
    store.dispatch( loadGuitar(data));
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (guitarId: number) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.Guitar}${guitarId}${APIRoute.Comments}`);
    store.dispatch( loadComments(data));
  },
);
