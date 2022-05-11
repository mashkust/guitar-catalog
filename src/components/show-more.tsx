import { useAppDispatch } from '../hooks/hooks';
import { incCountAction } from '../store/comment-process';

function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <button className="button button--medium reviews__more-button" onClick = {() => dispatch(incCountAction())} >
        Показать еще отзывы
    </button>
  );
}

export default ShowMore;
