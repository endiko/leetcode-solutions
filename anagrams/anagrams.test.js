const {expect, test} = require('@jest/globals');
const anagrams = require('./anagrams');

test('rail safety, fairy tales should return true', () => {
  expect(anagrams('rail safety', 'fairy tales')).toBe(true)
});
test('hello world, Bye there should return false', () => {
  expect(anagrams('hello world', 'Bye there')).toBe(false)
});
