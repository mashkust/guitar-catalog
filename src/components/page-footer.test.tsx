import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeStore} from '../mock';
import HistoryRouter from './history-router';
import PageFooter from './page-footer';

const history = createMemoryHistory();

describe('Component: PageFooter', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Page1);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <PageFooter />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Сервис-центры/)).toBeInTheDocument();
  });
});
