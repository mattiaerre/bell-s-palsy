import { render } from '@testing-library/react';
import Container from './Container';

test('snapshot', () => {
  const { asFragment } = render(<Container />);
  expect(asFragment()).toMatchSnapshot();
});
