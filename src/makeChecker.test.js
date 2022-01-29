import makeChecker from './makeChecker';

test('happy path', () => {
  const checker = makeChecker('YOLO');
  checker.add(1, 'Y');
  checker.add(2, 'O');
  checker.add(3, 'L');
  checker.add(4, 'O');
  expect(checker.valid()).toBe(true);
});
