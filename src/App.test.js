import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const mockPaths = [
  'images/2022_01_20.jpg',
  'images/2022_01_21.jpg',
  'images/2022_01_22.jpg'
];

const mockSessions = ['2022-01-19', '2022-01-22', '2022-01-24', '2022-01-26'];

const mockVersion = '0.0.0';

test('snapshot', () => {
  const { asFragment } = render(
    <App
      callback={jest.fn()}
      isAuthorized={true}
      paths={mockPaths}
      sessions={mockSessions}
      version={mockVersion}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('scroll', () => {
  render(
    <App
      callback={jest.fn()}
      isAuthorized={true}
      paths={mockPaths}
      sessions={mockSessions}
      version={mockVersion}
    />
  );
  const slider = screen.getByRole('slider');
  expect(slider).toMatchSnapshot();
  fireEvent.change(slider, { target: { value: 0 } });
  expect(screen.getByText('Jan 20th, 2022 - 1/3')).toBeInTheDocument();
});

test('unauthorized', () => {
  const { asFragment } = render(
    <App
      callback={jest.fn()}
      isAuthorized={false}
      paths={mockPaths}
      sessions={mockSessions}
      version={mockVersion}
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
      version={mockVersion}
    />
  );
  const close = screen.getByRole('button');
  fireEvent.click(close);
  expect(mockCallback).toBeCalledWith('unauthorized');
});
