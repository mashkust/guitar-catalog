import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { AppRoute, COMMENT_CARDS_COUNT} from '../../const';
import App from './app';
import { makeFakeComment, makeFakeGuitar } from '../../mock';

const mockStore = configureMockStore();

const store = mockStore({
  DATA: {
    guitars: [makeFakeGuitar(),makeFakeGuitar()],
    guitar: makeFakeGuitar(),
    comments: makeFakeComment(),
    isDataLoaded: true,
    isDataSending: false},
  COMMENT: {commentCardsCount: COMMENT_CARDS_COUNT},
});

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainCard" when user navigate to "/page1"', () => {
    history.push(AppRoute.Page1);
    render(fakeApp);
  });

  it('should render "AuthScreen" when user navigate to "/guitars/details/"', () => {
    history.push(AppRoute.Details);
    render(fakeApp);
  });

  it('should render "WinScreen" when user navigate to "/guitars/descriprions/"', () => {
    history.push(AppRoute.Description);
    render(fakeApp);
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);
  });
});

