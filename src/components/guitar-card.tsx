import React, { useEffect } from 'react';
import { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute, STARS_MAX } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchCommentsAction } from '../store/api-actions';
import type { Guitar,Comment} from '../types/types';
import { pasrePrice, stopScroll } from '../utils';
import BasketCard from './basket-card';

type GuitarCardProps = {
  guitar: Guitar;
}

function GuitarCard({ guitar }: GuitarCardProps): JSX.Element {
  const { name, price, previewImg, id, rating } = guitar;

  const [ mount, setMount ] = useState(false);

  const STARS = Math.ceil(rating);
  const NULL_STARS = STARS_MAX - STARS;
  const dispatch = useAppDispatch();

  if (!mount) {
    if (id) {
      dispatch(fetchCommentsAction(id));
    }
  }

  useEffect(() =>  setMount(true), []);

  const comments  = useAppSelector(({ DATA }) => DATA.comments);
  const lengthComments = (com: Comment []) => {
    // console.log(com);
    if(com[0] && id && id === com[0].guitarId ) {
      const dlina= com.length;
      return dlina;
    }
  };


  const [isBookingModalOpened, setIsBookingModalOpened] = useState<boolean>(false);
  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  return (
    <div className="product-card"><img src={`img/content/${previewImg.length && previewImg.slice(0).substring(4)}`} srcSet={`img/content/${previewImg.length && previewImg.slice(0).substring(4, previewImg.length - 4)}@2x.jpg 2x`} width="75" height="190" alt={name} />
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {
            [...Array(STARS)].map(() => (
              <React.Fragment key={Math.random()}>
                <svg width="12" height="11" aria-hidden="true">
                  <use href="#icon-full-star"></use>
                </svg>
              </React.Fragment>
            ))
          }
          {
            [...Array(NULL_STARS)].map(() => (
              <React.Fragment key={Math.random()}>
                <svg width="12" height="11" aria-hidden="true">
                  <use href="#icon-star"></use>
                </svg>
              </React.Fragment>
            ))
          }
          <p className="visually-hidden">Рейтинг {rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{lengthComments(comments)}</p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{pasrePrice(price)} ₽
        </p>
      </div>
      <div className="product-card__buttons"><Link to={generatePath(AppRoute.Details, { id: String(id) })} className="button button--mini" >Подробнее</Link>
        <button className="button button--red button--mini button--add-to-cart"
          onClick={() => {
            onBookingBtnClick();
            stopScroll();
          }}
        >Купить
        </button>
        {isBookingModalOpened && <BasketCard guitar={guitar} setIsBookingModalOpened={setIsBookingModalOpened} />}
      </div>
    </div>
  );
}

export default GuitarCard;
