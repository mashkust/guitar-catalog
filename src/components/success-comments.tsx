import { startScroll } from '../utils';

type BasketCardProps = {
  setIsSuccessModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

function BasketCard({ setIsSuccessModalOpened }: BasketCardProps): JSX.Element {

  return (
    <div className="modal is-active modal--success modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay"
          onClick={() => {
            setIsSuccessModalOpened(false);
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
                setIsSuccessModalOpened(false);
                startScroll();
              }}
            >К покупкам!
            </button>
          </div>
          <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"
            onClick={() => {
              setIsSuccessModalOpened(false);
              startScroll();
            }}
          ><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
