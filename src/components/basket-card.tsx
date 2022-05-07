type BasketCardProps = {
    setIsBookingModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

function BasketCard({setIsBookingModalOpened}: BasketCardProps): JSX.Element {

  return (
    <div className="modal is-active modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick = {() => setIsBookingModalOpened(false)}></div>
        <div className="modal__content">
          <h2 className="modal__header title title--medium">Добавить товар в корзину</h2>
          <div className="modal__info"><img className="modal__img" src="img/content/catalog-product-2.png" srcSet="img/content/catalog-product-2@2x.png 2x" width="67" height="137" alt="Честер bass" />
            <div className="modal__info-wrapper">
              <h3 className="modal__product-name title title--little title--uppercase">Гитара Честер bass</h3>
              <p className="modal__product-params modal__product-params--margin-11">Артикул: SO757575</p>
              <p className="modal__product-params">Электрогитара, 6 струнная</p>
              <p className="modal__price-wrapper"><span className="modal__price">Цена:</span><span className="modal__price">17 500 ₽</span></p>
            </div>
          </div>
          <div className="modal__button-container">
            <button className="button button--red button--big modal__button modal__button--add">Добавить в корзину</button>
          </div>
          <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick = {() => setIsBookingModalOpened(false) }><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
