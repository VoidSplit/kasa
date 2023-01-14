import React from 'react';
import { render, screen } from '@testing-library/react';
import Thumb from '../Thumb/Thumb';

test('Thumb displays image and location name, and navigates to apartment page when clicked', () => {
  const locationDisplay = 'Nice Apartment';
  const image = 'https://example.com/apartment.jpg';
  const id = '123';

  render(<Thumb locationDisplay={locationDisplay} image={image} id={id} />);

  expect(screen.getByAltText(/appartement/i)).toHaveAttribute('src', image);
  expect(screen.getByText(locationDisplay)).toBeInTheDocument();

});
