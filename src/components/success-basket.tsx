import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../const';
import { setIsSuccessBasket } from '../store/guitar-data';
import { startScroll, stopScroll } from '../utils';
import Pentoville from 'pentonville';

function SuccessBasket(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalCloseHandler = () => {
    dispatch(setIsSuccessBasket(false));
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
              dispatch(setIsSuccessBasket(false));
              startScroll();
            }}
          >
          </div>
          <div className="modal__content">
            <svg className="modal__icon" width="26" height="20" aria-hidden="true">
              <use xlinkHref="#icon-success"></use>
            </svg>
            <p className="modal__message">Товар успешно добавлен в корзину</p>
            <div className="modal__button-container modal__button-container--add">
              <button className="button button--small modal__button" onClick={() => {
                dispatch(setIsSuccessBasket(false));
                navigate(AppRoute.Basket);
                startScroll();
              }}
              >Перейти в корзину
              </button>
              <button className="button button--black-border button--small modal__button modal__button--right" onClick={() => {
                dispatch(setIsSuccessBasket(false));
                navigate(AppRoute.Page1);
                startScroll();
              }}
              >Продолжить покупки
              </button>
            </div>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={() => {
              dispatch(setIsSuccessBasket(false));
              startScroll();
            }}
            ><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </Pentoville>
  );
}

export default SuccessBasket;
