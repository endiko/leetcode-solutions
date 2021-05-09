const { test, expect } = require('@jest/globals');
const average = require('./avarage');

test('salary = [4000,3000,1000,2000] Output: 2500.00000', () => {
  expect(average([4000,3000,1000,2000])).toBe(2500)
})

test('salary = [1000,2000,3000] Output: 2000.00000', () => {
  expect(average([1000,2000,3000])).toBe(2000)
})

test('salary = [6000,5000,4000,3000,2000,1000] Output: 3500.00000', () => {
  expect(average([6000,5000,4000,3000,2000,1000])).toBe(3500)
})

test('salary = [8000,9000,2000,3000,6000,1000] Output: 4750.00000', () => {
  expect(average([8000,9000,2000,3000,6000,1000])).toBe(4750)
})
