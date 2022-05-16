import { APIRoute } from '../const';
import { fakeGuitars } from '../mock';
import { createAPI } from '../services/api';
import { fetchGuitarsAction } from './api-actions';
import { loadGuitars } from './guitar-data';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import type { State } from '../types/types';
import { Action } from 'redux';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
        State,
        Action,
        ThunkDispatch<State, typeof api, Action>
    >(middlewares);


  it('should dispatch Load_Guitars when GET /guitars', async () => {
    mockAPI
      .onGet(APIRoute.Guitars)
      .reply(200, fakeGuitars);

    const store = mockStore();

    await store.dispatch(fetchGuitarsAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadGuitars.toString());
  });
});
