import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const heading = screen.getByText("Bell's palsy - Mattia's journey");
  expect(heading).toBeInTheDocument();
});
