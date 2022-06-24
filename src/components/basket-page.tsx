import React from 'react';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import { AppRoute } from '../const';
import { Link } from 'react-router-dom';
import BasketCard from './basket-card';

function BasketPage(): JSX.Element {

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
            <BasketCard/>
            <div className="cart__footer">
              <div className="cart__coupon coupon">
                <h2 className="title title--little coupon__title">Промокод на скидку</h2>
                <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>
                <form className="coupon__form" id="coupon-form" method="post" action="/">
                  <div className="form-input coupon__input">
                    <label className="visually-hidden">Промокод</label>
                    <input type="text" placeholder="Введите промокод" id="coupon" name="coupon"/>
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
{/* <main class="page-content">
<div class="container">
  <h1 class="title title--bigger page-content__title">Корзина</h1>
  <ul class="breadcrumbs page-content__breadcrumbs page-content__breadcrumbs--on-cart-page">
    <li class="breadcrumbs__item"><a class="link" href="./main.html">Главная</a>
    </li>
    <li class="breadcrumbs__item"><a class="link" href="./main.html">Каталог</a>
    </li>
    <li class="breadcrumbs__item"><a class="link">Корзина</a>
    </li>
  </ul>
  <div class="cart">
    <div class="cart-item">
      <button class="cart-item__close-button button-cross" type="button" aria-label="Удалить"><span class="button-cross__icon"></span><span class="cart-item__close-button-interactive-area"></span>
      </button>
      <div class="cart-item__image"><img src="img/content/catalog-product-2.jpg" srcset="img/content/catalog-product-2@2x.jpg 2x" width="55" height="130" alt="ЭлектроГитара Честер bass">
      </div>
      <div class="product-info cart-item__info">
        <p class="product-info__title">ЭлектроГитара Честер bass</p>
        <p class="product-info__info">Артикул: SO757575</p>
        <p class="product-info__info">Электрогитара, 6 струнная</p>
      </div>
      <div class="cart-item__price">17 500 ₽</div>
      <div class="quantity cart-item__quantity">
        <button class="quantity__button" aria-label="Уменьшить количество">
          <svg width="8" height="8" aria-hidden="true">
            <use xlink:href="#icon-minus"></use>
          </svg>
        </button>
        <input class="quantity__input" type="number" placeholder="1" id="2-count" name="2-count" max="99">
        <button class="quantity__button" aria-label="Увеличить количество">
          <svg width="8" height="8" aria-hidden="true">
            <use xlink:href="#icon-plus"></use>
          </svg>
        </button>
      </div>
      <div class="cart-item__price-total">17 500 ₽</div>
    </div>
    <div class="cart-item">
      <button class="cart-item__close-button button-cross" type="button" aria-label="Удалить"><span class="button-cross__icon"></span><span class="cart-item__close-button-interactive-area"></span>
      </button>
      <div class="cart-item__image"><img src="img/content/catalog-product-4.jpg" srcset="img/content/catalog-product-4@2x.jpg 2x" width="55" height="130" alt="СURT Z30 Plus">
      </div>
      <div class="product-info cart-item__info">
        <p class="product-info__title">СURT Z30 Plus</p>
        <p class="product-info__info">Артикул: SO754565</p>
        <p class="product-info__info">Электрогитара, 6 струнная</p>
      </div>
      <div class="cart-item__price">34 500 ₽</div>
      <div class="quantity cart-item__quantity">
        <button class="quantity__button" aria-label="Уменьшить количество">
          <svg width="8" height="8" aria-hidden="true">
            <use xlink:href="#icon-minus"></use>
          </svg>
        </button>
        <input class="quantity__input" type="number" placeholder="1" id="4-count" name="4-count" max="99">
        <button class="quantity__button" aria-label="Увеличить количество">
          <svg width="8" height="8" aria-hidden="true">
            <use xlink:href="#icon-plus"></use>
          </svg>
        </button>
      </div>
      <div class="cart-item__price-total">34 500 ₽</div>
    </div>
    <div class="cart__footer">
      <div class="cart__coupon coupon">
        <h2 class="title title--little coupon__title">Промокод на скидку</h2>
        <p class="coupon__info">Введите свой промокод, если он у вас есть.</p>
        <form class="coupon__form" id="coupon-form" method="post" action="/">
          <div class="form-input coupon__input">
            <label class="visually-hidden">Промокод</label>
            <input type="text" placeholder="Введите промокод" id="coupon" name="coupon">
            <p class="form-input__message form-input__message--success">Промокод принят</p>
          </div>
          <button class="button button--big coupon__button">Применить</button>
        </form>
      </div>
      <div class="cart__total-info">
        <p class="cart__total-item"><span class="cart__total-value-name">Всего:</span><span class="cart__total-value">52 000 ₽</span></p>
        <p class="cart__total-item"><span class="cart__total-value-name">Скидка:</span><span class="cart__total-value cart__total-value--bonus">- 3000 ₽</span></p>
        <p class="cart__total-item"><span class="cart__total-value-name">К оплате:</span><span class="cart__total-value cart__total-value--payment">49 000 ₽</span></p>
        <button class="button button--red button--big cart__order-button">Оформить заказ</button>
      </div>
    </div>
  </div>
</div>
</main> */}