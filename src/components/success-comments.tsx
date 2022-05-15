import { useDispatch } from 'react-redux';
import { setIsSuccessModalOpened } from '../store/guitar-data';
import { startScroll } from '../utils';

function SuccessComments (): JSX.Element {
  const dispatch = useDispatch();
  return (
    <div data-testid = 'successed-modal'  className="modal is-active modal--success modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay"
          onClick={() => {
            dispatch(setIsSuccessModalOpened(false));
            startScroll();
          }}
        >
        </div>
        <div className="modal__content">
          <svg className="modal__icon" width="26" height="20" aria-hidden="true">
            <use href="#icon-success"></use>
          </svg>
          <p className="modal__message">Спасибо за ваш отзыв!</p>
          <div className="modal__button-container modal__button-container--review">
            <button className="button button--small modal__button modal__button--review"
              onClick={() => {
                dispatch(setIsSuccessModalOpened(false));
                startScroll();
              }}
            >К покупкам!
            </button>
          </div>
          <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"
            onClick={() => {
              dispatch(setIsSuccessModalOpened(false));

              startScroll();
            }}
          ><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessComments ;
