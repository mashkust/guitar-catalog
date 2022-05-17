import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import { AppRoute} from '../../const';
import App from './app';
import { fakeStore } from '../../mock';
import HistoryRouter from '../history-router';
import browserHistory from '../../browser-history';

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={fakeStore}>
    <HistoryRouter history={browserHistory}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routes was mounted', () => {
  it('should render "MainCard" when user navigate to "/page1"', () => {
    history.push(AppRoute.Page1);
    render(fakeApp);
  });

  it('should render "Details)" when user navigate to "/guitars/details/"', () => {
    history.push(AppRoute.Details);
    render(fakeApp);
  });

  it('should render "Description" when user navigate to "/guitars/descriprions/"', () => {
    history.push(AppRoute.Description);
    render(fakeApp);
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);
  });

});
