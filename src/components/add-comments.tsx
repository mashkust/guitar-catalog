import React, { useState } from 'react';
import { RATING_VALUES } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { sendCommentAction } from '../store/api-actions';
import { sendComment, setIsCommentModalOpened, setIsDisconnect, setIsSuccessModalOpened } from '../store/guitar-data';
import type { Guitar } from '../types/types';
import Pentoville from 'pentonville';

type AddCommentsProps = {
  guitar: Guitar;
}

function AddComments({ guitar }: AddCommentsProps): JSX.Element {
  const { name, id } = guitar;
  const dispatch = useAppDispatch();

  const isReviewSending = useAppSelector(({ DATA }) => DATA.isDataSending);
  const [text, setText] = useState('');
  const [userName, setUserName] = useState('');
  const [adv, setAdv] = useState('');
  const [disadv, setDisadv] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [isValidationText, setIsValidationText] = useState<boolean>(false);
  const [isValidationName, setIsValidationName] = useState<boolean>(false);
  const [isValidationRating, setIsValidationRating] = useState<boolean>(false);
  const [isValidationAdv, setIsValidationAdv] = useState<boolean>(false);
  const [isValidationDisadv, setIsValidationDisadv] = useState<boolean>(false);

  const getValidation = (val: boolean | ((prevState: boolean) => boolean)) => {
    setIsValidationText(val);
    setIsValidationName(val);
    setIsValidationRating(val);
    setIsValidationAdv(val);
    setIsValidationDisadv(val);
  };

  const ratingChangeHandler = (userRating: number) => {
    setRating(userRating);
  };

  const startScroll = () => {
    document.body.style.overflow = 'auto';
  };

  const onSuccessBtnClick = () => {
    dispatch(setIsSuccessModalOpened(true));
  };

  return (
    <Pentoville>
      <div className="modal is-active modal--review modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay"
            onClick={() => {
              dispatch(setIsCommentModalOpened(false));
              startScroll();
            }}
          >
          </div>
          <div className="modal__content">
            <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
            <h3 className="modal__product-name title title--medium-20 title--uppercase">{name}</h3>
            <form className="form-review" onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
              evt.preventDefault();
              dispatch(setIsDisconnect(navigator.onLine));
              dispatch(sendComment(true));
              dispatch(sendCommentAction({
                comment: text,
                guitarId: id,
                rating: rating,
                userName: userName,
                advantage: adv,
                disadvantage: disadv,
              }));
              if ( navigator.onLine) {
                dispatch(setIsCommentModalOpened(false));
                onSuccessBtnClick();
              }
            }} action="#"
            >
              <div className="form-review__wrapper">
                <div className="form-review__name-wrapper">
                  <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                  <input className="form-review__input form-review__input--name" id="user-name" type="text" autoComplete="off" value={userName} disabled={isReviewSending}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                      setUserName(evt.currentTarget.value);
                      setIsValidationName(false);
                    }} required autoFocus tabIndex={1}
                  />
                  <p className={isValidationName && userName.length === 0 ? 'form-review__warning' : 'form-review__war'} > {isValidationName && userName.length === 0 ? 'Заполните поле' : ''}</p>
                </div>
                <div><span className="form-review__label form-review__label--required">Ваша Оценка</span>
                  <div className="rate rate--reverse" >
                    {RATING_VALUES.map((el) => (
                      <React.Fragment key={el.value}>
                        <input className="visually-hidden" key={el.value} id={`star-${el.value}`} type="radio"
                          name="rate" value={el.value} checked={rating === el.value}
                          onChange={(evt) => {
                            setIsValidationRating(false);
                            ratingChangeHandler(Number(evt.target.value));
                          }} disabled={isReviewSending} required tabIndex={2}
                        />
                        <label className="rate__label" htmlFor={`star-${el.value}`}>
                        </label>
                      </React.Fragment>
                    ))}
                    {isValidationRating && rating === 0 ? <p className="rate__message">Поставьте оценку</p> : ''}
                  </div>
                </div>
              </div>
              <label className="form-review__label form-review__label--required" htmlFor="adv">Достоинства</label>
              <input className="form-review__input" id="adv" type="text" autoComplete="off" value={adv} disabled={isReviewSending}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  setAdv(evt.currentTarget.value);
                  setIsValidationAdv(false);
                }} required tabIndex={3}
              />
              <p className={isValidationAdv && adv.length === 0 ? 'form-review__warning' : 'form-review__war'} > {isValidationAdv && adv.length === 0 ? 'Заполните поле' : ''}</p>
              <label className="form-review__label form-review__label--required" htmlFor="disadv">Недостатки</label>
              <input className="form-review__input" id="disadv" type="text" autoComplete="off" value={disadv} disabled={isReviewSending}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  setDisadv(evt.currentTarget.value);
                  setIsValidationDisadv(false);
                }} required tabIndex={4}
              />
              <p className={isValidationDisadv && disadv.length === 0 ? 'form-review__warning' : 'form-review__war'} > {isValidationDisadv && disadv.length === 0 ? 'Заполните поле' : ''}</p>
              <label className="form-review__label form-review__label--required" htmlFor="comment">Комментарий</label>
              <textarea value={text} disabled={isReviewSending}
                onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setText(evt.currentTarget.value);
                  setIsValidationText(false);
                }} className="form-review__input form-review__input--textarea" id="comment" autoComplete="off" required tabIndex={5}
              >
              </textarea>
              <p className={isValidationText && text.length === 0 ? 'form-review__warning' : 'form-review__war'} > {isValidationText && text.length === 0 ? 'Заполните поле' : ''}</p>
              <button className="button button--medium-20 form-review__button" type="submit" disabled={isReviewSending} onClick={() => getValidation(true)}>Отправить отзыв</button>
            </form>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"
              onClick={() => {
                dispatch(setIsCommentModalOpened(false));
                startScroll();
              }}
            >
              <span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </Pentoville>
  );
}

export default AddComments;
