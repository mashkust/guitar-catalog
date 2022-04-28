import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {guitarData} from './guitar-data';
import { guitarProcess } from './guitar-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: guitarData.reducer,
  [NameSpace.guitar]: guitarProcess.reducer,
});
