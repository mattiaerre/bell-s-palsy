import { render } from '@testing-library/react';
import Quote from './Quote';

test('snapshot', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});
