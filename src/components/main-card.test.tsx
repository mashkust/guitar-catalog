import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import { fakeStore, fakeGuitars } from '../mock';
import MainCard from './main-card';

describe('Component:MainCard', () => {
  it('should render MainCard', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Routes>
            <Route
              path={AppRoute.Page1}
              element={<MainCard guitars ={fakeGuitars} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>);
    expect(screen.getByText(/Каталог гитар/)).toBeInTheDocument();
  });
});
