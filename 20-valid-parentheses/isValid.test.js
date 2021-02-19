const { test, expect } = require('@jest/globals')
const isValid = require('./isValid')

test('string () is valid and return true', () => {
  expect(isValid('()')).toBe(true)
})

test('string ()[]{} is valid and return true', () => {
  expect(isValid('()[]{}')).toBe(true)
})

test('string (] is invalid and return false', () => {
  expect(isValid('(]')).toBe(false)
})

test('string ([)] is invalid and return false', () => {
  expect(isValid('([)]')).toBe(false)
})

test('string {[]} is valid and return true', () => {
  expect(isValid('{[]}')).toBe(true)
})

test('empty string is invalid and return false', () => {
  expect(isValid('')).toBe(false)
})

test('string } is invalid and return false', () => {
  expect(isValid('}')).toBe(false)
})

test('string ( is invalid and return false', () => {
  expect(isValid('(')).toBe(false)
})

test('string {[[{()[]{}}]]} is valid and return true', () => {
  expect(isValid('{[[{()[]{}}]]}')).toBe(true)
})

test('string {[[{()[]{}}]]}{} is valid and return true', () => {
  expect(isValid('{[[{()[]{}}]]}{}')).toBe(true)
})

test('string (){}}{ is invalid and return false', () => {
  expect(isValid('(){}}{')).toBe(false)
})

test('string ([}}]) is invalid and return false', () => {
  expect(isValid('([}}])')).toBe(false)
})
