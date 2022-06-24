import { Route, Routes } from 'react-router-dom';
import { AppRoute, LIST_OF_GUITAR } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import GuitarPage from '../guitar-page';
import MainPage from '../main-page';
import NotFoundPage from '../notfound-page';
import LoadingScreen from '../loading-screen';
import { useEffect, useState } from 'react';
import { setFilteredGuitarsLength, setFilteredPriceMax, setFilteredPriceMin } from '../../store/guitar-data';
import hashHistory from '../../hash-history';
import BasketPage from '../basket-page';

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

    let filterSearch = '?filters=false';

    if ( selectedStrings.length > 0 || selectedTypes.length > 0 ||  minPrice !== null  || maxPrice !== null ) {
      filterSearch = '?filters=true';
    }

    if (selectedStrings.length > 0) {
      const param1 = selectedStrings.map((el, i, arr) => el + (i === arr.length - 1 ? '' : '&')).join('');
      filterSearch += `?strings=${param1}`;
      window.localStorage.setItem('strings',String(param1));
    }
    if ( selectedTypes.length > 0 ) {
      const param2 = selectedTypes.map((el, i, arr) => el + (i === arr.length - 1 ? '' : '&')).join('');
      filterSearch += `?types=${param2}`;
      window.localStorage.setItem('types',String(param2));
    }

    if ( minPrice !== null ) {
      const param3 = minPrice;
      filterSearch += `?minPrice=${param3}`;
      window.localStorage.setItem('minPrice',String(param3));
    }

    if (maxPrice !== null) {
      const param4 = maxPrice;
      filterSearch += `?maxPrice=${param4}`;
      window.localStorage.setItem('maxPrice',String(param4));
    }

    const startIndex = hashHistory.location.search.indexOf('?filters');
    hashHistory.push({
      search: (startIndex !== -1 ?  hashHistory.location.search.slice(0, startIndex) : hashHistory.location.search) + filterSearch,
    });


  }, [maxPrice, minPrice, selectedTypes, selectedStrings, guitars]);

  useEffect(() => {
    dispatch(setFilteredGuitarsLength(filteredGuitars.length));
    dispatch(setFilteredPriceMax(filteredGuitars.slice().map((el)=>el.price).sort((a,b) => b - a)[0] && filteredGuitars.slice().map((el)=>el.price).sort((a,b) => b - a)[0]));
    dispatch(setFilteredPriceMin(filteredGuitars.slice().map((el)=>el.price).sort((a,b) => b - a)[0] && filteredGuitars.slice().map((el)=>el.price).sort((a,b) => b - a)[filteredGuitars.length-1] ));
  }, [filteredGuitars]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Page1}
        element={<MainPage guitars={filteredGuitars.slice(LIST_OF_GUITAR[0].rangeFrom, LIST_OF_GUITAR[0].rangeTo)} />}
      />
      <Route
        path={AppRoute.Page2}
        element={<MainPage guitars={filteredGuitars.slice(LIST_OF_GUITAR[1].rangeFrom, LIST_OF_GUITAR[1].rangeTo)} />}
      />
      <Route
        path={AppRoute.Page3}
        element={<MainPage guitars={filteredGuitars.slice(LIST_OF_GUITAR[2].rangeFrom, LIST_OF_GUITAR[2].rangeTo)} />}
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
      <Route
        path={AppRoute.Basket}
        element={<BasketPage />}
      />
    </Routes>
  );
}

export default App;
