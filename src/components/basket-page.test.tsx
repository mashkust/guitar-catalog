import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../hash-history';
import { fakeStore} from '../mock';
import BasketPage from './basket-page';
import HistoryRouter from './history-router';

describe('Component:BasketPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={browserHistory} >
          <Routes>
            <Route
              path={'/'}
              element={<BasketPage />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);
    expect(screen.getByText(/Промокод на скидку/)).toBeInTheDocument();
  });
});
