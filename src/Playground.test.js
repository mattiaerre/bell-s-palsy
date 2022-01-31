import { fireEvent, render, screen } from '@testing-library/react';
import Playground from './Playground';

test('snapshot', () => {
  const { asFragment } = render(
    <Playground callback={jest.fn()} password="TODO" />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('authorized', () => {
  const mockCallback = jest.fn();
  render(<Playground callback={mockCallback} password="YOLO" />);
  const inputs = screen.getAllByRole('textbox');
  fireEvent.change(inputs[0], { target: { value: 'Y' } });
  fireEvent.change(inputs[1], { target: { value: 'O' } });
  fireEvent.change(inputs[2], { target: { value: 'L' } });
  fireEvent.change(inputs[3], { target: { value: 'O' } });
  expect(mockCallback).toBeCalledWith('authorized');
});
