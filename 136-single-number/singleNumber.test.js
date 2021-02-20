const { test, expect } = require('@jest/globals')
const singleNumber = require('./singleNumber')

test('The single number of [2, 2, 1] is 1', () => {
  expect(singleNumber([2, 2, 1])).toBe(1)
})

test('The single number of [4, 1, 2, 1, 2] is 4', () => {
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
})

test('The single number of [1] is 1', () => {
  expect(singleNumber([1])).toBe(1)
})
