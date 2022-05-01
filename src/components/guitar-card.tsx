import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import type { Guitar } from '../types/types';

type GuitarCardProps = {
  guitar: Guitar;
}

function GuitarCard({ guitar }: GuitarCardProps): JSX.Element {
  const { name, price, previewImg} = guitar;
  return (
    <div className="product-card"><img src={`img/content/${previewImg.length && previewImg.slice(0).substring(4)}`} srcSet={`img/content/${previewImg.length && previewImg.slice(0).substring(4, previewImg.length - 4)}@2x.jpg 2x`} width="75" height="190" alt={name} />
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
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price}
        </p>
      </div>
      <div className="product-card__buttons"><Link to={AppRoute.Main} className="button button--mini" >Подробнее</Link><Link to={AppRoute.Main} className="button button--red button--mini button--add-to-cart">Купить</Link>
      </div>
    </div>
  );
}

export default GuitarCard;
