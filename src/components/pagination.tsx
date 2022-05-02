import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { incCountAction } from '../store/guitar-process';

function Pagination(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        <li className="pagination__page pagination__page--active"><Link to = "" className="link pagination__page-link"  onClick = {() => dispatch(incCountAction())}>1</Link>
        </li>
        <li className="pagination__page"><button className="link pagination__page-link" type="button" onClick = {() => dispatch(incCountAction())}>1</button>
        </li>
        <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
        </li>
        <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href="2">Далее</a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
