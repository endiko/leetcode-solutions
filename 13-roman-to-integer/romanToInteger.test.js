const { test, expect } = require('@jest/globals')
const romanToInt = require('./romanToInteger')

test('A roman numeral III should converted to 3', () => {
  expect(romanToInt('III')).toBe(3)
})

test('A roman numeral IV should converted to 4', () => {
  expect(romanToInt('IV')).toBe(4)
})

test('A roman numeral IX should converted to 9', () => {
  expect(romanToInt('IX')).toBe(9)
})

test('A roman numeral LVIII should converted to 58', () => {
  expect(romanToInt('LVIII')).toBe(58)
})
