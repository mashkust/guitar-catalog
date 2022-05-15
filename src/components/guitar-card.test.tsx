import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../const';
import {  fakeStore, makeFakeGuitar } from '../mock';
import GuitarCard from './guitar-card';

const history = createMemoryHistory();

describe('Component: GuitarCard', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Page1);
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <GuitarCard guitar = {makeFakeGuitar({})} />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText(/Купить/)).toBeInTheDocument();
  });
});
