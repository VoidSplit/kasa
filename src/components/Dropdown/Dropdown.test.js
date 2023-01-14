import React from 'react';
import '../Dropdown/Dropdown.css';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const list = [
  { text: 'Option 1', display: true },
  { text: 'Option 2' },
  { text: 'Option 3' }
];

test('Dropdown opens and closes when clicked', () => {
  render(<Dropdown list={list} />);
  const dropdown = screen.getByAltText(/arrow/i);
  expect(screen.queryByTestId('dropdown-list')).toBeNull();
  fireEvent.click(dropdown);
  expect(screen.getByTestId('dropdown-list')).toBeInTheDocument();
  fireEvent.click(dropdown);
  expect(screen.queryByTestId('dropdown-list')).toBeNull();
});