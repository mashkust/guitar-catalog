import React from 'react';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import { AppRoute } from '../const';
import { Link } from 'react-router-dom';
import BasketCard from './basket-card';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { Guitar } from '../types/types';
import { postOrdersAction } from '../store/api-actions';
import { setIsDisconnect } from '../store/guitar-data';
import BasketRemoval from './basket-removal';

function BasketPage(): JSX.Element {
  const boughtGuitars = useAppSelector(({ DATA }) => DATA.boughtGuitars);
  const isGuitar = useAppSelector(({ DATA }) => DATA.isGuitar);
  const isBasketRemoval = useAppSelector(({ DATA }) => DATA.isBasketRemoval);
  const dispatch = useAppDispatch();
  // const oldBoughtGuitars = localStorage.getItem('BoughtGuitars');
  // dispatch(buyGuitar(oldBoughtGuitars.))
  return (
    <React.Fragment>
      <PageHeader />
      <main className="page-content ">
        { isGuitar ? isBasketRemoval && <BasketRemoval guitar={isGuitar}/> : ''}
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
                <p className="cart__total-item"><span className="cart__total-value-name">Всего:</span>
                  <span className="cart__total-value">{boughtGuitars.reduce((sum, elem) => {
                    if (elem.quantity) { return sum + elem.price * elem.quantity; }
                    else { return sum + elem.price; }
                  }, 0)} ₽
                  </span>
                </p>
                <p className="cart__total-item"><span className="cart__total-value-name">Скидка:</span><span className="cart__total-value cart__total-value--bonus">- 3000 ₽</span></p>
                <p className="cart__total-item"><span className="cart__total-value-name">К оплате:</span>
                  <span className="cart__total-value cart__total-value--payment">{boughtGuitars.reduce((sum, elem) => {
                    if (elem.quantity) { return sum + elem.price * elem.quantity; }
                    else { return sum + elem.price; }
                  }, 0)} ₽
                  </span>
                </p>
                <button className="button button--red button--big cart__order-button"
                  onClick={() => {
                    dispatch(postOrdersAction({
                      guitarsIds: boughtGuitars.map((guitar: Guitar) => guitar.id),
                      coupon: null,
                    }));
                    dispatch((setIsDisconnect(navigator.onLine)));
                  }}
                >Оформить заказ
                </button>
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
