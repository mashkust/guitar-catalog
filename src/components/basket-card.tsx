import { useDispatch } from 'react-redux';
import { TYPES } from '../const';
import { deleteGuitar, setQuantity } from '../store/guitar-data';
import { Guitar } from '../types/types';

type BasketCardProps = {
  guitar: Guitar;
}

function BasketCard({ guitar }: BasketCardProps): JSX.Element {
  const { id, name, vendorCode, type, stringCount, price } = guitar;
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить" onClick={() => dispatch(deleteGuitar(id))}><span className="button-cross__icon"></span><span className="cart-item__close-button-interactive-area"></span>
      </button>
      <div className="cart-item__image"><img src="img/content/guitar-2.jpg" srcSet="img/content/guitar-2@2x.jpg 2x" width="55" height="130" alt="ЭлектроГитара Честер bass" />
      </div>
      <div className="product-info cart-item__info">
        <p className="product-info__title">{name}</p>
        <p className="product-info__info">Артикул: {vendorCode}</p>
        <p className="product-info__info">{type ? TYPES[type] : ''}, {stringCount} струнная</p>
      </div>
      <div className="cart-item__price">{price} ₽</div>
      <div className="quantity cart-item__quantity">
        <button className="quantity__button" aria-label="Уменьшить количество" onClick={() => {
          dispatch(setQuantity({id, quantity: 'decr'}));}}
        >
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-minus"></use>
          </svg>
        </button>
        <input className="quantity__input" type="number" value={String(guitar.quantity)} id="2-count" name="2-count" min="1" max="99"
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            // dispatch(setQuantity(Number(evt.currentTarget.value)));
          }}
        />
        <button className="quantity__button" aria-label="Увеличить количество" onClick={() => {
          dispatch(setQuantity({id, quantity: 'inc'}));}}
        >
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </button>
      </div>
      <div className="cart-item__price-total">{price*(guitar.quantity || 0)} ₽</div>
    </div>
  );
}

export default BasketCard;

