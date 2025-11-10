import { render, screen } from '@testing-library/react';
import IconLink from '.';

describe('IconLink', () => {
  const TestIcon = () => <span data-testid="test-icon">🔗</span>;

  it('renders the icon', () => {
    render(<IconLink icon={<TestIcon />} link="https://example.com" />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders the link with correct href', () => {
    render(<IconLink icon={<TestIcon />} link="https://example.com" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('renders text if provided', () => {
    render(<IconLink icon={<TestIcon />} link="https://example.com" text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('does not render span if text is not provided', () => {
    render(<IconLink icon={<TestIcon />} link="https://example.com" />);
    expect(screen.queryByText('Click me')).not.toBeInTheDocument();
  });
});