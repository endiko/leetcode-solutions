const { test, expect } = require('@jest/globals');
const rangeSumBST = require('./index');

test('root = [10,5,15,3,7,null,18], low = 7, high = 15 should return 32 ', () => {
  expect(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15)).toBe(32);
})

test('root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10 should return 23 ', () => {
  expect(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10)).toBe(23);
})
