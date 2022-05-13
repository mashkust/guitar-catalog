import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { Guitar, NewReview, Comment } from '../types/types';
import { loadComments, loadGuitar, loadGuitars, sendComment } from './guitar-data';
import { errorHandle } from '../services/error-handle';
import { APIRoute } from '../const';


export const fetchGuitarsAction = createAsyncThunk(
  'data/fetchGuitars',
  async () => {
    try {
      const { data } = await api.get<Guitar[]>(APIRoute.Guitars);
      store.dispatch(loadGuitars(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchGuitarAction = createAsyncThunk(
  'data/fetchGuitar',
  async (guitarId: number) => {
    try {
      const { data } = await api.get<Guitar>(`${APIRoute.Guitar}${guitarId}`);
      store.dispatch(loadGuitar(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (guitarId: number) => {
    try {
      const { data } = await api.get<Comment[]>(`${APIRoute.Guitar}${guitarId}${APIRoute.Comments}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendCommentAction = createAsyncThunk(
  'data/sendComment',
  async ({ guitarId, userName, advantage, disadvantage, comment, rating }: NewReview) => {
    try {
      const data = { guitarId, userName, advantage, disadvantage, comment, rating };
      await api.post<NewReview>(APIRoute.Comments, data);
      store.dispatch(sendComment(false));
    } catch (error) {
      errorHandle(error);
    }
  },
);
