import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeGuitar, fakeStore } from '../mock';
import BasketAdding from './basket-adding';
import HistoryRouter from './history-router';

const history = createMemoryHistory();

describe('Component: BasketAdding', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Details);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <BasketAdding guitar={fakeGuitar} />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Добавить товар в корзину/)).toBeInTheDocument();
  });
});
