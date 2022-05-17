import { Link } from 'react-router-dom';
import { AppRoute } from '../const';


function Pagination(): JSX.Element {
  return (
    <div className="pagination page-content__pagination" data-testid="pagination">
      <ul className="pagination__list">
        {document.location.hash.includes(AppRoute.Page2) ?
          <><li className="pagination__page pagination__page--prev" id="prev"><Link className="link pagination__page-link" to={AppRoute.Page1}>Назад</Link></li>
            <li className="pagination__page "><Link to={AppRoute.Page1} className="link pagination__page-link">1</Link></li>
            <li className="pagination__page"><Link to={AppRoute.Page2} className="link pagination__page-link pagination__page--active" type="button">2</Link></li>
            <li className="pagination__page"><Link to={AppRoute.Page3} className="link pagination__page-link">3</Link></li>
            <li className="pagination__page pagination__page--next" id="next"><Link to = {AppRoute.Page3} className="link pagination__page-link" >Далее</Link>
            </li>
          </> :  '' }
        {document.location.hash.includes(AppRoute.Page1) ?
          <>
            <li className="pagination__page "><Link to={AppRoute.Page1} className="link pagination__page-link pagination__page--active">1</Link></li>
            <li className="pagination__page"><Link to={AppRoute.Page2} className="link pagination__page-link " type="button">2</Link></li>
            <li className="pagination__page"><Link to={AppRoute.Page3} className="link pagination__page-link">3</Link></li>
            <li className="pagination__page pagination__page--next" id="next"><Link to = {AppRoute.Page2} className="link pagination__page-link" >Далее</Link>
            </li>
          </> :  '' }
        {document.location.hash.includes(AppRoute.Page3) ?
          <><li className="pagination__page pagination__page--prev" id="prev"><Link className="link pagination__page-link" to={AppRoute.Page2}>Назад</Link></li>
            <li className="pagination__page "><Link to={AppRoute.Page1} className="link pagination__page-link">1</Link></li>
            <li className="pagination__page"><Link to={AppRoute.Page2} className="link pagination__page-link " type="button">2</Link></li>
            <li className="pagination__page"><Link to={AppRoute.Page3} className="link pagination__page-link pagination__page--active">3</Link></li>
          </> :  '' }
      </ul>
    </div>
  );
}

export default Pagination;
