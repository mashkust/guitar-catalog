import { Guitar } from '../../types/types';

type DescriptionTabProps = {
    guitar: Guitar,
}

function Overview({guitar}:  DescriptionTabProps): JSX.Element {
  return (
    <p className="tabs__product-description ">
      {guitar.description}
    </p>
  );
}

export default Overview;
