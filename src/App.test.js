import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test("it renders Bell's palsy - Mattia's journey", () => {
  render(<App />);
  const heading = screen.getByText("Bell's palsy - Mattia's journey");
  expect(heading).toBeInTheDocument();
});

test.skip('scroll', () => {
  render(<App />);
  const slider = screen.getByRole('slider');
  expect(slider).toMatchSnapshot();
  fireEvent.change(slider, { taget: { value: 0 } });
  expect(screen.getByText('1/6')).toBeInTheDocument();
});
