import { render } from '@testing-library/react';
import Playground from './Playground';

test('snapshot', () => {
  const { asFragment } = render(<Playground callback={jest.fn()} />);
  expect(asFragment()).toMatchSnapshot();
});

test('authorized', () => {
  // TODO
});
