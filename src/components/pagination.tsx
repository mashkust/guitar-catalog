import { Link } from 'react-router-dom';
import { AppRoute } from '../const';


function Pagination(): JSX.Element {
  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        <li className="pagination__page "><Link to = {AppRoute.Main} className="link pagination__page-link" >1</Link>
        </li>
        <li className="pagination__page"><Link to = {AppRoute.Page2} className="link pagination__page-link" type="button" >2</Link>
        </li>
        <li className="pagination__page"><Link to = {AppRoute.Page3} className="link pagination__page-link" >3</Link>
        </li>
        <li className="pagination__page pagination__page--next" id="next"><Link to = {AppRoute.Page1} className="link pagination__page-link" >Далее</Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
