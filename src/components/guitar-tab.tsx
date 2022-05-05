import {Link} from 'react-router-dom';
import {useState} from 'react';
import { Film, Guitar, Review } from '../types/types';
import Overview from './movie-tabs/overview';
import Details from './movie-tabs/details';
import Reviews from './movie-tabs/reviews';
import { movieTab } from '../const';
import Description from './guitar-tabs/description';

type GuitarTabProps = {
    guitar:Guitar,
}

function GuitarTab({guitar}: GuitarTabProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs"><a className="button button--medium tabs__button" href="#characteristics">Характеристики</a><a className="button button--black-border button--medium tabs__button" href="#description">Описание</a>
      <div className="tabs__content" id="characteristics">
        <Details guitar={guitar}/>
        <Description guitar={guitar}/>
      </div>
    </div>
  );
}

export default GuitarTab;
