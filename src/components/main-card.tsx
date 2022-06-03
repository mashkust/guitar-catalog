import React, { useEffect } from 'react';
import CatalogCard from './catalog-card';
import PageHeader from './page-header';
import PageFooter from './page-footer';
import { AppRoute } from '../const';
import { Link } from 'react-router-dom';
import { Guitar } from '../types/types';

type MainProps = {
  guitars:Guitar [];
};

function MainCard({guitars}: MainProps): JSX.Element {


  useEffect(() => {
  console.log('guitars change');
  },[guitars]);

  return (
    <React.Fragment>
      <PageHeader />
      <main className="page-content ">
        <div className="container">
          <h1 className="page-content__title title title--bigger" >Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><Link to={AppRoute.Page1} className="link" >Главная</Link>
            </li>
            <li className="breadcrumbs__item"><Link to={AppRoute.Page1}>Каталог</Link>
            </li>
          </ul>
          <CatalogCard guitars={guitars} />
        </div>
      </main>
      <PageFooter />
    </React.Fragment>
  );
}

export default MainCard;
