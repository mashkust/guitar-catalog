import { Route, Routes } from 'react-router-dom';
import { AppRoute, LIST_OF_GUITAR } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import GuitarPage from '../guitar-page';
import MainCard from '../main-card';
import NotFoundPage from '../notfound-page';
import LoadingScreen from '../loading-screen';
import { useEffect, useState } from 'react';
import { setFilteredGuitarsLength } from '../../store/guitar-data';

function App(): JSX.Element {
  const guitars = useAppSelector(({ DATA }) => DATA.guitars);
  const isDataLoaded = useAppSelector(({ DATA }) => DATA.isDataLoaded);
  const maxPrice = useAppSelector(({ DATA }) => DATA.maxPrice);
  const minPrice = useAppSelector(({ DATA }) => DATA.minPrice);
  const selectedTypes = useAppSelector(({ DATA }) => DATA.selectedTypes);
  const selectedStrings = useAppSelector(({ DATA }) => DATA.selectedStrings);

  const dispatch = useAppDispatch();
  const [filteredGuitars, setFilteredGuitars] = useState(guitars);

  useEffect(() => {
    setFilteredGuitars(guitars.slice(0).filter((el) => (maxPrice === null || el.price <= Number(maxPrice))
        && (minPrice === null || el.price >= Number(minPrice))
        && (selectedStrings.length === 0 ? true : selectedStrings.includes(el.stringCount))
        && (selectedTypes.length === 0 ? true : selectedTypes.includes(el.type))));
  }, [maxPrice, minPrice, selectedTypes, selectedStrings, guitars]);

  useEffect(() => {
    dispatch(setFilteredGuitarsLength(filteredGuitars.length));
  }, [filteredGuitars.length]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Page1}
        element={<MainCard guitars={filteredGuitars.slice(LIST_OF_GUITAR[0].rangeFrom, LIST_OF_GUITAR[0].rangeTo)} />}
      />
      <Route
        path={AppRoute.Page2}
        element={<MainCard guitars={filteredGuitars.slice(LIST_OF_GUITAR[1].rangeFrom, LIST_OF_GUITAR[1].rangeTo)} />}
      />
      <Route
        path={AppRoute.Page3}
        element={<MainCard guitars={filteredGuitars.slice(LIST_OF_GUITAR[2].rangeFrom, LIST_OF_GUITAR[2].rangeTo)} />}
      />
      <Route
        path={AppRoute.Details}
        element={<GuitarPage tab />}
      />
      <Route
        path={AppRoute.Description}
        element={<GuitarPage tab={false} />}
      />
      <Route
        path="/*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
