import GuitarCard from './guitar-card';
import { Guitar } from '../types/types';
import Pagination from './pagination';
import FilterCard from './filter-card';
import { setIsSortInc, setIsSorting } from '../store/guitar-data';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

type CatalogCardProps = {
  guitars: Guitar[];
};

function CatalogCard({ guitars }: CatalogCardProps): JSX.Element {
  const {isSorting, isSortInc} = useAppSelector(({ DATA }) => DATA);
  const dispatch = useAppDispatch();

  const onSortPriceHandler = () =>{
    dispatch(setIsSorting('price'));
  };

  const onSortRatingHandler = () =>{
    dispatch(setIsSorting('rating'));
  };

  const onSortIncHandler = (bool : boolean) =>{
    dispatch(setIsSortInc(bool));
  };

  return (
    <div className="catalog">
      <FilterCard />
      <div className="catalog-sort">
        <h2 className="catalog-sort__title">Сортировать:</h2>
        <div className="catalog-sort__type">
          <button className={`catalog-sort__type-button ${isSorting === 'price' ? 'catalog-sort__type-button--active' : ''}`}  aria-label="по цене"
            onClick={onSortPriceHandler}
          > по цене
          </button>
          <button className={`catalog-sort__type-button ${isSorting === 'rating' ? 'catalog-sort__type-button--active' : ''}`} aria-label="по популярности"
            onClick={onSortRatingHandler}
          >по популярности
          </button>
        </div>
        <div className="catalog-sort__order">
          <button className={`catalog-sort__order-button catalog-sort__order-button--up ${isSortInc === true ? 'catalog-sort__order-button--active' : ''}`} aria-label="По возрастанию" onClick={() => onSortIncHandler(true)}></button>
          <button className={`catalog-sort__order-button catalog-sort__order-button--down ${isSortInc === false ? 'catalog-sort__order-button--active' : ''}`} aria-label="По убыванию" onClick={() => onSortIncHandler(false)}></button>
        </div>
      </div>
      <div className="cards catalog__cards">
        {guitars && guitars.map((guitar: Guitar) => (
          <GuitarCard {...{ guitar }} key={guitar.id} />))}
      </div>
      <Pagination />
    </div>
  );
}

export default CatalogCard;
