import { Guitar} from '../../types/types';

type DetailsTabProps = {
  guitar: Guitar,
}

function Details({guitar}: DetailsTabProps): JSX.Element {
  return (
    <table className="tabs__table">
      <tbody >
        <tr className="tabs__table-row">
          <td className="tabs__title">Артикул:</td>
          <td className="tabs__value">{guitar.vendorCode}</td>
        </tr>
        <tr className="tabs__table-row">
          <td className="tabs__title">Тип:</td>
          <td className="tabs__value">{guitar.type}</td>
        </tr>
        <tr className="tabs__table-row">
          <td className="tabs__title">Количество струн:</td>
          <td className="tabs__value">{guitar.stringCount}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Details;
