const { test, expect } = require('@jest/globals')
const maxProfit = require('./maxProfit')

test('maxProfit value of [7,1,5,3,6,4] is 5', () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(5)
})

test('maxProfit value of [7,6,4,3,1] is 0', () => {
  expect(maxProfit([7,6,4,3,1])).toBe(0)
})

test('maxProfit value of [1, 2] is 1', () => {
  expect(maxProfit([1, 2])).toBe(1)
})

test('maxProfit value of [1, 4, 2] is 3', () => {
  expect(maxProfit([1, 4, 2])).toBe(3)
})

test('maxProfit value of [3,2,6,5,0,3] is 4', () => {
  expect(maxProfit([3,2,6,5,0,3])).toBe(4)
})

test('maxProfit value of [2, 4, 1] is 2', () => {
  expect(maxProfit([2, 4, 1])).toBe(2)
})
