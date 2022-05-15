import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../browser-history';
import { fakeStore} from '../mock';
import GuitarPage from './guitar-page';
import HistoryRouter from './history-route';

describe('Component:GuitarPage', () => {
  it('should render GuitarPage Details', () => {
    window.scrollTo = jest.fn();
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={browserHistory} >
          <Routes>
            <Route
              path={'/'}
              element={<GuitarPage tab />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);
    expect(screen.getByText(/Артикул/)).toBeInTheDocument();
  });
});
