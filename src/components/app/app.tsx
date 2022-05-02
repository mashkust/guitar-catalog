import {Route, BrowserRouter, Routes, generatePath} from 'react-router-dom';
import {AppRoute, LIST_OF_GUITAR} from '../../const';
import { useAppSelector } from '../../hooks/hooks';
import MainCard from '../main-card';
import NotFoundPage from '../notfound-page';

function App(): JSX.Element {
  const guitars= useAppSelector(({DATA}) => DATA.guitars);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainCard guitars = {guitars.slice(LIST_OF_GUITAR[0].rangeFrom,LIST_OF_GUITAR[0].rangeTo)}/>}
        />
        <Route
          path={generatePath(AppRoute.Page1)}
          element={<MainCard guitars = {guitars.slice(LIST_OF_GUITAR[0].rangeFrom,LIST_OF_GUITAR[0].rangeTo)} />}
        />
        <Route
          path={generatePath(AppRoute.Page2)}
          element={<MainCard guitars = {guitars.slice(LIST_OF_GUITAR[1].rangeFrom,LIST_OF_GUITAR[1].rangeTo)} />}
        />
        <Route
          path={generatePath(AppRoute.Page3)}
          element={<MainCard guitars = {guitars.slice(LIST_OF_GUITAR[2].rangeFrom,LIST_OF_GUITAR[2].rangeTo)}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
