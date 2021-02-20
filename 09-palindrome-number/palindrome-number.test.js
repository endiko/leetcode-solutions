const { test } = require('@jest/globals')
const isPalindrome = require('./palindrome-number')

test('121 is palindrome', () => {
  expect(isPalindrome(121)).toBe(true)
})

test('-121 is not a palindrome', () => {
  expect(isPalindrome(-121)).toBe(false)
})

test('10 is not a palindrome', () => {
  expect(isPalindrome(10)).toBe(false)
})

test('-101 is not a palindrome', () => {
  expect(isPalindrome(-101)).toBe(false)
})
