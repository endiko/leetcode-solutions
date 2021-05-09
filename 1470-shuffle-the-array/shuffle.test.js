const { test, expect } = require('@jest/globals');
const shuffle = require('./shuffle');

test('nums = [2,5,1,3,4,7], n = 3 => [2,3,5,4,1,7] ', () => {
  expect(shuffle([2,5,1,3,4,7], 3)).toStrictEqual([2,3,5,4,1,7]);
})

test('nums = [1,2,3,4,4,3,2,1], n = 4 => [2,3,5,4,1,7] ', () => {
  expect(shuffle([1,2,3,4,4,3,2,1], 4)).toStrictEqual([1,4,2,3,3,2,4,1]);
})

test('nums = [1,1,2,2], n = 2 => [1,2,1,2] ', () => {
  expect(shuffle([1,1,2,2], 2)).toStrictEqual([1,2,1,2]);
})

test('nums = [1], n = 1 => [1] ', () => {
  expect(shuffle([1], 1)).toStrictEqual([1]);
})
