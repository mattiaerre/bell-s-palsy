import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const mockPaths = [
  'images/2022_01_20.jpg',
  'images/2022_01_21.jpg',
  'images/2022_01_22.jpg'
];

const mockSessions = ['2022-01-21', '2022-01-22'];

test('snapshot', () => {
  const { asFragment } = render(
    <App
      callback={jest.fn()}
      isAuthorized={true}
      paths={mockPaths}
      sessions={mockSessions}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('first, last, previous, and next', () => {
  render(
    <App
      callback={jest.fn()}
      isAuthorized={true}
      paths={mockPaths}
      sessions={mockSessions}
    />
  );
  const first = screen.getAllByRole('button')[1];
  fireEvent.click(first);
  expect(screen.getByText('Jan 20th, 2022 - 1/3')).toBeInTheDocument();
  const last = screen.getAllByRole('button')[4];
  fireEvent.click(last);
  expect(screen.getByText('Jan 22nd, 2022 - 3/3')).toBeInTheDocument();
  const previous = screen.getAllByRole('button')[2];
  fireEvent.click(previous);
  expect(screen.getByText('Jan 21st, 2022 - 2/3')).toBeInTheDocument();
  const next = screen.getAllByRole('button')[3];
  fireEvent.click(next);
  expect(screen.getByText('Jan 22nd, 2022 - 3/3')).toBeInTheDocument();
});

test('unauthorized', () => {
  const { asFragment } = render(
    <App
      callback={jest.fn()}
      isAuthorized={false}
      paths={mockPaths}
      sessions={mockSessions}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('close', () => {
  const mockCallback = jest.fn();
  render(
    <App
      callback={mockCallback}
      isAuthorized={true}
      paths={mockPaths}
      sessions={mockSessions}
    />
  );
  const close = screen.getAllByRole('button')[0];
  fireEvent.click(close);
  expect(mockCallback).toBeCalledWith('unauthorized');
});
