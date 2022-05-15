import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import {  fakeStore, makeFakeGuitar } from '../mock';
import GuitarCard from './guitar-card';
import HistoryRouter from './history-route';

const history = createMemoryHistory();

describe('Component: GuitarCard', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Page1);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <GuitarCard guitar = {makeFakeGuitar({})} />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Купить/)).toBeInTheDocument();
  });
});
