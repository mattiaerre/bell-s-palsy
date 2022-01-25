import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const mockPaths = [
  'images/2022_01_20.jpg',
  'images/2022_01_21.jpg',
  'images/2022_01_22.jpg'
];

const mockVersion = '0.5.1';

test('snapshot', () => {
  const { asFragment } = render(
    <App paths={mockPaths} version={mockVersion} />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("it renders Bell's palsy - Mattia's journey", () => {
  render(<App paths={mockPaths} version={mockVersion} />);
  const heading = screen.getByText("Bell's palsy - Mattia's journey");
  expect(heading).toBeInTheDocument();
});

test.skip('scroll', () => {
  render(<App paths={mockPaths} version={mockVersion} />);
  const slider = screen.getByRole('slider');
  expect(slider).toMatchSnapshot();
  fireEvent.change(slider, { taget: { value: 0 } });
  expect(screen.getByText('1/6')).toBeInTheDocument();
});
