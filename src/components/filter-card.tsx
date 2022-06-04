import { useState } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Guitar } from '../types/types';



function FilterCard(): JSX.Element {
  const guitars = useAppSelector(({ DATA }) => DATA.guitars);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');


  const findPrice = (arr: Guitar[], maxOrMin: string) => {
    const arrPrice = arr.slice().map((el)=> el.price);
    let al = arrPrice.length;
    let extremum = arrPrice[al-1];
    while (al--){
      if (maxOrMin === 'max') {
        if(arrPrice[al] > extremum){
          extremum = arrPrice[al];
        }
      }
      else {
        if(arrPrice[al] < extremum){
          extremum = arrPrice[al];
        }
      }
    }
    return extremum;
  };

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Цена, ₽</legend>
        <div className="catalog-filter__price-range">
          <div className="form-input">
            <label className="visually-hidden">Минимальная цена</label>
            <input type="number" placeholder={String(findPrice(guitars, 'min'))} id="priceMin" name="от" min="0" value={minPrice}
              onKeyPress={(evt) => {
                const {key} = evt;
                if (key === '-' || key === '.'|| key === 'e' || key === ',') {
                  evt.preventDefault();
                }}}
              onChange={(evt) =>  setMinPrice(evt.currentTarget.value)}
            />
          </div>
          <div className="form-input">
            <label className="visually-hidden">Максимальная цена</label>
            <input type="number" placeholder={String(findPrice(guitars, 'max'))} id="priceMax" name="до" min="0" value={maxPrice}
              onKeyPress={(evt) => {
                const {key} = evt;
                if (key === '-' || key === '.' || key === 'e' || key === ',') {
                  evt.preventDefault();
                }}}
              onChange={(evt) => {
                setMaxPrice(evt.currentTarget.value);
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
      <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
    </form>
  );
}

export default FilterCard;
