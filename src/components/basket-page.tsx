import React, { useState } from 'react';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import { AppRoute, VALIDATION_COUPON } from '../const';
import { Link } from 'react-router-dom';
import BasketCard from './basket-card';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { Guitar } from '../types/types';
import { postCouponAction, postOrdersAction } from '../store/api-actions';
import { setIsBasketRemoval, setIsCoupon, setIsDisconnect } from '../store/guitar-data';
import BasketRemoval from './basket-removal';
import { CouponTypes } from '../types/types';
import { startScroll } from '../utils';

function BasketPage(): JSX.Element {
  const boughtGuitars = useAppSelector(({ DATA }) => DATA.boughtGuitars);
  const isGuitar = useAppSelector(({ DATA }) => DATA.isGuitar);
  const isBasketRemoval = useAppSelector(({ DATA }) => DATA.isBasketRemoval);
  const isDiscount = useAppSelector(({ DATA }) => DATA.isDiscount);
  const isCoupon = useAppSelector(({ DATA }) => DATA.isCoupon);
  const dispatch = useAppDispatch();

  const [coupon, setCoupon] = useState<string>('');
  const [isValidationCoupon, setIsValidationCoupon] = useState<boolean>(false);

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ('key' in evt) {
      isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
    }
    if (isEscape) {
      dispatch(setIsBasketRemoval(false));
      startScroll();
    }
  };

  return (
    <React.Fragment>
      <PageHeader />
      <main className="page-content ">
        {isGuitar ? isBasketRemoval && <BasketRemoval guitar={isGuitar} /> : ''}
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
              <BasketCard {...{ guitar }} key={guitar.id} />)) : 'Корзина пуста'}
            <div className="cart__footer">
              <div className="cart__coupon coupon">
                <h2 className="title title--little coupon__title">Промокод на скидку</h2>
                <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>
                <form className="coupon__form" id="coupon-form"
                  onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
                    evt.preventDefault();
                    if ( VALIDATION_COUPON.includes(coupon.toLowerCase() as CouponTypes)
                    ) {
                      dispatch(setIsCoupon(coupon.toLowerCase() as CouponTypes));
                      dispatch((setIsDisconnect(navigator.onLine)));
                      dispatch(postCouponAction({
                        coupon: coupon.toLowerCase() as CouponTypes,
                      }));
                    }
                    else {dispatch(setIsCoupon(null));}
                  }}
                >
                  <div className="form-input coupon__input">
                    <label className="visually-hidden">Промокод</label>
                    <input type="text" placeholder="Введите промокод" id="coupon" name="coupon" value={coupon}
                      onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                        if (evt.currentTarget.value.includes(' ')) {
                          setCoupon(evt.currentTarget.value.split(' ').join(''));
                        }
                        else {
                          setCoupon(evt.currentTarget.value);
                        }
                        setIsValidationCoupon(false);
                      }}
                    />
                    {isValidationCoupon && isCoupon !== null ? <p className="form-input__message form-input__message--success"> Промокод принят</p> : ''}
                    {isValidationCoupon && isCoupon === null ? <p className="form-input__message form-input__message--error"> Неверный промокод</p> : ''}
                  </div>
                  <button className="button button--big coupon__button"
                    onClick={() => {
                      setIsValidationCoupon(true);
                    }}
                  >Применить
                  </button>
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
                <p className="cart__total-item"><span className="cart__total-value-name">Скидка:</span>
                  <span className= {isDiscount !== 0 ? 'cart__total-value cart__total-value--bonus' : 'cart__total-value '}> {boughtGuitars.reduce((sum, elem) => {
                    if (elem.quantity) {
                      const summ = (sum + elem.price * elem.quantity) ;
                      return summ;}
                    else { return sum + elem.price; }
                  }, 0)} ₽
                  </span>
                </p>
                <p className="cart__total-item"><span className="cart__total-value-name">К оплате:</span>
                  <span className="cart__total-value cart__total-value--payment">{boughtGuitars.reduce((sum, elem) => {
                    if (elem.quantity) { return ((sum + elem.price * elem.quantity) * (1- 0.01 * isDiscount)); }
                    else { return (sum + elem.price); }
                  }, 0)} ₽
                  </span>
                </p>
                <button className="button button--red button--big cart__order-button"
                  onClick={() => {
                    dispatch(postOrdersAction({
                      guitarsIds: boughtGuitars.map((guitar: Guitar) => guitar.id),
                      coupon: isCoupon,
                    }));
                    dispatch((setIsDisconnect(navigator.onLine)));
                  }}
                  disabled = {boughtGuitars.length === 0}
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
