import { render, screen } from '@testing-library/react';
import Container from './Container';

test("it renders Bell's palsy - Mattia's journey", () => {
  render(<Container />);
  const heading = screen.getByText("Bell's palsy - Mattia's journey");
  expect(heading).toBeInTheDocument();
});
