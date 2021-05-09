const { test, expect } = require('@jest/globals');
const restoreString = require('./index');

test('s = "codeleet", indices = [4,5,6,7,0,2,1,3] should return leetcode ', () => {
  expect(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])).toBe('leetcode');
})

test('s = "abc", indices = [0,1,2] should return abc ', () => {
  expect(restoreString('abc', [0, 1, 2])).toBe('abc');
})

test('s = "aiohn", indices = [3,1,4,2,0] should return nihao ', () => {
  expect(restoreString('aiohn', [3, 1, 4, 2, 0])).toBe('nihao');
})

test('s = "aaiougrt", indices = [4,0,2,6,7,3,1,5] should return arigatou ', () => {
  expect(restoreString('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5])).toBe('arigatou');
})

test('s = "art", indices = [1,0,2] should return rat ', () => {
  expect(restoreString('art', [1,0,2])).toBe('rat');
})
