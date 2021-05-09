const { test, expect } = require('@jest/globals')
const removeDuplicates = require('./removeDuplicates')


test('[1,1,2] should return 2]', () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2)
})

test('[0,0,1,1,1,2,2,3,3,4] should return 5', () => {
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5)
})

test('[0,0,1,1,1,2,2,3,3, 4, 4, 4, 4] should return 5', () => {
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5)
})

test('[] should return 0', () => {
  expect(removeDuplicates([])).toBe(0)
})

test('[1] should return 1', () => {
  expect(removeDuplicates([1])).toBe(1)
})

test('[4, 4] should return 1', () => {
  expect(removeDuplicates([4,4])).toBe(1)
})
