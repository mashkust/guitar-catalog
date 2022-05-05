import React, { useEffect } from 'react';
import { generatePath, Link, useParams } from 'react-router-dom';
import { AppRoute } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchCommentsAction, fetchGuitarAction } from '../store/api-actions';
import { Guitar } from '../types/types';
import LoadingScreen from './loading-screen';
import PageFooter from './page-footer';
import PageHeader from './page-header';
import GuitarTab from './guitar-tab';

function GuitarPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const guitarid = Number(params.id);

  useEffect(() => {
    if (guitarid) {
      dispatch(fetchGuitarAction(guitarid));
      dispatch(fetchCommentsAction(guitarid));
    }
  }, [dispatch, guitarid]);

  const { guitar } = useAppSelector(({ DATA }) => DATA);

  if (guitar) {
    const { id, name, previewImg } = guitar as Guitar;

    return (
      <React.Fragment>
        <PageHeader />
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">Товар</h1>
            <ul className="breadcrumbs page-content__breadcrumbs">
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Main}>Главная</Link>
              </li>
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Main}>Каталог</Link>
              </li>
              <li className="breadcrumbs__item"><Link to={generatePath(AppRoute.Guitar,{id: String(id)})} className="link">Товар</Link>
              </li>
            </ul>
            <div className="product-container"><img className="product-container__img" src={`img/content/${previewImg.length && previewImg.slice(0).substring(4)}`} srcSet={`img/content/${previewImg.length && previewImg.slice(0).substring(4, previewImg.length - 4)}@2x.jpg 2x`} width="90" height="235" alt={name} />
              <div className="product-container__info-wrapper">
                <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
                <div className="rate product-container__rating">
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Оценка: Хорошо</p>
                </div>
                <GuitarTab guitar={guitar}/>
              </div>
              <div className="product-container__price-wrapper">
                <p className="product-container__price-info product-container__price-info--title">Цена:</p>
                <p className="product-container__price-info product-container__price-info--value">52 000 ₽</p><a className="button button--red button--big product-container__button" href="#">Добавить в корзину</a>
              </div>
            </div>
            <section className="reviews">
              <h3 className="reviews__title title title--bigger">Отзывы</h3><a className="button button--red-border button--big reviews__sumbit-button" href="#">Оставить отзыв</a>
              <div className="review">
                <div className="review__wrapper">
                  <h4 className="review__title review__title--author title title--lesser">Иванов Максим</h4><span className="review__date">12 декабря</span>
                </div>
                <div className="rate review__rating-panel">
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Оценка: Хорошо</p>
                </div>
                <h4 className="review__title title title--lesser">Достоинства:</h4>
                <p className="review__value">Хороший корпус, чистый звук, стурны хорошего качества</p>
                <h4 className="review__title title title--lesser">Недостатки:</h4>
                <p className="review__value">Тугие колонки</p>
                <h4 className="review__title title title--lesser">Комментарий:</h4>
                <p className="review__value">У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня.</p>
              </div>
              <div className="review">
                <div className="review__wrapper">
                  <h4 className="review__title review__title--author title title--lesser">Перова Ольга</h4><span className="review__date">12 декабря</span>
                </div>
                <div className="rate review__rating-panel">
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Оценка: Хорошо</p>
                </div>
                <h4 className="review__title title title--lesser">Достоинства:</h4>
                <p className="review__value">Хороший корпус, чистый звук, стурны хорошего качества</p>
                <h4 className="review__title title title--lesser">Недостатки:</h4>
                <p className="review__value">Тугие колонки</p>
                <h4 className="review__title title title--lesser">Комментарий:</h4>
                <p className="review__value">У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. </p>
              </div>
              <div className="review">
                <div className="review__wrapper">
                  <h4 className="review__title review__title--author title title--lesser">Преображенская  Ксения</h4><span className="review__date">12 декабря</span>
                </div>
                <div className="rate review__rating-panel">
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Оценка: Хорошо</p>
                </div>
                <h4 className="review__title title title--lesser">Достоинства:</h4>
                <p className="review__value">Хороший корпус, чистый звук, стурны хорошего качества</p>
                <h4 className="review__title title title--lesser">Недостатки:</h4>
                <p className="review__value">Тугие колонки</p>
                <h4 className="review__title title title--lesser">Комментарий:</h4>
                <p className="review__value">У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. </p>
              </div>
              <button className="button button--medium reviews__more-button">Показать еще отзывы</button><a className="button button--up button--red-border button--big reviews__up-button" href="#header">Наверх</a>
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
