import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeGuitar, fakeStore } from '../mock';
import BasketRemoval from './basket-removal';
import HistoryRouter from './history-router';

const history = createMemoryHistory();

describe('Component: BasketRemoval', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Basket);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <BasketRemoval guitar={fakeGuitar} />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Удалить этот товар/)).toBeInTheDocument();
  });
});
