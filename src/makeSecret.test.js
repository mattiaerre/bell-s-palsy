import makeSecret from './makeSecret';

test('happy path', () => {
  const secret = makeSecret('YOLO');
  secret.add(1, 'Y');
  secret.add(2, 'O');
  secret.add(3, 'L');
  secret.add(4, 'O');
  expect(secret.valid()).toBe(true);
});
