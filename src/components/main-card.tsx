import React from 'react';
import CatalogCard from './catalog-card';
import PageHeader from './page-header';
import PageFooter from './page-footer';


function MainCard(): JSX.Element {

  return (
    <React.Fragment>
      <PageHeader />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item"><a className="link">Каталог</a>
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
