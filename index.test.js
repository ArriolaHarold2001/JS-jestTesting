const main = require('./index');

test('Print Greeting language defaults to english', () => {
  expect(main('Harold', '')).toBe('Hello, Harold');
});

test('if no input default to Hello World message', () => {
  expect(main('', '')).toBe('Hello, world!');
});

test('Print Spanish greeting', () => {
  expect(main('Harold', 'spanish')).toBe('Hola, Harold');
});
test('Print French greeting', () => {
  expect(main('Harold', 'french')).toBe('Bonjour, Harold');
});
