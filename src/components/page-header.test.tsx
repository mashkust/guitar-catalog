import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeStore} from '../mock';
import HistoryRouter from './history-router';
import PageHeader from './page-header';

const history = createMemoryHistory();

describe('Component: PageHeader', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Page1);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <PageHeader />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/О компании/)).toBeInTheDocument();
  });
});
