import { useState } from 'react';
import { useAppSelector } from '../hooks/hooks';

function FilterCard(): JSX.Element {
  const guitars = useAppSelector(({ DATA }) => DATA.guitars);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const arrPrice = guitars.slice().map((el)=> el.price);
  const max = Math.max.apply(null, arrPrice);
  const min = Math.min.apply(null, arrPrice);
  const compareValues = () => {
    if (Number(maxPrice) < Number(minPrice) && maxPrice !== '' && minPrice !== '') {
      if (Number(maxPrice) < min) {
        setMaxPrice(String(min));
      }
      else if (Number(minPrice) > max) {
        setMinPrice(String(max));
      }
      else {
        setMaxPrice(minPrice);
        setMinPrice(maxPrice);
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
            <input type="number" placeholder={String(min)} id="priceMin" name="от" min="0" value={minPrice}
              onKeyPress={(evt) => {
                const {key} = evt;
                if (key === '-' || key === '.'|| key === 'e' || key === ',') {
                  evt.preventDefault();
                }}}
              onChange={(evt) =>  setMinPrice(evt.currentTarget.value)}
              onBlur = {()=> {
                if (Number(minPrice) < min) {
                  setMinPrice(String(min));
                }
                if (Number(minPrice) > max ) {
                  setMinPrice(String(max));
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
                setMaxPrice(evt.currentTarget.value);
              }}
              onBlur = {()=> {
                if (Number(maxPrice) > max ) {
                  setMaxPrice(String(max));
                }
                if (Number(maxPrice) < min ) {
                  setMaxPrice(String(min));
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
          <input className="visually-hidden" type="checkbox" id="acoustic" name="acoustic" />
          <label htmlFor="acoustic">Акустические гитары</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="electric" name="electric" />
          <label htmlFor="electric">Электрогитары</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="ukulele" name="ukulele" />
          <label htmlFor="ukulele">Укулеле</label>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="4-strings" name="4-strings" />
          <label htmlFor="4-strings">4</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="6-strings" name="6-strings" />
          <label htmlFor="6-strings">6</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="7-strings" name="7-strings" />
          <label htmlFor="7-strings">7</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="12-strings" name="12-strings" disabled />
          <label htmlFor="12-strings">12</label>
        </div>
      </fieldset>
      <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset"
        onClick={()=>{
          setMinPrice('');
          setMaxPrice('');
        }}
      >Очистить
      </button>
    </form>
  );
}

export default FilterCard;
