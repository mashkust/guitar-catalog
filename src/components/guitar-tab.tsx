import {generatePath, Link} from 'react-router-dom';
import { Guitar} from '../types/types';
import Details from './guitar-tabs/details';
import Description from './guitar-tabs/description';
import { AppRoute } from '../const';
// import { guitarTab } from '../const';

type GuitarTabProps = {
    guitar:Guitar,
    tab:boolean,
}

function GuitarTab({tab, guitar}: GuitarTabProps): JSX.Element {
  return (

    <div className="tabs">
      <Link className="button button--medium tabs__button" to={generatePath(AppRoute.Details,{id: String(guitar.id)})}>Характеристики</Link>
      <Link className="button button--black-border button--medium tabs__button" to={generatePath(AppRoute.Description,{id: String(guitar.id)})}>Описание</Link>
      <div className="tabs__content" id="characteristics">
        {tab  && <Details guitar={guitar}/>}
        {!tab  && <Description  guitar={guitar}/>}
      </div>
    </div>
  );
}

export default GuitarTab;
