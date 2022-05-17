import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeGuitars, fakeStore } from '../mock';
import CatalogCard from './catalog-card';
import HistoryRouter from './history-router';

const history = createMemoryHistory();

describe('Component: CatalogCard', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Page1);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <CatalogCard guitars = {fakeGuitars} />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Сортировать:/)).toBeInTheDocument();
  });
});
