import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeStore } from '../mock';
import HistoryRouter from './history-router';
import ShowMore from './show-more';

const history = createMemoryHistory();

describe('Component: ShowMore', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Details);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <ShowMore />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Показать еще отзывы/)).toBeInTheDocument();
  });
});
