import { render, screen, fireEvent } from '@testing-library/react';
import IconButton from '.';

describe('IconButton', () => {
  const TestIcon = () => <span data-testid="test-icon">⭐</span>;

  it('renders the icon', () => {
    render(<IconButton icon={<TestIcon />} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<IconButton icon={<TestIcon />} onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('spreads extra props to the button', () => {
    render(<IconButton icon={<TestIcon />} data-testid="icon-btn-extra" />);
    expect(screen.getByTestId('icon-btn-extra')).toBeInTheDocument();
  });

  it('uses the correct className', () => {
    render(<IconButton icon={<TestIcon />} />);
    expect(screen.getByRole('button').className).toMatch(/iconButton/);
  });
});