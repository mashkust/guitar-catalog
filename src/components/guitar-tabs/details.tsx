import { TYPES } from '../../const';
import { Guitar} from '../../types/types';

type DetailsTabProps = {
  guitar: Guitar,
}

function Details({guitar}: DetailsTabProps): JSX.Element {
  const {vendorCode, type, stringCount} = guitar;
  return (
    <table className="tabs__table">
      <tbody >
        <tr className="tabs__table-row">
          <td className="tabs__title">Артикул:</td>
          <td className="tabs__value">{vendorCode}</td>
        </tr>
        <tr className="tabs__table-row">
          <td className="tabs__title">Тип:</td>
          <td className="tabs__value">{type ? TYPES[type] : ''}</td>
        </tr>
        <tr className="tabs__table-row">
          <td className="tabs__title">Количество струн:</td>
          <td className="tabs__value">{stringCount} струнная</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Details;
