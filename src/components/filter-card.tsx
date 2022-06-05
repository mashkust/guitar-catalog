import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setMaxPrice, setMinPrice, setSelectedStrings, setSelectedTypes } from '../store/guitar-data';

function FilterCard(): JSX.Element {
  const guitars = useAppSelector(({ DATA }) => DATA.guitars);
  const {maxPrice, minPrice, selectedTypes, selectedStrings} = useAppSelector(({ DATA }) => DATA);
  const dispatch = useAppDispatch();

  const arrPrice = guitars.slice().map((el)=> el.price);
  const max = Math.max(...arrPrice);
  const min = Math.min(...arrPrice);
  const compareValues = () => {
    if (Number(maxPrice) < Number(minPrice) && maxPrice !== '' && minPrice !== '') {
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

  useEffect(()=> {
   console.log('s')
  },[minPrice, maxPrice,selectedTypes,selectedStrings],
  )

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Цена, ₽</legend>
        <div className="catalog-filter__price-range">
          <div className="form-input">
            <label className="visually-hidden">Минимальная цена</label>
            <input type="number" placeholder={String(min)} id="priceMin" name="от" min="0" value={minPrice}
              onKeyPress={(evt) => {
                const {key} = evt;
                if (key === '-' || key === '.'|| key === 'e' || key === ',') {
                  evt.preventDefault();
                }}}
              onChange={(evt) =>  dispatch(setMinPrice(evt.currentTarget.value))}
              onBlur = {()=> {
                if (Number(minPrice) < min) {
                  dispatch(setMinPrice(String(min)));
                }
                if (Number(minPrice) > max ) {
                  dispatch(setMinPrice(String(max)));
                }
                compareValues();
              }}
            />
          </div>
          <div className="form-input">
            <label className="visually-hidden">Максимальная цена</label>
            <input type="number" placeholder={String(max)} id="priceMax" name="до" min="0" value={maxPrice}
              onKeyPress={(evt) => {
                const {key} = evt;
                if (key === '-' || key === '.' || key === 'e' || key === ',') {
                  evt.preventDefault();
                }}}
              onChange={(evt) => {
                dispatch(setMaxPrice(evt.currentTarget.value));
              }}
              onBlur = {()=> {
                if (Number(maxPrice) > max ) {
                  dispatch(setMaxPrice(String(max)));
                }
                if (Number(maxPrice) < min ) {
                  dispatch(setMaxPrice(String(min)));
                }
                compareValues();
              }}
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="acoustic" name="acoustic" checked={selectedTypes.includes('acoustic')}
            onChange = {()=>dispatch(setSelectedTypes('acoustic'))}
          />
          <label htmlFor="acoustic">Акустические гитары</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="electric" name="electric" checked={selectedTypes.includes('electric')}
            onChange = {()=>dispatch(setSelectedTypes('electric'))}
          />
          <label htmlFor="electric">Электрогитары</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="ukulele" name="ukulele" checked={selectedTypes.includes('ukulele')}
            onChange = {()=>dispatch(setSelectedTypes('ukulele'))}
          />
          <label htmlFor="ukulele">Укулеле</label>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="4-strings" name="4-strings" checked={selectedStrings.includes(4)} disabled={selectedTypes.length !==0 && !selectedTypes.includes('ukulele') && !selectedTypes.includes('electric')}
            onChange = {()=>dispatch(setSelectedStrings(4))}
          />
          <label htmlFor="4-strings">4</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="6-strings" name="6-strings" checked={selectedStrings.includes(6)} disabled={selectedTypes.length !==0 && !selectedTypes.includes('acoustic') && !selectedTypes.includes('electric')}
            onChange = {()=>dispatch(setSelectedStrings(6))}
          />
          <label htmlFor="6-strings">6</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="7-strings" name="7-strings" checked={selectedStrings.includes(7)} disabled={selectedTypes.length !==0 && !selectedTypes.includes('acoustic') && !selectedTypes.includes('electric')}
            onChange = {()=>dispatch(setSelectedStrings(7))}
          />
          <label htmlFor="7-strings">7</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="12-strings" name="12-strings" checked={selectedStrings.includes(12)} disabled={selectedTypes.length !==0 && !selectedTypes.includes('acoustic')}
            onChange = {()=>dispatch(setSelectedStrings(12))}
          />
          <label htmlFor="12-strings">12</label>
        </div>
      </fieldset>
      <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset"
        onClick={()=>{
          dispatch(setMinPrice(''));
          dispatch(setMaxPrice(''));
        }}
      >Очистить
      </button>
    </form>
  );
}

export default FilterCard;
