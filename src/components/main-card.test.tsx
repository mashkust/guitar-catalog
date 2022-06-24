import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../hash-history';
import { fakeStore, fakeGuitars } from '../mock';
import HistoryRouter from './history-router';
import MainPage from './main-page';

describe('Component:MainPage', () => {
  it('should render MainPage', () => {
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={browserHistory} >
          <Routes>
            <Route
              path={'/'}
              element={<MainPage guitars ={fakeGuitars} />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);
    expect(screen.getByText(/Каталог гитар/)).toBeInTheDocument();
  });
});
