import { render, screen } from '@testing-library/react';
import StarRating from '.';

jest.mock('../../../assets', () => ({
  FullStarIcon: (props: any) => <svg data-testid="full-star" {...props} />,
  HalfStarIcon: (props: any) => <svg data-testid="half-star" {...props} />,
  EmptyStarIcon: (props : any) => <svg data-testid="empty-star" {...props} />,
}));

describe('StarRating', () => {

  it('renders 3.5 stars correctly', () => {
    render(<StarRating rating={3.5} />);
    expect(screen.getAllByTestId('full-star')).toHaveLength(3);
    expect(screen.getAllByTestId('half-star')).toHaveLength(1);
    expect(screen.getAllByTestId('empty-star')).toHaveLength(1);
    expect(screen.getByText('3.5')).toHaveAttribute('data-rating');
  });

  it('renders 2 stars correctly (rest empty)', () => {
    render(<StarRating rating={2} />);
    expect(screen.getAllByTestId('full-star')).toHaveLength(2);
    expect(screen.queryByTestId('half-star')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('empty-star')).toHaveLength(3);
    expect(screen.getByText('2')).toHaveAttribute('data-rating');
  });

  it('renders 0 stars as all empty', () => {
    render(<StarRating rating={0} />);
    expect(screen.queryByTestId('full-star')).not.toBeInTheDocument();
    expect(screen.queryByTestId('half-star')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('empty-star')).toHaveLength(5);
    expect(screen.getByText('0')).toHaveAttribute('data-rating');
  });

  it('renders children wrappers for all stars', () => {
    render(<StarRating rating={3} />);
    expect(screen.getAllByTestId('full-star').length + screen.getAllByTestId('empty-star').length).toBe(5);
    expect(screen.getAllByTestId('full-star')[0].closest('[data-star-wrapper]')).toBeInTheDocument();
    expect(screen.getAllByTestId('full-star')[0].closest('[data-star]')).toBeInTheDocument();
  });
});