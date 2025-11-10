import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Slider from '.';

jest.mock('../../../assets', () => ({
  CloseIcon: (props: any) => <svg data-testid="close-icon" {...props} />,
}));

describe('Slider', () => {
  it('renders the slider overlay and content', () => {
    render(<Slider closeSlider={() => {}}>Hello Content</Slider>);
    expect(screen.getByTestId('close-icon')).toBeInTheDocument();
    expect(screen.getByText('Hello Content')).toBeInTheDocument();
    expect(screen.getByTestId('close-icon').closest('[data-slider-header]')).toBeInTheDocument();
    expect(screen.getByTestId('close-icon').closest('[data-slider]')).toBeInTheDocument();
    expect(screen.getByTestId('close-icon').closest('[data-slider-overlay]')).toBeInTheDocument();
  });

  it('renders the slider title when provided', () => {
    render(<Slider closeSlider={() => {}} sliderTitle="My Title" />);
    expect(screen.getByText('My Title')).toBeInTheDocument();
  });

  it('calls closeSlider when the header is clicked', () => {
    const handleClose = jest.fn();
    render(<Slider closeSlider={handleClose} sliderTitle="Title" />);
    fireEvent.click(screen.getByTestId('close-icon').closest('[data-slider-header]') as any);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders children inside the content container', () => {
    render(<Slider closeSlider={() => {}}><div data-testid="child">Child Content</div></Slider>);
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByTestId('child').closest('[data-slider-content]')).toBeInTheDocument();
  });
});