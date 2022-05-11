import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { commentProcess } from './comment-process';
import {guitarData} from './guitar-data';

export const rootReducer = combineReducers({
  [NameSpace.data]: guitarData.reducer,
  [NameSpace.comment]: commentProcess.reducer,
});
