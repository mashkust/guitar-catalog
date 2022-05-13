import React from 'react';
import { MONTH, STARS_MAX } from '../../const';
import { Comment } from '../../types/types';

type CommentsTabProps = {
  someComment: Comment,
}

function Comments({ someComment }: CommentsTabProps): JSX.Element {
  const { comment, rating, userName, advantage, disadvantage, createAt } = someComment;
  const STARS = Math.ceil(rating);
  const NULL_STARS = STARS_MAX - STARS;

  const parseDate = (timeStr: string | Date) => {
    const date = new Date(timeStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const dateStr = `${day}  ${MONTH[month - 1]}`;
    return dateStr;
  };

  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">{userName}</h4><span className="review__date">{parseDate(createAt)}</span>
      </div>
      <div className="rate review__rating-panel">
        {
          [...Array(STARS)].map(() => (
            <React.Fragment key={Math.random()}>
              <svg width="14" height="14" aria-hidden="true">
                <use href="#icon-full-star"></use>
              </svg>
            </React.Fragment>
          ))
        }
        {
          [...Array(NULL_STARS)].map(() => (
            <React.Fragment key={Math.random()}>
              <svg width="14" height="14" aria-hidden="true">
                <use href="#icon-star"></use>
              </svg>
            </React.Fragment>
          ))
        }
        <p className="visually-hidden">Оценка: {rating}</p>
      </div>
      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{advantage}</p>
      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{disadvantage}</p>
      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{comment} </p>
    </div>
  );
}

export default Comments;
