import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeStore } from '../mock';
import HistoryRouter from './history-route';
import SuccessComments from './success-comments';

const history = createMemoryHistory();

describe('Component: SuccessComments', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Details);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <SuccessComments />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Спасибо за ваш отзыв!/)).toBeInTheDocument();
  });
});
