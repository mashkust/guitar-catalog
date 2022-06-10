import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setIsSortInc, setIsSorting, setMaxPrice, setMinPrice, setStringsGroup, setTypesGroup} from '../store/guitar-data';
import { GuitarTypes, SortType } from '../types/types';

function Pagination(): JSX.Element {
  const filteredGuitarsLength = useAppSelector(({ DATA }) => DATA.filteredGuitarsLength);
  const {isSorting, isSortInc, maxPrice, minPrice, selectedStrings, selectedTypes } = useAppSelector(({ DATA }) => DATA);
  const dispatch = useAppDispatch();
  const sortType = localStorage.getItem('sortType');
  const sortDirection = localStorage.getItem('sortDirection');

  const priceMax = localStorage.getItem('maxPrice');
  const priceMin = localStorage.getItem('minPrice');
  const strings = localStorage.getItem('strings');
  const types = localStorage.getItem('types');
  useEffect(()=>{
    if (sortType && sortDirection) {
      if (!isSortInc && ! isSorting) {
        dispatch(setIsSorting(sortType as SortType));
        dispatch(setIsSortInc(sortDirection === 'true'));
      }
    }

    if ( !maxPrice && priceMax) {
      dispatch(setMaxPrice(priceMax));
    }

    if ( !minPrice && priceMin) {
      dispatch(setMinPrice(priceMin));
    }

    if (selectedStrings.length === 0 && strings) {
      dispatch(setStringsGroup(strings.split('&').map((el) => Number(el))));
    }

    if (selectedTypes.length === 0 && types ) {
      dispatch(setTypesGroup(types.split('&').map((el) => (el as GuitarTypes))));
    }


  },[]);

  return (
    <div className="pagination page-content__pagination" data-testid="pagination">
      <ul className="pagination__list">
        {document.location.hash.includes(AppRoute.Page2) ?
          <><li className="pagination__page pagination__page--prev" id="prev"><Link className="link pagination__page-link" to={AppRoute.Page1}>Назад</Link></li>
            <li className="pagination__page "><Link to={AppRoute.Page1} className="link pagination__page-link">1</Link></li>
            <li className="pagination__page"><Link to={AppRoute.Page2} className="link pagination__page-link pagination__page--active" type="button">2</Link></li>
            {filteredGuitarsLength && filteredGuitarsLength > 18 ?
              <li className="pagination__page"><Link to={AppRoute.Page3} className="link pagination__page-link">3</Link></li>
              : ''}
            {filteredGuitarsLength && filteredGuitarsLength > 18 ?
              <li className="pagination__page pagination__page--next" id="next"><Link to={AppRoute.Page3} className="link pagination__page-link" >Далее</Link>
              </li>
              : ''}
          </> : ''}
        {document.location.hash.includes(AppRoute.Page1) ?
          <>
            <li className="pagination__page "><Link to={AppRoute.Page1} className="link pagination__page-link pagination__page--active">1</Link></li>
            {filteredGuitarsLength && filteredGuitarsLength > 9 ?
              <li className="pagination__page"><Link to={AppRoute.Page2} className="link pagination__page-link " type="button">2</Link></li>
              : ''}
            {filteredGuitarsLength && filteredGuitarsLength > 18 ?
              <li className="pagination__page"><Link to={AppRoute.Page3} className="link pagination__page-link">3</Link></li>
              : ''}
            {filteredGuitarsLength && filteredGuitarsLength > 9 ?
              <li className="pagination__page pagination__page--next" id="next"><Link to={AppRoute.Page2} className="link pagination__page-link" >Далее</Link>
              </li>
              : ''}
          </> : ''}
        {document.location.hash.includes(AppRoute.Page3) ?
          <><li className="pagination__page pagination__page--prev" id="prev"><Link className="link pagination__page-link" to={AppRoute.Page2}>Назад</Link></li>
            <li className="pagination__page "><Link to={AppRoute.Page1} className="link pagination__page-link">1</Link></li>
            <li className="pagination__page"><Link to={AppRoute.Page2} className="link pagination__page-link " type="button">2</Link></li>
            <li className="pagination__page"><Link to={AppRoute.Page3} className="link pagination__page-link pagination__page--active">3</Link></li>
          </> : ''}
      </ul>
    </div>
  );
}

export default Pagination;
