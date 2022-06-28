import React from 'react';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import { AppRoute } from '../const';
import { Link } from 'react-router-dom';
import BasketCard from './basket-card';
import { useAppSelector } from '../hooks/hooks';
import { Guitar } from '../types/types';

function BasketPage(): JSX.Element {
  const boughtGuitars = useAppSelector(({ DATA }) => DATA.boughtGuitars);

  return (
    <React.Fragment>
      <PageHeader />
      <main className="page-content ">
        <div className="container">
          <h1 className="page-content__title title title--bigger" >Корзина</h1>
          <ul className="breadcrumbs page-content__breadcrumbs page-content__breadcrumbs--on-cart-page">
            <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Page1}>Главная</Link>
            </li>
            <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Page1}>Каталог</Link>
            </li>
            <li className="breadcrumbs__item"><a className="link">Корзина</a>
            </li>
          </ul>
          <div className="cart">
            {boughtGuitars.length !== 0 ? boughtGuitars.map((guitar: Guitar) => (
              <BasketCard {...{ guitar }} key={guitar.id} />)) : ''}
            <div className="cart__footer">
              <div className="cart__coupon coupon">
                <h2 className="title title--little coupon__title">Промокод на скидку</h2>
                <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>
                <form className="coupon__form" id="coupon-form" method="post" action="/">
                  <div className="form-input coupon__input">
                    <label className="visually-hidden">Промокод</label>
                    <input type="text" placeholder="Введите промокод" id="coupon" name="coupon" />
                    <p className="form-input__message form-input__message--success">Промокод принят</p>
                  </div>
                  <button className="button button--big coupon__button">Применить</button>
                </form>
              </div>
              <div className="cart__total-info">
                <p className="cart__total-item"><span className="cart__total-value-name">Всего:</span><span className="cart__total-value">52 000 ₽</span></p>
                <p className="cart__total-item"><span className="cart__total-value-name">Скидка:</span><span className="cart__total-value cart__total-value--bonus">- 3000 ₽</span></p>
                <p className="cart__total-item"><span className="cart__total-value-name">К оплате:</span><span className="cart__total-value cart__total-value--payment">49 000 ₽</span></p>
                <button className="button button--red button--big cart__order-button">Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <PageFooter />
    </React.Fragment>
  );
}

export default BasketPage;
