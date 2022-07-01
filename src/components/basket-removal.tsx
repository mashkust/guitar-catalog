import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteGuitar, setIsBasketRemoval } from '../store/guitar-data';
import { pasrePrice, startScroll, stopScroll } from '../utils';
import Pentoville from 'pentonville';
import { Guitar } from '../types/types';
import { TYPES } from '../const';

type BasketRemovalProps = {
  guitar: Guitar ,
}

function BasketRemoval( {guitar}: BasketRemovalProps ): JSX.Element {
  const { id, name, vendorCode, type, stringCount, price, previewImg } = guitar;
  const dispatch = useDispatch();

  const modalCloseHandler = () => {
    dispatch(setIsBasketRemoval(false));
    startScroll();
  };

  useEffect(() => stopScroll(), []);
  useEffect(() => () => modalCloseHandler(), []);

  return (
    <Pentoville>
      <div className="modal is-active modal--success modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal
            onClick={() => {
              modalCloseHandler();
            }}
          >
          </div>
          <div className="modal__content">
            <h2 className="modal__header title title--medium title--red">Удалить этот товар?</h2>
            <div className="modal__info"><img className="modal__img" src={`img/content/${previewImg.length && previewImg.slice(0).substring(4)}`} srcSet={`img/content/${previewImg.length && previewImg.slice(0).substring(4, previewImg.length - 4)}@2x.jpg 2x`} width="67" height="137" alt="Честер bass"/>
              <div className="modal__info-wrapper">
                <h3 className="modal__product-name title title--little title--uppercase">{name}</h3>
                <p className="modal__product-params modal__product-params--margin-11">Артикул: {vendorCode}</p>
                <p className="modal__product-params">{type ? TYPES[type] : ''}, {stringCount} струнная</p>
                <p className="modal__price-wrapper"><span className="modal__price">Цена:</span><span className="modal__price">{pasrePrice(price)} ₽</span></p>
              </div>
            </div>
            <div className="modal__button-container ">
              <button className="button button--small modal__button" onClick={() => {
                modalCloseHandler();
                dispatch(deleteGuitar(id));
              }}
              >Удалить товар
              </button>
              <button className="button button--black-border button--small modal__button modal__button--right" onClick={() => {
                modalCloseHandler();
              }}
              >Продолжить покупки
              </button>
            </div>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={() => {
              modalCloseHandler();
            }}
            ><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </Pentoville>
  );
}

export default BasketRemoval;
