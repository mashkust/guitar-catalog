import {useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../const';
// import { useAppDispatch, useAppSelector } from '../hooks/hooks';
// import { fetchCommentsAction } from '../store/api-actions';
import type { Guitar } from '../types/types';
import BasketCard from './basket-card';

type GuitarCardProps = {
  guitar: Guitar;
}

function GuitarCard({ guitar }: GuitarCardProps): JSX.Element {
  const { name, price, previewImg, id} = guitar;

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (guitar.id) {
  //     dispatch(fetchCommentsAction(guitar.id));
  //   }
  // }, [dispatch, guitar.id]);
  // const {comments } = useAppSelector(({ DATA }) => DATA);
  // console.log(comments)
  const [isBookingModalOpened, setIsBookingModalOpened] = useState<boolean>(false);
  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  return (
    <div className="product-card"><img src={`img/content/${previewImg.length && previewImg.slice(0).substring(4)}`} srcSet={`img/content/${previewImg.length && previewImg.slice(0).substring(4, previewImg.length - 4)}@2x.jpg 2x`} width="75" height="190" alt={name} />
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width="12" height="11" aria-hidden="true">
            <use href="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use href="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use href="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use href="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use href="#icon-star"></use>
          </svg>
          <p className="visually-hidden">Рейтинг: Хорошо</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span></p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price}
        </p>
      </div>
      <div className="product-card__buttons"><Link to={generatePath(AppRoute.Details,{id: String(id)})} className="button button--mini" >Подробнее</Link>
        <button className="button button--red button--mini button--add-to-cart"  onClick={onBookingBtnClick}>Купить</button>
        {isBookingModalOpened && <BasketCard guitar = {guitar} setIsBookingModalOpened={setIsBookingModalOpened} />}
      </div>
    </div>
  );
}

export default GuitarCard;
