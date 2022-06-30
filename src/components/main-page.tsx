import React from 'react';
import CatalogCard from './catalog-card';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import { AppRoute } from '../const';
import { Link } from 'react-router-dom';
import { Guitar } from '../types/types';
import { useAppSelector } from '../hooks/hooks';
import BasketAdiing from './basket-adding';
import SuccessBasket from './success-basket';

type MainProps = {
  guitars: Guitar[];
};

function MainPage({ guitars }: MainProps): JSX.Element {
  const isBasketModalOpened = useAppSelector(({ DATA }) => DATA.isBasketModalOpened);
  const isSuccessBasketModal = useAppSelector(({ DATA }) => DATA.isSuccessBasketModal);
  const isGuitar = useAppSelector(({ DATA }) => DATA.isGuitar);

  return (
    <React.Fragment>
      <PageHeader />
      <main className="page-content ">
        { (document.location.hash.includes('page') && isGuitar) ? isBasketModalOpened && <BasketAdiing guitar={isGuitar}/> : ''}
        { document.location.hash.includes('page') ?  isSuccessBasketModal && <SuccessBasket /> : ''}
        <div className="container">
          <h1 className="page-content__title title title--bigger" >Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Page1}>Главная</Link>
            </li>
            <li className="breadcrumbs__item"><a className="link">Каталог</a>
            </li>
          </ul>
          <CatalogCard guitars={guitars} />
        </div>
      </main>
      <PageFooter />
    </React.Fragment>
  );
}

export default MainPage;
