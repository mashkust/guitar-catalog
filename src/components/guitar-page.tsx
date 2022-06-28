import React, { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppRoute, STARS_MAX } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchCommentsAction, fetchGuitarAction } from '../store/api-actions';
import { Guitar, Comment } from '../types/types';
import LoadingScreen from './loading-screen';
import PageFooter from './page-footer';
import PageHeader from './page-header';
import GuitarTab from './guitar-tab';
import BasketAdiing from './basket-adding';
import Comments from './guitar-tabs/comments';
import ShowMore from './show-more';
import AddComments from './add-comments';
import SuccessComments from './success-comments';
import { pasrePrice, startScroll, stopScroll } from '../utils';
import { setIsCommentModalOpened, setIsSuccessModalOpened } from '../store/guitar-data';

type GuitarPageProps = {
  tab: boolean,
}

function GuitarPage({ tab }: GuitarPageProps): JSX.Element {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onCommentBtnClick = () => {
    dispatch(setIsCommentModalOpened(true));
  };

  const onUpBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (mainRef && mainRef.current) {
      mainRef.current.scrollIntoView({ block: 'start' });
    }
  };

  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    const guitarid = Number(params.id);

    if (guitarid) {
      dispatch(fetchGuitarAction(guitarid));
      dispatch(fetchCommentsAction(guitarid));
    }
  }, [dispatch, params]);

  const mainRef = useRef<HTMLElement | null>(null);

  const { guitar, comments, isSuccessModalOpened, isCommentModalOpened } = useAppSelector(({ DATA }) => DATA);
  const { commentCardsCount } = useAppSelector(({ COMMENT }) => COMMENT);


  document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ('key' in evt) {
      isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
    }
    if (isEscape) {
      dispatch(setIsCommentModalOpened(false));
      setIsBookingModalOpened(false);
      dispatch(setIsSuccessModalOpened(false));
      startScroll();
    }
  };

  if (guitar) {
    const { name, previewImg, price, rating } = guitar as Guitar;
    const STARS = Math.ceil(rating);
    const NULL_STARS = STARS_MAX - STARS;

    return (
      <React.Fragment>
        <PageHeader />
        <main ref={mainRef} className={isCommentModalOpened ? 'page-content overflow-hidden' : 'page-content'} >
          <div className="container">
            <h1 className="page-content__title title title--bigger">{name}</h1>
            <ul className="breadcrumbs page-content__breadcrumbs">
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Page1}>Главная</Link>
              </li>
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Page1}>Каталог</Link>
              </li>
              <li className="breadcrumbs__item"><a className="link">{name}</a>
              </li>
            </ul>
            <div className="product-container"><img className="product-container__img" src={`img/content/${previewImg.length && previewImg.slice(0).substring(4)}`} srcSet={`img/content/${previewImg.length && previewImg.slice(0).substring(4, previewImg.length - 4)}@2x.jpg 2x`} width="90" height="235" alt={name} />
              <div className="product-container__info-wrapper">
                <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
                <div className="rate product-container__rating">
                  {
                    [...Array(STARS)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <svg width="14" height="14" aria-hidden="true">
                          <use href="#icon-full-star"></use>
                        </svg>
                      </React.Fragment>
                    ))
                  }
                  {
                    [...Array(NULL_STARS)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <svg width="14" height="14" aria-hidden="true">
                          <use href="#icon-star"></use>
                        </svg>
                      </React.Fragment>
                    ))
                  }
                  <p className="visually-hidden">Оценка {rating}</p>
                  <p className="rate__count">{comments && comments[0] ? comments.length : '0'}</p>
                </div>
                <GuitarTab tab={tab} guitar={guitar} />
              </div>
              <div className="product-container__price-wrapper">
                <p className="product-container__price-info product-container__price-info--title">Цена:</p>
                <p className="product-container__price-info product-container__price-info--value">{pasrePrice(price)} ₽</p>
                <button className="button button--red button--big product-container__button"
                  onClick={() => {
                    onBookingBtnClick();
                    stopScroll();
                  }}
                >
                  Добавить в корзину
                </button>
              </div>
              {isBookingModalOpened && <BasketAdiing guitar={guitar} setIsBookingModalOpened={setIsBookingModalOpened} />}
            </div>
            <section className="reviews">
              <h3 className="reviews__title title title--bigger">Отзывы</h3>
              <button className="button button--red-border button--big reviews__sumbit-button"
                onClick={() => {
                  onCommentBtnClick();
                  stopScroll();
                }}
              >Оставить отзыв
              </button>
              {isCommentModalOpened && <AddComments guitar={guitar} />}
              {isSuccessModalOpened && <SuccessComments />}
              {comments && Array.from(comments).slice(0, commentCardsCount).map((comment: Comment) => (
                <Comments someComment={comment} key={comment.id} />))}
              {comments && comments.length > commentCardsCount ? <ShowMore /> : ''}
              {comments?.length !== 0 ? <button style={{ zIndex: 10 }} className="button button--up button--red-border button--big reviews__up-button" onClick={onUpBtnClick}>Наверх</button> : ''}
            </section>
          </div>
        </main>
        <PageFooter />
      </React.Fragment>
    );
  }
  return <LoadingScreen />;
}

export default GuitarPage;
