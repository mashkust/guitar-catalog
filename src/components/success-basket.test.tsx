import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeStore } from '../mock';
import HistoryRouter from './history-router';
import SuccessBasket from './success-basket';

const history = createMemoryHistory();

describe('Component: SuccessBasket', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Details);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <SuccessBasket />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Товар успешно добавлен в корзину/)).toBeInTheDocument();
  });
});
