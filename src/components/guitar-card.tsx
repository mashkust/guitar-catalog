import React from 'react';
import type {Guitar} from '../types/types';

type GuitarCardProps = {
    guitar: Guitar;
}

function GuitarCard({guitar}: GuitarCardProps): JSX.Element {
    return ( 
        <div className="product-card"><img src="img/content/catalog-product-8.jpg" srcSet="img/content/catalog-product-8@2x.jpg 2x" width="75" height="190" alt="СURT Z30 Plus"/>
        <div className="product-card__info">
          <div className="rate product-card__rate">
            <svg width="12" height="11" aria-hidden="true">
              <use xlinkHref="#icon-full-star"></use>
            </svg>
            <svg width="12" height="11" aria-hidden="true">
              <use xlinkHref="#icon-full-star"></use>
            </svg>
            <svg width="12" height="11" aria-hidden="true">
              <use xlinkHref="#icon-full-star"></use>
            </svg>
            <svg width="12" height="11" aria-hidden="true">
              <use xlinkHref="#icon-full-star"></use>
            </svg>
            <svg width="12" height="11" aria-hidden="true">
              <use xlinkHref="#icon-star"></use>
            </svg>
            <p className="visually-hidden">Рейтинг: Хорошо</p>
            <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>76</p>
          </div>
          <p className="product-card__title">СURT Z30 Plus</p>
          <p className="product-card__price"><span className="visually-hidden">Цена:</span>9 700 ₽
          </p>
        </div>
        <div className="product-card__buttons"><a className="button button--mini" href="#">Подробнее</a><a className="button button--red button--mini button--add-to-cart" href="#">Купить</a>
        </div>
      </div>
    );
}

export default GuitarCard;
