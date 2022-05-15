import {render, screen} from '@testing-library/react';
import Pagination from './pagination';

describe('Component: Pagination', () => {
  it('should render correctly', () => {
    render(<Pagination />);
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
