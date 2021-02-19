const { test, expect } = require('@jest/globals')
const reverse = require('./reverse')

test('Reverse of 123 is 321', () => {
  expect(reverse(123)).toBe(321)
})

test('Reverse of -123 is -321', () => {
  expect(reverse(-123)).toBe(-321)
})

test('Reverse of 120 is 21', () => {
  expect(reverse(120)).toBe(21)
})

test('Reverse of 0 is 0', () => {
  expect(reverse(0)).toBe(0)
})
