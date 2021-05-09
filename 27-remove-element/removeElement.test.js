const { test, expect } = require('@jest/globals')
const removeElement = require('./removeElement')


test('[3,2,2,3], val = 3 should return 2', () => {
  expect(removeElement([3,2,2,3], 3)).toBe(2)
})

test('[0,1,2,2,3,0,4,2], val = 2 should return 5', () => {
  expect(removeElement([0,1,2,2,3,0,4,2], 2)).toBe(5)
})
