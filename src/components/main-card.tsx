import React from 'react';
import CatalogCard from './catalog-card';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import { AppRoute } from '../const';
import { Link } from 'react-router-dom';


function MainCard(): JSX.Element {

  return (
    <React.Fragment>
      <PageHeader />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><Link to={AppRoute.Main} className="link" >Главная</Link>
            </li>
            <li className="breadcrumbs__item"><Link to={AppRoute.Main}>Каталог</Link>
            </li>
          </ul>
          <CatalogCard />
        </div>
      </main>
      <PageFooter />
    </React.Fragment>
  );
}

export default MainCard;
