const { test, expect } = require('@jest/globals');
const fib = require('./fib');

test('n = 2. It should return 1', () => {
  expect(fib(2)).toBe(1)
})

test('n = 3. It should return 2', () => {
  expect(fib(3)).toBe(2)
})

test('n = 4. It should return 3', () => {
  expect(fib(4)).toBe(3)
})
