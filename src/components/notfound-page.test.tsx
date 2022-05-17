import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from './history-router';
import NotFoundPage from './notfound-page';


describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <NotFoundPage />
      </HistoryRouter>,
    );

    const headerElement = screen.getByText('404');
    const linkElement = screen.getByText('Главная страница');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
