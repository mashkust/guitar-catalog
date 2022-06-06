import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeStore } from '../mock';
import HistoryRouter from './history-router';
import Pagination from './pagination';

const history = createMemoryHistory();

describe('Component: Pagination', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Page1);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <Pagination />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
