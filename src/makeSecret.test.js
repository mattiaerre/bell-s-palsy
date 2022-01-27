import makeSecret from './makeSecret';

test('happy path', () => {
  const secret = makeSecret();
  secret.add(1, 2);
  secret.add(2, 3);
  secret.add(3, 5);
  secret.add(4, 5);
  expect(secret.valid()).toBe(true);
});
