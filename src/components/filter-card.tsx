import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../const';
import hashHistory from '../hash-history';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setMaxPrice, setMinPrice, setSelectedStrings, setSelectedTypes } from '../store/guitar-data';

function FilterCard(): JSX.Element {
  const guitars = useAppSelector(({ DATA }) => DATA.guitars);
  const { maxPrice, minPrice, selectedTypes, selectedStrings,filteredPriceMax,filteredPriceMin } = useAppSelector(({ DATA }) => DATA);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const arrPrice = guitars.slice().map((el) => el.price);
  let max=Math.max(...arrPrice);
  let min=Math.min(...arrPrice);

  if (filteredPriceMax!== null && filteredPriceMax!== undefined)
  {max=filteredPriceMax;}

  if (filteredPriceMin!== null && filteredPriceMin!== undefined)
  {min=filteredPriceMin;}

  const compareValues = () => {
    if (Number(maxPrice) < Number(minPrice) && maxPrice !== null && minPrice !== null) {
      if (Number(maxPrice) < min) {
        dispatch(setMaxPrice(String(min)));
      }
      else if (Number(minPrice) > max) {
        dispatch(setMinPrice(String(max)));
      }
      else {
        dispatch(setMaxPrice(minPrice));
        dispatch(setMinPrice(maxPrice));
      }
    }
  };

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Цена, ₽</legend>
        <div className="catalog-filter__price-range">
          <div className="form-input">
            <label className="visually-hidden">Минимальная цена</label>
            <input type="number" placeholder={String(min)} id="priceMin" name="от" min="0" value={minPrice || ''}
              onKeyPress={(evt) => {
                const { key } = evt;
                if (key === '-' || key === '.' || key === 'e' || key === ',') {
                  evt.preventDefault();
                }
              }}
              onChange={(evt) => dispatch(setMinPrice(evt.currentTarget.value))}
              onBlur={() => {
                if (Number(minPrice) < min ) {
                  minPrice !== '' ? dispatch(setMinPrice(String(min))) : dispatch(setMinPrice(''));
                  minPrice !== null && minPrice !== '' ? dispatch(setMinPrice(String(min))) : dispatch(setMinPrice(''));
                }
                if (Number(minPrice) > max) {
                  if (minPrice !== '' && maxPrice !== null) { dispatch(setMinPrice(maxPrice));}
                  else { dispatch(setMinPrice(String(max)));}
                } else { compareValues(); }
                navigate({
                  pathname: AppRoute.Page1,
                  search: hashHistory.location.search,
                });
              }}
            />
          </div>
          <div className="form-input">
            <label className="visually-hidden">Максимальная цена</label>
            <input type="number" placeholder={String(max)} id="priceMax" name="до" min="0" value={maxPrice || ''}
              onKeyPress={(evt) => {
                const { key } = evt;
                if (key === '-' || key === '.' || key === 'e' || key === ',') {
                  evt.preventDefault();
                }
              }}
              onChange={(evt) => {
                dispatch(setMaxPrice(evt.currentTarget.value));
              }}
              onBlur={() => {
                if (Number(maxPrice) > max) {
                  dispatch(setMaxPrice(String(max)));
                }
                if (Number(maxPrice) < min && maxPrice !== null) {
                  if (minPrice !== '' && minPrice !== null) {
                    maxPrice !== '' ? dispatch(setMaxPrice(minPrice)) : dispatch(setMaxPrice(null));
                  }
                  else if (minPrice === '' || minPrice === null) {
                    maxPrice !== '' ? dispatch(setMaxPrice(String(min))) : dispatch(setMaxPrice(null));
                  }
                }
                else {compareValues(); }
                navigate({
                  pathname: AppRoute.Page1,
                  search: hashHistory.location.search,
                });
              }}
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="acoustic" name="acoustic" checked={selectedTypes && selectedTypes.includes('acoustic')}
            onChange={() => {
              dispatch(setSelectedTypes('acoustic'));
              navigate({
                pathname: AppRoute.Page1,
                search: hashHistory.location.search,
              });
            }}
          />
          <label htmlFor="acoustic">Акустические гитары</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="electric" name="electric" checked={selectedTypes && selectedTypes.includes('electric')}
            onChange={() => {
              dispatch(setSelectedTypes('electric'));
              navigate({
                pathname: AppRoute.Page1,
                search: hashHistory.location.search,
              });
            }}
          />
          <label htmlFor="electric">Электрогитары</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="ukulele" name="ukulele" checked={selectedTypes && selectedTypes.includes('ukulele')}
            onChange={() => {
              dispatch(setSelectedTypes('ukulele'));
              navigate({
                pathname: AppRoute.Page1,
                search: hashHistory.location.search,
              });
            }}
          />
          <label htmlFor="ukulele">Укулеле</label>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="4-strings" name="4-strings" checked={selectedStrings && selectedStrings.includes(4)} disabled={selectedTypes && selectedTypes.length !== 0 && !selectedTypes.includes('ukulele') && !selectedTypes.includes('electric')}
            onChange={() => {
              dispatch(setSelectedStrings(4));
              navigate({
                pathname: AppRoute.Page1,
                search: hashHistory.location.search,
              });
            }}
          />
          <label htmlFor="4-strings">4</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="6-strings" name="6-strings" checked={selectedStrings && selectedStrings.includes(6)} disabled={selectedTypes && selectedTypes.length !== 0 && !selectedTypes.includes('acoustic') && !selectedTypes.includes('electric')}
            onChange={() => {
              dispatch(setSelectedStrings(6));
              navigate({
                pathname: AppRoute.Page1,
                search: hashHistory.location.search,
              });
            }}
          />
          <label htmlFor="6-strings">6</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="7-strings" name="7-strings" checked={selectedStrings && selectedStrings.includes(7)} disabled={selectedTypes && selectedTypes.length !== 0 && !selectedTypes.includes('acoustic') && !selectedTypes.includes('electric')}
            onChange={() => {
              dispatch(setSelectedStrings(7));
              navigate({
                pathname: AppRoute.Page1,
                search: hashHistory.location.search,
              });
            }}
          />
          <label htmlFor="7-strings">7</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="12-strings" name="12-strings" checked={selectedStrings && selectedStrings.includes(12)} disabled={selectedTypes && selectedTypes.length !== 0 && !selectedTypes.includes('acoustic')}
            onChange={() => {
              dispatch(setSelectedStrings(12));
              navigate({
                pathname: AppRoute.Page1,
                search: hashHistory.location.search,
              });
            }}
          />
          <label htmlFor="12-strings">12</label>
        </div>
      </fieldset>
      <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset"
        onClick={() => {
          navigate({
            pathname: AppRoute.Page1,
            search: hashHistory.location.search,
          });
          dispatch(setMinPrice(null));
          dispatch(setMaxPrice(null));
          dispatch(setSelectedTypes(null));
          dispatch(setSelectedStrings(null));
        }}
      >Очистить
      </button>
    </form>
  );
}

export default FilterCard;
