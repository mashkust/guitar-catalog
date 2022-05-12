import React, { useEffect, useRef, useState } from 'react';
import type {MouseEvent} from 'react';
import { generatePath, Link, useParams } from 'react-router-dom';
import { AppRoute } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchCommentsAction, fetchGuitarAction } from '../store/api-actions';
import { Guitar, Comment } from '../types/types';
import LoadingScreen from './loading-screen';
import PageFooter from './page-footer';
import PageHeader from './page-header';
import GuitarTab from './guitar-tab';
import BasketCard from './basket-card';
import Comments from './guitar-tabs/comments';
import ShowMore from './show-more';
import AddComments from './add-comments';

type GuitarPageProps = {
  tab:boolean,
}

function GuitarPage({tab}: GuitarPageProps): JSX.Element {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState<boolean>(false);
  const [isCommentModalOpened, setIsCommentModalOpened] = useState<boolean>(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  useEffect(() => {
    window.scrollTo({top: 0});
  },[]);

  const onCommentBtnClick = () => {
    setIsCommentModalOpened(true);
  };

  const onUpBtnClick = (evt:MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (mainRef && mainRef.current) {
      mainRef.current.scrollIntoView({block: 'start'});
    }
  };

  const dispatch = useAppDispatch();
  const params = useParams();
  const guitarid = Number(params.id);

  useEffect(() => {
    if (guitarid) {
      dispatch(fetchGuitarAction(guitarid));
      dispatch(fetchCommentsAction(guitarid));
    }
  }, [dispatch, guitarid]);

  const mainRef = useRef<HTMLElement | null>(null);

  const { guitar,comments } = useAppSelector(({ DATA }) => DATA);
  const { commentCardsCount} = useAppSelector(({COMMENT}) => COMMENT);

  const somecomments = comments.slice().sort((a,b)=> {
    if (a.createAt > b.createAt) {return -1;}
    else if (a.createAt < b.createAt) {return 1;}
    else {return 0;}
  });

  if (guitar) {
    const { id, name, previewImg, price } = guitar as Guitar;

    return (
      <React.Fragment>
        <PageHeader />
        <main ref= {mainRef} className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">{name}</h1>
            <ul className="breadcrumbs page-content__breadcrumbs">
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Page1}>Главная</Link>
              </li>
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Page1}>Каталог</Link>
              </li>
              <li className="breadcrumbs__item"><Link to={generatePath(AppRoute.Details,{id: String(id)})} className="link">{name}</Link>
              </li>
            </ul>
            <div className="product-container"><img className="product-container__img" src={`img/content/${previewImg.length && previewImg.slice(0).substring(4)}`} srcSet={`img/content/${previewImg.length && previewImg.slice(0).substring(4, previewImg.length - 4)}@2x.jpg 2x`} width="90" height="235" alt={name} />
              <div className="product-container__info-wrapper">
                <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
                <div className="rate product-container__rating">
                  <svg width="14" height="14" aria-hidden="true">
                    <use href="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use href="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use href="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use href="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use href="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Оценка: Хорошо</p>
                </div>
                <GuitarTab tab= {tab} guitar={guitar}/>
              </div>
              <div className="product-container__price-wrapper">
                <p className="product-container__price-info product-container__price-info--title">Цена:</p>
                <p className="product-container__price-info product-container__price-info--value">{price} ₽</p><button className="button button--red button--big product-container__button" onClick={onBookingBtnClick}>Добавить в корзину</button>
              </div>
              {isBookingModalOpened && <BasketCard guitar = {guitar} setIsBookingModalOpened={setIsBookingModalOpened} />}
            </div>
            <section className="reviews">
              <h3 className="reviews__title title title--bigger">Отзывы</h3><button className="button button--red-border button--big reviews__sumbit-button"  onClick={onCommentBtnClick}>Оставить отзыв</button>
              {isCommentModalOpened && <AddComments guitar = {guitar} setIsCommentModalOpened={setIsCommentModalOpened} />}
              {somecomments && somecomments.slice(0, commentCardsCount).map((comment: Comment) => (
                <Comments someComment = {comment } key={comment.id}/>))}
              {somecomments && somecomments.length > commentCardsCount ? <ShowMore/> : ''}
              <button style = {{ zIndex: 10 }} className="button button--up button--red-border button--big reviews__up-button" onClick = {onUpBtnClick}>Наверх</button>
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
