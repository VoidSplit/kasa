import { render, fireEvent, screen } from '@testing-library/react';
import Carousel from './Carousel';

test('clicking next button advances to next image', () => {
    render(<Carousel images={['image1.jpg', 'image2.jpg']} />);
    const nextButton = screen.getByLabelText(/next/i);
    const image = screen.getByAltText(/carousel/i);
  
    expect(image.src).toContain('image1.jpg');
    fireEvent.click(nextButton);
    expect(image.src).toContain('image2.jpg');
  });
  
  test('clicking previous button goes back to previous image', () => {
    render(<Carousel images={['image1.jpg', 'image2.jpg']} />);
    const previousButton = screen.getByLabelText(/previous/i);
    const image = screen.getByAltText(/carousel/i);
  
    fireEvent.click(previousButton);
    expect(image.src).toContain('image2.jpg');
    fireEvent.click(previousButton);
    expect(image.src).toContain('image1.jpg');
  });
test('pagination updates correctly', () => {
    render(<Carousel images={['image1.jpg', 'image2.jpg']} />);
    const pagination = screen.getByText(/1\/2/i);
    const nextButton = screen.getByLabelText(/next/i);
  
    expect(pagination.textContent).toBe('1/2');
    fireEvent.click(nextButton);
    expect(pagination.textContent).toBe('2/2');
    fireEvent.click(nextButton);
    expect(pagination.textContent).toBe('1/2');
  });