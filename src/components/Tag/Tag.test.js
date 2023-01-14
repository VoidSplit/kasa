import React from 'react'
import { render, screen } from '@testing-library/react'
import Tag from '../Tag/Tag'

test('Tag component displays correct tag name', () => {
  const tagName = 'Test Tag'
  render(<Tag tagName={tagName} />)

  expect(screen.getByText(tagName)).toBeInTheDocument()
});
