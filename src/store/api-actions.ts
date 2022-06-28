import { createAsyncThunk } from '@reduxjs/toolkit';
import { Guitar, NewReview, Comment, AppDispatch, State } from '../types/types';
import { loadComments, loadGuitar, loadGuitars, sendComment, setIsDisconnect } from './guitar-data';
import { errorHandle } from '../services/error-handle';
import { APIRoute } from '../const';
import { AxiosInstance } from 'axios';


export const fetchGuitarsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGuitars',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Guitar[]>(APIRoute.Guitars);
      dispatch(loadGuitars(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchGuitarAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGuitar',
  async (guitarId, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Guitar>(`${APIRoute.Guitar}${guitarId}`);
      dispatch(loadGuitar(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (guitarId, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Comment[]>(`${APIRoute.Guitar}${guitarId}${APIRoute.Comments}`);
      dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendCommentAction = createAsyncThunk<void, NewReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/sendComment',
  async ({ guitarId, userName, advantage, disadvantage, comment, rating }, {dispatch, extra: api} ) => {
    try {
      const data = { guitarId, userName, advantage, disadvantage, comment, rating };
      await api.post<NewReview>(APIRoute.Comments, data);
      dispatch(sendComment(false));
    } catch (error) {
      dispatch(sendComment(true));
      errorHandle(error);
    }
  },
);
