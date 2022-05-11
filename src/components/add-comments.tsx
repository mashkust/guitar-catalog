import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { sendCommentAction } from '../store/api-actions';
import { sendReview } from '../store/guitar-data';
import type { Guitar } from '../types/types';

type AddCommentsProps = {
    guitar: Guitar;
    setIsCommentModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

function AddComments({ guitar, setIsCommentModalOpened }: AddCommentsProps): JSX.Element {
  const { name, id } = guitar;
  const dispatch = useAppDispatch();

  const [text, setText] = useState('');
  const [userName, setUserName] = useState('');
  const [adv, setAdv] = useState('');
  const [disadv, setDisadv] = useState('');
  return (
    <div className="modal is-active modal--review modal-for-ui-kit">
      <div className="modal__wrapper" >
        <div className="modal__overlay" ></div>
        <div className="modal__content">
          <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
          <h3 className="modal__product-name title title--medium-20 title--uppercase">{name}</h3>
          <form className="form-review" onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            dispatch(sendReview(true));
            dispatch(sendCommentAction({
              comment: text,
              guitarId: id,
              rating: 5,
              userName: userName,
              advantage: adv,
              disadvantage: disadv,
            }));
          }} action="#"
          >
            <div className="form-review__wrapper">
              <div className="form-review__name-wrapper">
                <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                <input className="form-review__input form-review__input--name" id="user-name" type="text" autoComplete="off" value={userName}
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                    setUserName(evt.currentTarget.value);
                  }} required
                />
                <p className="form-review__warning">Заполните поле</p>
              </div>
              <div><span className="form-review__label form-review__label--required">Ваша Оценка</span>
                <div className="rate rate--reverse">
                  <input className="visually-hidden" id="star-5" name="rate" type="radio" value="5" />
                  <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                  <input className="visually-hidden" id="star-4" name="rate" type="radio" value="4" />
                  <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                  <input className="visually-hidden" id="star-3" name="rate" type="radio" value="3" />
                  <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                  <input className="visually-hidden" id="star-2" name="rate" type="radio" value="2" />
                  <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                  <input className="visually-hidden" id="star-1" name="rate" type="radio" value="1" />
                  <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                  <p className="rate__message">Поставьте оценку</p>
                </div>
              </div>
            </div>
            <label className="form-review__label form-review__label--required" htmlFor="adv">Достоинства</label>
            <input className="form-review__input" id="adv" type="text" autoComplete="off"  value={adv}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setAdv(evt.currentTarget.value);
              }} required
            />
            <label className="form-review__label form-review__label--required" htmlFor="disadv">Недостатки</label>
            <input className="form-review__input" id="disadv" type="text" autoComplete="off" value={disadv}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                setDisadv(evt.currentTarget.value);
              }} required
            />
            <label className="form-review__label form-review__label--required" htmlFor="comment">Комментарий</label>
            <textarea value={text}
              onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                setText(evt.currentTarget.value);
              }} className="form-review__input form-review__input--textarea" id="comment" autoComplete="off" required
            >
            </textarea>
            <button className="button button--medium-20 form-review__button" type="submit">Отправить отзыв</button>
          </form>
          <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={() => setIsCommentModalOpened(false)}><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddComments;
