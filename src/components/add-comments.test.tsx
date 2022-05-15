import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../const';
import { fakeStore, makeFakeGuitar } from '../mock';
import AddComments from './add-comments';
import HistoryRouter from './history-route';

const history = createMemoryHistory();

describe('Component: AddComments', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Details);
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <AddComments guitar={makeFakeGuitar({})} />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Ваше Имя/)).toBeInTheDocument();
  });
});
