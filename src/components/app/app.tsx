import {Route, BrowserRouter, Routes, generatePath} from 'react-router-dom';
import {AppRoute, LIST_OF_GUITAR} from '../../const';
import { useAppSelector } from '../../hooks/hooks';
import GuitarPage from '../guitar-page';
import MainCard from '../main-card';
import NotFoundPage from '../notfound-page';
import LoadingScreen from '../loading-screen';

function App(): JSX.Element {
  const guitars= useAppSelector(({DATA}) => DATA.guitars);
  const isDataLoaded= useAppSelector(({DATA}) => DATA.isDataLoaded);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainCard guitars = {guitars.slice(LIST_OF_GUITAR[0].rangeFrom,LIST_OF_GUITAR[0].rangeTo)}/>}
        />
        <Route
          path={AppRoute.Page2}
          element={<MainCard guitars = {guitars.slice(LIST_OF_GUITAR[1].rangeFrom,LIST_OF_GUITAR[1].rangeTo)} />}
        />
        <Route
          path={AppRoute.Page3}
          element={<MainCard guitars = {guitars.slice(LIST_OF_GUITAR[2].rangeFrom,LIST_OF_GUITAR[2].rangeTo)}/>}
        />
        <Route
          path={AppRoute.Details}
          element={<GuitarPage tab/>}
        />
        <Route
          path={AppRoute.Description}
          element={<GuitarPage tab = {false}/>}
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
