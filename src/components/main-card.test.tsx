import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../browser-history';
//import { AppRoute } from '../const';
import { fakeStore, fakeGuitars } from '../mock';
import HistoryRouter from './history-route';
import MainCard from './main-card';

describe('Component:MainCard', () => {
  it('should render MainCard', () => {
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={browserHistory} >
          <Routes>
            <Route
              path={'/'}
              element={<MainCard guitars ={fakeGuitars} />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);
    expect(screen.getByText(/Каталог гитар/)).toBeInTheDocument();
  });
});
