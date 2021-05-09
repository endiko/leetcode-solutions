const { test, expect } = require('@jest/globals');
const quickSort = require('./quickSort');

test('[4,7,2,9,5,5,0,8,6,44,12] should return [ 0, 2, 4, 5, 6, 7, 8, 9, 12, 44 ]', () => {
  expect(quickSort([4,7,2,9,5,5,0,8,6,44,12])).toEqual([ 0, 2, 4, 5, 6, 7, 8, 9, 12, 44 ]);
})
