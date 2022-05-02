import React from 'react';
import GuitarCard from './guitar-card';
import { useAppSelector } from '../hooks/hooks';
import { Guitar } from '../types/types';
// import ShowMoreButtonComponent from './show-more';


function CatalogCard(): JSX.Element {
  const initialGuitars = useAppSelector(({ DATA }) => DATA.guitars);
  const { guitarCardsCount} = useAppSelector(({GUITAR}) => GUITAR);
  return (
    <div className="catalog">
      <form className="catalog-filter">
        <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="catalog-filter__block-title">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <div className="form-input">
              <label className="visually-hidden">Минимальная цена</label>
              <input type="number" placeholder="1 000" id="priceMin" name="от" />
            </div>
            <div className="form-input">
              <label className="visually-hidden">Максимальная цена</label>
              <input type="number" placeholder="30 000" id="priceMax" name="до" />
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
      <div className="catalog-sort">
        <h2 className="catalog-sort__title">Сортировать:</h2>
        <div className="catalog-sort__type">
          <button className="catalog-sort__type-button" aria-label="по цене">по цене</button>
          <button className="catalog-sort__type-button" aria-label="по популярности">по популярности</button>
        </div>
        <div className="catalog-sort__order">
          <button className="catalog-sort__order-button catalog-sort__order-button--up" aria-label="По возрастанию"></button>
          <button className="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию"></button>
        </div>
      </div>
      <div className="cards catalog__cards">
        {initialGuitars && initialGuitars.slice(0, guitarCardsCount).map((guitar: Guitar) => (
          <GuitarCard {...{ guitar }} key={guitar.id} />))}
      </div>
      <div className="pagination page-content__pagination">
        <ul className="pagination__list">
          <li className="pagination__page pagination__page--active"><a className="link pagination__page-link" href="1">1</a>
          </li>
          <li className="pagination__page"><a className="link pagination__page-link" href="2">2</a>
          </li>
          <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
          </li>
          <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href="2">Далее</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CatalogCard;