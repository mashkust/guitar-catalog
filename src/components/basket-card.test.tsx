import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import {  fakeGuitar, fakeStore } from '../mock';
import BasketCard from './basket-card';
import HistoryRouter from './history-router';

const history = createMemoryHistory();

describe('Component: BasketCard', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Basket);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <BasketCard guitar = {fakeGuitar} />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/струнная/)).toBeInTheDocument();
  });
});
