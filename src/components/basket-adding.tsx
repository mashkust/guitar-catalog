import { useDispatch } from 'react-redux';
import { TYPES } from '../const';
import { buyGuitar } from '../store/guitar-data';
import { Guitar } from '../types/types';
import { pasrePrice } from '../utils';

type BasketAdiingProps = {
  setIsBookingModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
  guitar: Guitar,
}

function BasketAdiing({ setIsBookingModalOpened, guitar }: BasketAdiingProps): JSX.Element {
  const { name, previewImg, price, vendorCode, type, stringCount } = guitar;
  const dispatch = useDispatch();
  const startScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="modal is-active modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay"
          onClick={() => {
            setIsBookingModalOpened(false);
            startScroll();
          }}
        >
        </div>
        <div className="modal__content">
          <h2 className="modal__header title title--medium">Добавить товар в корзину</h2>
          <div className="modal__info"><img className="modal__img" src={`img/content/${previewImg.length && previewImg.slice(0).substring(4)}`} srcSet={`img/content/${previewImg.length && previewImg.slice(0).substring(4, previewImg.length - 4)}@2x.jpg 2x`} width="67" height="137" alt={name} />
            <div className="modal__info-wrapper">
              <h3 className="modal__product-name title title--little title--uppercase">Гитара {name}</h3>
              <p className="modal__product-params modal__product-params--margin-11">Артикул:{vendorCode}</p>
              <p className="modal__product-params">{type ? TYPES[type] : ''},{stringCount} струнная</p>
              <p className="modal__price-wrapper"><span className="modal__price">Цена:</span><span className="modal__price">{pasrePrice(price)} ₽</span></p>
            </div>
          </div>
          <div className="modal__button-container">
            <button className="button button--red button--big modal__button modal__button--add"
              onClick={() => {
                setIsBookingModalOpened(false);
                startScroll();
                dispatch(buyGuitar(guitar));
              }}
            >
              Добавить в корзину
            </button>
          </div>
          <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"
            onClick={() => {
              setIsBookingModalOpened(false);
              startScroll();
            }}
          >
            <span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketAdiing;
