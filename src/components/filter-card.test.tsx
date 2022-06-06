import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeStore} from '../mock';
import FilterCard from './filter-card';
import HistoryRouter from './history-router';

const history = createMemoryHistory();

describe('Component: FilterCard', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Page1);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <FilterCard />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Фильтр/)).toBeInTheDocument();
  });
});
