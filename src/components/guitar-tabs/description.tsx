import { Guitar } from '../../types/types';

type DescriptionTabProps = {
    guitar: Guitar,
}

function Description({guitar}:  DescriptionTabProps): JSX.Element {
  return (
    <p data-testid="description" className="tabs__product-description ">
      {guitar.description}
    </p>
  );
}

export default Description;
