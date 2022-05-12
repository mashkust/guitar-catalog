import React, { useState } from 'react';
import { RATING_VALUES } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { sendCommentAction } from '../store/api-actions';
import { sendComment } from '../store/guitar-data';
import type { Guitar } from '../types/types';

type AddCommentsProps = {
    guitar: Guitar;
    setIsCommentModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

function AddComments({ guitar, setIsCommentModalOpened }: AddCommentsProps): JSX.Element {
  const { name, id } = guitar;
  const dispatch = useAppDispatch();

  const isReviewSending = useAppSelector(({DATA}) => DATA.isDataSending);
  const [text, setText] = useState('');
  const [userName, setUserName] = useState('');
  const [adv, setAdv] = useState('');
  const [disadv, setDisadv] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [isRating, setIsRating] = useState<boolean>(false);

  const ratingChangeHandler = (userRating: number) => {
    setRating(userRating);
    setIsRating(true);
  };

  return (
    <div className="modal is-active modal--review modal-for-ui-kit">
      <div className="modal__wrapper" >
        <div className="modal__overlay" data-close-modal></div>
        <div className="modal__content">
          <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
          <h3 className="modal__product-name title title--medium-20 title--uppercase">{name}</h3>
          <form className="form-review" onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            dispatch(sendComment(true));
            dispatch(sendCommentAction({
              comment: text,
              guitarId: id,
              rating: rating,
              userName: userName,
              advantage: adv,
              disadvantage: disadv,
            }));
          }} action="#"
          >
            <div className="form-review__wrapper">
              <div className="form-review__name-wrapper">
                <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                <input className="form-review__input form-review__input--name" id="user-name" type="text" autoComplete="off" value={userName} disabled = {isReviewSending}
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                    setUserName(evt.currentTarget.value);
                  }} required
                />
                {userName.length>0 ? <p></p>: <p className="form-review__warning">Заполните поле</p>}
              </div>
              <div><span className="form-review__label form-review__label--required">Ваша Оценка</span>
                <div className="rate rate--reverse">
                  {RATING_VALUES.map((el) => (
                    <React.Fragment key={el.value}>
                      <input className = "visually-hidden"  key = {el.value} id = {`star-${el.value}`} type = "radio"
                        name = "rate" value = {el.value} checked = {rating === el.value}
                        onChange = {(evt) => ratingChangeHandler(Number(evt.target.value))} disabled = {isReviewSending}
                      />
                      <label className = "rate__label" htmlFor = {`star-${el.value}`}>
                      </label>
                    </React.Fragment>
                  ))}
                  {rating >0 ? <p></p>: <p className="rate__message">Поставьте оценку</p>}
                </div>
              </div>
            </div>
            <label className="form-review__label form-review__label--required" htmlFor="adv">Достоинства</label>
            <input className="form-review__input" id="adv" type="text" autoComplete="off"  value={adv} disabled = {isReviewSending}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setAdv(evt.currentTarget.value);
              }} required
            />
            {adv.length>0 ? <p></p>: <p className="form-review__warning">Заполните поле</p>}
            <label className="form-review__label form-review__label--required" htmlFor="disadv">Недостатки</label>
            <input className="form-review__input" id="disadv" type="text" autoComplete="off" value={disadv} disabled = {isReviewSending}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setDisadv(evt.currentTarget.value);
              }} required
            />
            {disadv.length>0 ? <p></p>: <p className="form-review__warning">Заполните поле</p>}
            <label className="form-review__label form-review__label--required" htmlFor="comment">Комментарий</label>
            <textarea value={text} disabled = {isReviewSending}
              onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                setText(evt.currentTarget.value);
              }} className="form-review__input form-review__input--textarea" id="comment" autoComplete="off" required
            >
            </textarea>
            {text.length>0 ? <p></p>: <p className="form-review__warning">Заполните поле</p>}
            <button className="button button--medium-20 form-review__button" type="submit" disabled = {!isRating || isReviewSending}>Отправить отзыв</button>
          </form>
          <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={() => setIsCommentModalOpened(false)}><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddComments;

{/* <div class="modal is-active modal--review modal-for-ui-kit">
<div class="modal__wrapper">
  <div class="modal__overlay" data-close-modal></div>
  <div class="modal__content">
    <h2 class="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
    <h3 class="modal__product-name title title--medium-20 title--uppercase">СURT Z30 Plus</h3>
    <form class="form-review">
      <div class="form-review__wrapper">
        <div class="form-review__name-wrapper">
          <label class="form-review__label form-review__label--required" for="user-name">Ваше Имя</label>
          <input class="form-review__input form-review__input--name" id="user-name" type="text" autocomplete="off">
          <p class="form-review__warning">Заполните поле</p>
        </div>
        <div><span class="form-review__label form-review__label--required">Ваша Оценка</span>
          <div class="rate rate--reverse">
            <input class="visually-hidden" id="star-5" name="rate" type="radio" value="5">
            <label class="rate__label" for="star-5" title="Отлично"></label>
            <input class="visually-hidden" id="star-4" name="rate" type="radio" value="4">
            <label class="rate__label" for="star-4" title="Хорошо"></label>
            <input class="visually-hidden" id="star-3" name="rate" type="radio" value="3">
            <label class="rate__label" for="star-3" title="Нормально"></label>
            <input class="visually-hidden" id="star-2" name="rate" type="radio" value="2">
            <label class="rate__label" for="star-2" title="Плохо"></label>
            <input class="visually-hidden" id="star-1" name="rate" type="radio" value="1">
            <label class="rate__label" for="star-1" title="Ужасно"></label>
            <p class="rate__message">Поставьте оценку</p>
          </div>
        </div>
      </div>
      <label class="form-review__label form-review__label--required" for="adv">Достоинства</label>
      <input class="form-review__input" id="adv" type="text" autocomplete="off">
      <p class="form-review__warning">Заполните поле</p>
      <label class="form-review__label form-review__label--required" for="disadv">Недостатки</label>
      <input class="form-review__input" id="disadv" type="text" autocomplete="off">
      <p class="form-review__warning">Заполните поле</p>
      <label class="form-review__label form-review__label--required" for="comment">Комментарий</label>
      <textarea class="form-review__input form-review__input--textarea" id="comment" rows="10" autocomplete="off"></textarea>
      <p class="form-review__warning">Заполните поле</p>
      <button class="button button--medium-20 form-review__button" type="submit">Отправить отзыв</button>
    </form>
    <button class="modal__close-btn button-cross" type="button" aria-label="Закрыть"><span class="button-cross__icon"></span><span class="modal__close-btn-interactive-area"></span>
    </button>
  </div>
</div>
</div> */}