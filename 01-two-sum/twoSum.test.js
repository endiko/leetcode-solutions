const { test } = require('@jest/globals')
const twoSum = require('./twoSum')

test('The sum of 9 in [2,7,11,15] is [0, 1]', () => {
  expect(twoSum([2,7,11,15], 9)).toStrictEqual([0, 1])
})

test('The sum of 6 in [3,2,4] is [1, 2]', () => {
  expect(twoSum([3,2,4], 6)).toStrictEqual([1, 2])
})

test('The sum of 6 in [3, 3] is [0, 1]', () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1])
})
