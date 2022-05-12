import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { Guitar, NewReview, Comment} from '../types/types';
import {  loadComments, loadGuitar, loadGuitars, sendComment} from './guitar-data';
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

export const sendCommentAction = createAsyncThunk(
  'data/sendComment',
  async ({ guitarId, userName, advantage, disadvantage, comment, rating}:NewReview) => {
    const data =  { guitarId, userName, advantage, disadvantage, comment, rating};
    await api.post<NewReview>(APIRoute.Comments, data);
    store.dispatch(sendComment(false));
  },
);
